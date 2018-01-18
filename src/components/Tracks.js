import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
import './Tracks.css'


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
                        <div className="info-container track-display inner-masthead-max">
                            {this.state.tracks.map((track, index) => {
                                console.log(track, index);
                                console.log(track, index);
                                return <div key={index} className="track-info-container inner-masthead-max border-radius">
                                    <div className="track-element track-title">'{track.title}'</div>
                                    <div className="track-element info-element track-artist">{track.artist_name}</div>
                                    <div className="track-element info-element track-release">{track.release_year}</div>
                                    <img className="track-element info-element track-art" src={track.file_url} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tracks