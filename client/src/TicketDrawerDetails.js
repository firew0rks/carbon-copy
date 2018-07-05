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
    console.log(classes);
    console.log(classes.root);
    return (
      <div>

        <Drawer anchor="left" open={this.props.ticketDrawerOpened} onClose={this.props.onClose()}
                variant="persistent"
        >
          <div style={{padding: '15px 25px', width: '650px'}}>
            <Grid container>
              <Grid item xs={12}>
                <div style={{fontSize: 14, color: '#C6C6C6'} }>
                  Suggested Incident Ticket
                </div>
                <div style={{fontSize: 32}}>
                  INCXXXXXXX01
                </div>
              </Grid>

              <Grid container>
                <FormField2 label="Short Description" value="Hello World"/>
                <FormField2 label="Application" value="Hello World"/>
                <FormField2 label="Caller" value="Hello World"/>
                <FormField2 label="State" value="Hello World"/>
                <FormField2 label="Problem Abstract" value="Hello World"/>
              </Grid>

            </Grid>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TicketDrawer);