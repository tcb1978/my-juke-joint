import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
// import './Jukebox.css';

class TopForty extends Component {
    render(){
        return(
        <div className="controller top-forty-controller">
            <div className="controller-box">
                <BreadCrumb />
                <div className="top-z mix-blend">TopForty</div>
            </div>
        </div>
        )
    }
}
export default TopForty