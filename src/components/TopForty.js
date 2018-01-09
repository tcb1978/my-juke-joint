import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
import '../App.css';
// import './Jukebox.css';

class TopForty extends Component {
    render(){
        return(
        <div className="top-forty-controller">
                <div className="controller-box">
                    <div><BreadCrumb /></div>
                    <div className="allow-flex-grow"><h1 className="top-z mix-blend">Top 40</h1></div>
                </div>
        </div>
        )
    }
}
export default TopForty