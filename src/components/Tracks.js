import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
import './Tracks.css'
import '../globalUtilities.css'


class Tracks extends Component {
    constructor() {
        super()
        this.state = {
            tracks : [],
            title : '',
            file_url : '',
            track_length : ''
        }
    }

    componentDidMount() {
        this.getTracks()
    }
    // ${ this.props.match.params.albums_id }
    getTracks() {
        axios.get(`/api/tracks`).then(response => {
            const tracks = response.data
            this.setState({
                tracks: tracks,
            })
        })
    }

    render() {
        return (
            <div className="tracks-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Tracks</h1>
                        <div className="track-display">
                            <div className="max-verticle-height">
                                {this.state.tracks.map((track, index) => {
                                    console.log(track, index);
                                    console.log(track, index);
                                    return <div key={index} className="tracks-view-container info-container inner-masthead-max border-radius">
                                        <div className="track-element track-title flex2 line-height">'{track.title}'</div>
                                        <div className="track-element track-artist flex1 line-height">{track.artist_name}</div>
                                        <div className="track-element track-release flex1 line-height">{track.release_year}</div>
                                        <img className="track-element album-art flex1 line-height" src={track.file_url} alt="album artwork"/>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tracks