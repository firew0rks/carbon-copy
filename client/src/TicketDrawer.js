import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Ticket from './Ticket.json';
import MyFormControl from './MyFormControl';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import CardSuggestions from './CardSuggestions';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import FormField from './FormField';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import TextField from '@material-ui/core/TextField';


class TicketDrawer extends React.Component {
  state = {
    right: false,
    createdDate: Ticket._source.date_created,
    status: Ticket._source.status,
    problemAbstract: Ticket._source.problem_abstract
  };
  _closeTickets(){
      this.props.setCCopyTicket({})
      this.props.onClose()

  }
  render() {
    const { classes } = this.props;
    return (
      <div>

        <Drawer anchor="right" open={this.props.ticketDrawerOpened} onClose={()=>this._closeTickets()}
                variant="persistent">
          <div style={{padding: '15px 25px', width: '650px'}}>
            <Grid container justify="flex-start">
              <Grid item xs={12}>
                <div style={{fontSize: 14, color: '#C6C6C6'} }>
                  Incident
                </div>
                <div style={{fontSize: 32}}>
                    INC{this.props.ticket.ticket_number}
                </div>
              </Grid>

                <Grid container>

                {this.props.ccopyTicketsList
                    .map((suggestion)=>{
                    return (
                        <Grid item xs={4}>
                            <CardSuggestions
                                suggestion={suggestion}
                                setCCopyTicket={(ticket)=>{this.props.setCCopyTicket(ticket)}}
                             />
                        </Grid>
                    )
                    })
                }
              </Grid>


              <Grid container justify={'center'} style={{cursor: 'row-resize'}}>
              <KeyboardArrowUp style={{color: '#C6C6C6'}}/>
              </Grid>
              <Divider style={{width: '100%', marginBottom: '20px'}}/>

                <FormField label="Problem Abstract" value={this.props.ticket.problem_abstract}/>
              <FormField label="Application" value={this.props.ticket.Application}/>
              <FormField label="Workfolder" value={this.props.ticket.workfolder}/>
              <FormField label="State" value={this.props.ticket.status}/>

              <Paper>
                <Tabs value={1} indicatorColor="primary" textColor="primary" centered >
                  <Tab label="Automation" />
                  <Tab label="Properties" />
                  <Tab label="Resolution" />
                  <Tab label="Activities" />
                </Tabs>
              </Paper>

              <FormField label="Date Created" value={this.props.ticket.date_created}/>
              <FormField label="Problem Type" value={this.props.ticket.problem_type}/>
              <FormField label="Owner" value={this.props.ticket.owner}/>
              <FormField label="Queue" value={this.props.ticket.queue}/>
              <FormField label="Product" value={this.props.ticket.product}/>

            </Grid>
          </div>


          {/*Tabs*/}
          {/*<div style={{ left: '200px' }}>*/}
            {/*<Paper>*/}
              {/*<Tabs*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleChange}*/}
                {/*indicatorColor="primary"*/}
                {/*textColor="primary"*/}
                {/*centered>*/}
                {/*<Tab label="Automation" />*/}
                {/*<Tab label="Properties" />*/}
                {/*<Tab label="Resolution" />*/}
                {/*<Tab label="Suggestion" />*/}
                {/*<Tab label="Activities" />*/}
              {/*</Tabs>*/}
           {/*</Paper>*/}
          {/*</div>*/}
        </Drawer>
      </div>
    );
  }
}

export default TicketDrawer;