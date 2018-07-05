import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Ticket from './Ticket.json';
import MyFormControl from './MyFormControl';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



class TicketDrawer extends React.Component {
  state = {
    right: false,
    createdDate: Ticket._source.date_created,
    status: Ticket._source.status,
    problemAbstract: Ticket._source.problem_abstract
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}
          style={{ left: '200px' }}>
          <div
            tabIndex={0}
            role="button">
            <h1 style={{ fontSize: 20, fontStyle: 'bold', paddingLeft: 8 }}>
              {Ticket._source.ticket_number}
            </h1>
            <div style={{ padding: 10, width: 500}}>
              <div>
                <MyFormControl label= "Short Description" field= {this.state.problemAbstract} handleChange= {this.handleChange}/>
              </div>
              <div style={{paddingTop: 10}}>
                <MyFormControl label= "Created Date" field= {this.state.createdDate} handleChange= {this.handleChange}/>
              </div>
              <div style={{paddingTop: 10}}>
                <MyFormControl label= "Status" field= {this.state.status} handleChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div style={{ left: '200px' }}>
            <Paper>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab label="Automation" />
                <Tab label="Properties" />
                <Tab label="Resolution" />
                <Tab label="Suggestion" />
                <Tab label="Activities" />
              </Tabs>
           </Paper>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default TicketDrawer;