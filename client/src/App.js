import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elasticHealth:null,
        };
    }
    componentDidMount() {
        fetch("http://localhost/api/v1")
            .then(res => res.json())
            .then(body => this.setState({
                elasticHealth:body
            }));
    }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit!!!! <code>src/App.js</code> and save to reload.
        </p>
          {this.state.elasticHealth
              ?
              <div>Elasticsearch Version: {this.state.elasticHealth.version.number}</div>
              :
              <div>No connection to elasticsearch :(</div>
          }
      </div>
    );
  }
}

export default App;
