import React, { Component } from 'react';

// import './Jukebox.css';

class Artist extends Component {
    render() {
        return (
            <div className="artist-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Artist</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Artist
