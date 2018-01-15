import React, { Component } from 'react';
// import './Jukebox.css';

class Albums extends Component {
    render() {
        return (
            <div className="album-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Albums</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Albums
