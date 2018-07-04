import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Ticket from './Ticket.json';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MyFormControl from './MyFormControl';



class TempDrawer extends React.Component {
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
                <MyFormControl label= "Problem Abstract" field= {this.state.problemAbstract} handleChange= {this.handleChange}/>
              </div>
              <div style={{paddingTop: 10}}>
                <MyFormControl label= "Created Date" field= {this.state.createdDate} handleChange= {this.handleChange}/>
              </div>
              <div style={{paddingTop: 10}}>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="name-simple" style={{fontSize: 20}}><b>Status</b></InputLabel>
                  <Input id="name-simple" value={this.state.status} onChange={this.handleChange} />
                </FormControl>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default TempDrawer;