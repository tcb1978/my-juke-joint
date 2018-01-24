import React, { Component } from 'react';
import routes from './routes';
import { connect } from "react-redux";
import './App.css';
import Slideshow from './components/Background-Slideshow';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Slideshow />*/}
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
