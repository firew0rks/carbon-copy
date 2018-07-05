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
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';


class TicketDrawer extends React.Component {
  state = {
    right: false,
    createdDate: Ticket._source.date_created,
    status: Ticket._source.status,
    problemAbstract: Ticket._source.problem_abstract
  };
  _closeTickets(){
    this.props.setCCopyTicket({})
    this.props.onClose(true)
    this.props.toggleCCopyOpen(false)

  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer anchor="right" open={this.props.ticketDrawerOpened} onClose={()=>this._closeTickets()}
                variant="persistent">
          <IconButton style={{position: 'absolute', top: 2, right: 2}} onClick={()=>this._closeTickets()}>
            <Close/>
          </IconButton>
          <div style={{marginTop: '10px'}}>
          </div>
          <div style={{padding: '0 25px', width: '650px'}}>
            <div container justify="flex-start">
              <Grid item xs={12}>
                <div style={{fontSize: 14, color: '#C6C6C6'} }>
                  Incident
                </div>
                <div style={{fontSize: 32}}>
                  INC{this.props.ticket.ticket_number}
                </div>
              </Grid>

              <Grid container>
                {(this.isEmpty(this.props.ccopyTicket)) && this.props.ccopyTicketsList
                  .map((suggestion)=>{
                    return (
                      <Grid item xs={4}>
                        <CardSuggestions
                          suggestion={suggestion}
                          setCCopyTicket={(ticket)=>{this.props.setCCopyTicket(ticket)}}
                          toggleCCopyOpen={(set)=>this.props.toggleCCopyOpen(set)}
                        />
                      </Grid>
                    )
                  })
                }
              </Grid>


              <Grid container justify={'center'} style={{cursor: 'row-resize'}}>
                {(this.isEmpty(this.props.ccopyTicket)) &&

                <KeyboardArrowUp style={{color: '#C6C6C6'}}/>
                }
                {(this.isEmpty(this.props.ccopyTicket)) &&
                <Divider style={{width: '100%', marginBottom: '20px'}}/>
                }
                <FormField label="Problem Abstract" value={this.props.ticket.problem_abstract}/>
                <FormField label="Application" value={this.props.ticket.Application}/>
                <FormField label="Workfolder" value={this.props.ticket.workfolder}/>
                <FormField label="State" value={this.props.ticket.status}/>

              </Grid>
            </div>
          </div>
          {(this.isEmpty(this.props.ccopyTicket)) &&
          <Paper style={{margin: '15px 0'}}>
            <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
              <Tab label="Automation"/>
              <Tab label="Properties"/>
              <Tab label="Resolution"/>
              <Tab label="Activities"/>
            </Tabs>
          </Paper>
          }
          <div style={{padding: '0 25px', width: '650px'}}>

            <Grid container justify="flex-start">

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