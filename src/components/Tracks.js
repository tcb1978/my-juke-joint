import React, { Component } from 'react'
import '../App.css'
import './Tracks.css'
import '../Transmissions.mp3'


class Tracks extends Component {
    constructor() {
        super()
        this.state = {
            tracks : [],
            title : '',
            length : '',
            artist : '',
            release : '',
            artworkurl : ''
        }
    }
    render() {
        return (
            <div className="tracks-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Tracks</h1>
                        <div className="track-display">
                            {this.state.tracks.map((item, i) => {
                                return(
                                    <div i={i} item={item} className="padded">
                                        <div className="track-title player-element">Reign In Blood</div>
                                        <audio controls>
                                            <source src="/Users/mattheweldredge/Desktop/DevMountain/my-juke-joint/Transmissions.mp3" />
                                        </audio>
                                        <div className="track-artist player-element">Slayer</div>
                                        <div className="track-release player-element">1984</div>
                                        <img className="album-art player-element" src="https://images-na.ssl-images-amazon.com/images/I/6180E4ZWl2L.jpg" alt="Slayer" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tracks