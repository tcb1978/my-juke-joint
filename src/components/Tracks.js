import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
import './Tracks.css'
import '../globalUtilities.css'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    tracksHeading: {
        display: 'inline-block'
    }
})


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
            <div className="masthead gradient top-z opacity border-radius">
                <div className={css(styles.tracksHeading)}><h1 className="top-z jukebox-selected">Tracks</h1></div>
                <div className="max-verticle-height">
                    {this.state.tracks.map((track, index) => {
                        // console.log(track);
                        return <div key={index} className="tracks-view-container info-container inner-masthead-max border-radius">
                            <div className="track-element track-title flex1 line-height">'{track.title}'</div>
                            <div className="track-element track-artist flex1 line-height">{track.artist_name}</div>
                            <div className="track-element track-release flex1 line-height">{track.release_year}</div>
                            <img className="track-element album-art flex1 line-height" src={track.file_url} alt="album artwork"/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default Tracks