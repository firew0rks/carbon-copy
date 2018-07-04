import React, { Component } from 'react';
import './App.css';
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
           Nickname: "Eugenie",
           lastName: "Patel",
           MiddleName: "Zehui"

        };
    }

    render() {
    return (
      <div>
        <Myapps/>
        {/* <MyTables/> */}
        <MyTables Grid container justify="center" style={{height: '200px'}}/>


      </div> 
     
    );
  }
}

export default App;
