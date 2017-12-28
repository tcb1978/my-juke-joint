import React, { Component } from 'react';
import axios from 'axios';
import routes from './routes';
import { connect } from "react-redux";

import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {

  constructor(){
    super()
    this.state ={
      
    }
    //bind
    // this.app = this.app.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/*router*/}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps)(App);
