import React, { Component } from 'react';
import './App.css';
import './font-awesome/css/font-awesome.css'

import FontAwesome from 'react-fontawesome';
import faStyles from './font-awesome/css/font-awesome.css';


class Facebook extends Component{
  render(){
    return (
      <FontAwesome
        className='fa fa-facebook'
        name='facebook'
        cssModule={faStyles}
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  }
};

export default Facebook;