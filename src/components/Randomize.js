import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
// import './Jukebox.css';

class Randomize extends Component {
    render() {
        return (
            <div className="controller randomize-controller">
                <div className="controller-box">
                    <BreadCrumb />
                    <div className="top-z mix-blend">Randomize</div>
                </div>
            </div>
        )
    }
}
export default Randomize