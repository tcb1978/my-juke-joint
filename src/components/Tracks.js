import React, { Component } from 'react';
import '../App.css';

class Tracks extends Component {
    render() {
        return (
            <div className="tracks-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Tracks</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tracks