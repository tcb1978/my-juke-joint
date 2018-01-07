import React, { Component } from 'react';
import JukeBoxNav from './JukeBoxNav';
import BreadCrumb from './BreadCrumb';
import './Jukebox.css';
import routes from '../routes'

export default function Jukebox(props) {
    return (
        <div className="controller jukebox-controller">
            <BreadCrumb/>
            <JukeBoxNav/>
            {props.children}
        </div>
    )
}
