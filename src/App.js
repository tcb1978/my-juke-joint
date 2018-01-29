import React, { Component } from 'react';
import routes from './routes';
import { connect } from "react-redux";
import Header from './components/Header'
import './App.css';
import Slideshow from './components/Background-Slideshow';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <div className="wrapper-main">{routes}</div>
        <Footer />
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
