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

class App extends Component {

    constructor(props) {
        // THIS IS A COMMENT
        super(props);
        this.state = {
        };
    }
    
    render() {
    return (
      <div className="App">
        <Myapps/>
        <MyTables Grid container justify="center" style={{height: '200px'}}/>
        <TicketDrawer/>
      </div>

    );
  }
}

export default App;
