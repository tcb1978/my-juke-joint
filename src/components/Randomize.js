import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
// import './Jukebox.css';

class Randomize extends Component {
    render() {
        return (
            <div className="controller randomize-controller">
                <div className="controller-box">
                    <div><BreadCrumb /></div>
                    <div className="allow-flex-grow"><h1 className="top-z mix-blend">Random</h1></div>
                </div>
            </div>
        )
    }
}
export default Randomize