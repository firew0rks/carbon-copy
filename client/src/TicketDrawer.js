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
          <div style={{padding: '15px 25px'}}>
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
              <Divider style={{width: '100%'}}/>

              {/*<FormField label={"hello"}/>*/}
              {/*<FormField/>*/}
              {/*<FormField/>*/}
              {/*<FormField/>*/}
              {/*<MyFormControl label= "Short Description" field= {this.state.problemAbstract} handleChange= {this.handleChange}/>*/}


            </Grid>
          </div>

          {/*Romi's code*/}
          {/*<div*/}
            {/*tabIndex={0}*/}
            {/*role="button">*/}
            {/*<h1 style={{ fontSize: 20, fontStyle: 'bold', paddingLeft: 8 }}>*/}
              {/*{Ticket._source.ticket_number}*/}
            {/*</h1>*/}
            {/*<div style={{ padding: 10}}>*/}
              {/*<div>*/}
                {/*<MyFormControl label= "Short Description" field= {this.state.problemAbstract} handleChange= {this.handleChange}/>*/}
              {/*</div>*/}
              {/*<div style={{paddingTop: 10}}>*/}
                {/*<MyFormControl label= "Created Date" field= {this.state.createdDate} handleChange= {this.handleChange}/>*/}
              {/*</div>*/}
              {/*<div style={{paddingTop: 10}}>*/}
                {/*<MyFormControl label= "Status" field= {this.state.status} handleChange={this.handleChange}/>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}


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