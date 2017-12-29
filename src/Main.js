import React, { Component } from 'react';
import './App.css';
import './Main.css'

class Main extends Component {

    render() {
        return (
            <div className="main-wrapper">
                <div className="main-inner">
                    <div className="tab"><h3>something here</h3></div>
                    <input type="text" placeholder="search artist, album, track..." className="input-search"></input>
                    <button className="button-search">search</button>
                </div>
            </div>
        )
    }
}

export default Main;