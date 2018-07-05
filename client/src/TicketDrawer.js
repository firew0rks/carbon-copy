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


  render() {
    const { classes } = this.props;
    return (
      <div>

        <Drawer anchor="right" open={this.props.ticketDrawerOpened} onClose={this.props.onClose()}>
          <div style={{padding: '15px 25px', width: '650px'}}>
            <Grid container>
              <Grid item xs={12}>
                <div style={{fontSize: 14, color: '#C6C6C6'} }>
                  Incident
                </div>
                <div style={{fontSize: 32}}>
                  INCXXXXXXX01
                </div>
              </Grid>

              <Grid container>
                <Grid item xs={4}>
                  <CardSuggestions/>
                </Grid>
                <Grid item xs={4}>
                  <CardSuggestions/>
                </Grid>
                <Grid item xs={4}>
                  <CardSuggestions/>
                </Grid>
              </Grid>


              <Grid container justify={'center'} style={{cursor: 'row-resize'}}>
              <KeyboardArrowUp style={{color: '#C6C6C6'}}/>
              </Grid>
              <Divider style={{width: '100%', marginBottom: '20px'}}/>

              <FormField label="Short Description" value="Hello World"/>
              <FormField label="Application" value="Hello World"/>
              <FormField label="Caller" value="Hello World"/>
              <FormField label="State" value="Hello World"/>
              <FormField label="Problem Abstract" value="Hello World"/>

              <Paper>
                <Tabs value={1} indicatorColor="primary" textColor="primary" centered >
                  <Tab label="Automation" />
                  <Tab label="Properties" />
                  <Tab label="Resolution" />
                  <Tab label="Activities" />
                </Tabs>
              </Paper>

              <FormField label="Short Description" value="Hello World"/>
              <FormField label="Application" value="Hello World"/>
              <FormField label="Caller" value="Hello World"/>
              <FormField label="State" value="Hello World"/>
              <FormField label="Problem Abstract" value="Hello World"/>

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