import React, { Component } from 'react';
import axios from 'axios'
import './Artist.css'
import '../globalUtilities.css'


class Artist extends Component {
    constructor(params) {
        super()
        this.state = {
            albums: [],
            artist: '',
        }
    }

    componentDidMount() {
        this.getArtists()
    }

    getArtists() {
        axios.get(`/api/albums`).then(response => {
            const albums = response.data
            console.log(albums);
            this.setState({
                albums: albums,
            })
        })
    }

    render() {
        return (
            <div className="artist-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Artist</h1>
                        <div className="max-verticle-height">
                            {this.state.albums.map((album, index) => {
                                return <div key={index} className="info-container inner-masthead-max border-radius">
                                    <div className="artist-element">
                                        <span className="my-juke-joint">{album.artist_name}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Artist
