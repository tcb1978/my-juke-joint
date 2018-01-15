import React, { Component } from 'react';
import JukeBoxNav from './JukeBoxNav';
import BreadCrumb from './BreadCrumb';
import './Jukebox.css';
import routes from '../routes'
import Header from './Header'
import Footer from './Footer'

export default function Jukebox(props) {
    return (
        <div className="controller jukebox-controller">
            <Header />
            <BreadCrumb/>
            <JukeBoxNav/>
            <Footer />
            {props.children}
        </div>
    )
}
