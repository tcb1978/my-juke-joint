import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
// import './Jukebox.css';

class Randomize extends Component {
    render() {
        return (
            <div className="controller randomize-controller">
                <div className="controller-box">
                    <BreadCrumb />
                    <h1 className="top-z">Randomize</h1>
                </div>
            </div>
        )
    }
}
export default Randomize