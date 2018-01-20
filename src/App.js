import React, { Component } from 'react';
import routes from './routes';
import { connect } from "react-redux";
import './App.css';
import Slideshow from './Background-Slideshow';

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
        <Slideshow />
        {routes}
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
