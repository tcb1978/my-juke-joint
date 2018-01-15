import React, { Component } from 'react';
import routes from './routes';
import { connect } from "react-redux";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
        {/*<Header />*/}
        <Slideshow />
        {routes}
        {/*<Footer />*/}
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
