import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import TicketDrawer from './TicketDrawer';
//import HomePage from './HomePage';
//import Dummy from './Dummy';
//import MyBadges from './MyBadges';
//import Myapps from './Myapps';
import Myapps from './Myapps';
import MyTables from './MyTables';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TicketDrawerDetails from './TicketDrawerDetails';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/es/Select/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class App extends Component {

  constructor(props) {
    // THIS IS A COMMENT
    super(props);
    this.state = {
      ticketDrawerOpened: false,
        ticketsList: [],
        selectedTicket:{},
        ccopyTicket:{},
        ccopyTicketsList:[],
  carbonCopyOpened: false,
    };
      this._setTicket = this._setTicket.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
      this._copyField = this._copyField.bind(this);
  }

    componentDidMount() {
        this._getTickets()
    }

    _getTickets(){
        const url = 'http://localhost/api/v1/getAllTickets';

        // const query = {
        //     "query": {"term": {"status" : "Open"}}
        // };

        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            }
        };
        return fetch(url, options)

            .then(res => res.json())
            .then(ticketsList => {
                this.setState({
                    ticketsList: ticketsList.slice(0,10)
                })
            })

    }

    _getCCopySuggestions(ticket){
        const url = 'http://localhost/api/v1/query';
        const options = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body:JSON.stringify(ticket)
        };
        return fetch(url, options)

            .then(res => res.json())
            .then(ccopyTicketsList => {
                this.setState({
                    ccopyTicketsList
                })
            })
    }

    _setTicket(selectedTicket){
      this.setState({
          selectedTicket
      })
    }


    _setCCopyTicket(ccopyTicket){
        this.setState({
            ccopyTicket
        })
    }

    toggleDrawer ()  {
    this.setState({
      ticketDrawerOpened: !this.state.ticketDrawerOpened,
      // carbonCopyOpened: !this.state.carbonCopyOpened,
    });
  };

    toggleCCopyOpen (carbonCopyOpened)  {
        this.setState({
            // ticketDrawerOpened: !this.state.ticketDrawerOpened,
            carbonCopyOpened,
        });
    };

    _copyField(field){
        let ticket=Object.assign({},this.state.selectedTicket);
        ticket[field.key]=field.value
        this.setState({selectedTicket:ticket});
    }
    render() {
    return (
      <div>
        <Myapps/>
        <Grid container justify="space-between" style={{padding: '20px 40px'}}>
          <div style={{fontWeight: '300', fontSize: 40}}>
            Ticket Data
          </div>
          <Button variant="contained" color="primary" style={{height: 20}}>Create Ticket</Button>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <FormControl style={{minWidth: 120, marginRight: 20, marginLeft: 10}}>
            <InputLabel htmlFor="demo-controlled-open-select">Filter By</InputLabel>
            <Select inputProps={{name: 'Filter By', id: 'demo-controlled-open-select'}}></Select>
            </FormControl>
            <FormControl style={{minWidth: 120}}>
              <InputLabel htmlFor="demo-controlled-open-select">Sort By</InputLabel>
              <Select inputProps={{name: 'sort By', id: 'demo-controlled-open-select'}}></Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
        <MyTables
            ticketsList={this.state.ticketsList}
            getCCopySuggestions = {(ticket)=> this._getCCopySuggestions(ticket)}
            onOpen = {()=> this.toggleDrawer()}
            selectedTicket = {this.state.selectedTicket}
            setTicket = {this._setTicket}
            toggleCCopyOpen={(set)=>this.toggleCCopyOpen(set)}
            setCCopyTicket={(ticket)=>this._setCCopyTicket(ticket)}
        />
          <TicketDrawer
              onClose={() => this.toggleDrawer()}
              ticketDrawerOpened={this.state.ticketDrawerOpened}
              ticket={this.state.selectedTicket}
              ccopyTicketsList={this.state.ccopyTicketsList}
              setCCopyTicket={(ticket)=>this._setCCopyTicket(ticket)}
              toggleCCopyOpen={(set)=>this.toggleCCopyOpen(set)}
              ccopyTicket={this.state.ccopyTicket}

          />
        <TicketDrawerDetails onClose={() => this.toggleDrawer()} carbonCopyOpened={this.state.carbonCopyOpened}
        ccopyTicket={this.state.ccopyTicket}
        copyField={(field)=>{this._copyField(field)}}

        />
      </div>

    );
  }
}

export default App;
