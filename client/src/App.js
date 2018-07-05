import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import TicketDrawer from './TicketDrawer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
    return (
      <div className="App">
        <h1 style= {{color: "#0EECE4"}}> WELCOME TO ATR </h1>
          <Nav/>
          <TicketDrawer/>
      </div>
    );
  }
}

export default App;
