import React, {Component} from 'react';
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

class App extends Component {

    constructor(props) {
        // THIS IS A COMMENT
        super(props);
        this.state = {
            ticketDrawerOpened: false,
            ticketsList: []
        };
    }

    componentDidMount() {
        console.log("hhh here we go!")
        this._getTickets()
    }

    _getTickets(){
        const url = '/api/v1/getAllTickets';

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
                console.log(ticketsList);
                this.setState({
                    ticketsList
                })
            })

    }

    

    toggleDrawer = (side, open) => () => {
        console.log('here');
        this.setState({
            ticketDrawerOpened: !this.state.ticketDrawerOpened,
        });
    };

    render() {
        console.log(this.state.ticketsList)
        return (
            <div className="App">
                <Myapps/>
                <Grid container justify="flex-end" style={{padding: '20px 40px'}}>
                    <Button variant="contained" color="primary" onClick={this.toggleDrawer()}>Create Ticket</Button>
                </Grid>
                <MyTables/>
                <TicketDrawer onClose={() => this.toggleDrawer()} ticketDrawerOpened={this.state.ticketDrawerOpened}/>

            </div>

        );
    }
}

export default App;
