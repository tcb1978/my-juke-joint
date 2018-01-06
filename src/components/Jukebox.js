import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JukeBoxNav from './JukeBoxNav';
import BreadCrumb from './BreadCrumb';
import './Jukebox.css';

class Jukebox extends Component {
    render() {
        return (
            <div className="controller jukebox-controller">
                <BreadCrumb/>
                <JukeBoxNav/>
            </div>
        )
    }
}
export default Jukebox