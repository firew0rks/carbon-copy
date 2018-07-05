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
import FormField2 from './FormField2';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "transparent"
  }
};

class TicketDrawer extends React.Component {
  state = {
    right: false,
    createdDate: Ticket._source.date_created,
    status: Ticket._source.status,
    problemAbstract: Ticket._source.problem_abstract
  };


  render() {
    const { classes } = this.props;
    return (
      <div>

        <Drawer anchor="left" open={this.props.carbonCopyOpened} onClose={() => this.props.onClose()}
                variant="persistent"
        >
          <div style={{padding: '15px 25px', width: '650px'}}>
              {this.props.ccopyTicket.ticket &&
              <Grid container>
                  <Grid item xs={12}>
                      <div style={{fontSize: 14, color: '#C6C6C6'}}>
                          Suggested Incident Ticket
                      </div>
                      <div style={{fontSize: 32}}>
                          INC{this.props.ccopyTicket.ticket.ticket_number}
                      </div>
                  </Grid>

                  <Grid container>
                      <FormField2 label="Problem Abstract" value={this.props.ccopyTicket.ticket.problem_abstract}
                                  copyField={() => this.props.copyField({
                                      key: "problem_abstract",
                                      value: this.props.ccopyTicket.ticket.problem_abstract
                                  })}/>
                      <FormField2 label="Application" value={this.props.ccopyTicket.ticket.Application}
                                  copyField={() => this.props.copyField({
                                      key: "Application",
                                      value: this.props.ccopyTicket.ticket.Application
                                  })}/>
                      <FormField2 label="Workfolder" value={this.props.ccopyTicket.ticket.workfolder}
                                  copyField={() => this.props.copyField({
                                      key: "workfolder",
                                      value: this.props.ccopyTicket.ticket.workfolder
                                  })}/>
                      <FormField2 label="State" value={this.props.ccopyTicket.ticket.status}
                                  copyField={() => this.props.copyField({
                                      key: "status",
                                      value: this.props.ccopyTicket.ticket.status
                                  })}/>

                      <FormField2 label="Date Created" value={this.props.ccopyTicket.ticket.date_created}
                                  copyField={() => this.props.copyField({
                                      key: "date_created",
                                      value: this.props.ccopyTicket.ticket.date_created
                                  })}/>
                      <FormField2 label="Problem Type" value={this.props.ccopyTicket.ticket.problem_type}
                                  copyField={() => this.props.copyField({
                                      key: "problem_type",
                                      value: this.props.ccopyTicket.ticket.problem_type
                                  })}/>
                      <FormField2 label="Owner" value={this.props.ccopyTicket.ticket.owner}
                                  copyField={() => this.props.copyField({
                                      key: "owner",
                                      value: this.props.ccopyTicket.ticket.owner
                                  })}/>
                      <FormField2 label="Queue" value={this.props.ccopyTicket.ticket.queue}
                                  copyField={() => this.props.copyField({
                                      key: "queue",
                                      value: this.props.ccopyTicket.ticket.queue
                                  })}/>
                      <FormField2 label="Product" value={this.props.ccopyTicket.ticket.product}
                                  copyField={() => this.props.copyField({
                                      key: "product",
                                      value: this.props.ccopyTicket.ticket.product
                                  })}/>
                  </Grid>


              </Grid>
              }
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TicketDrawer);