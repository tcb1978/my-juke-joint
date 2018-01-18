import React, { Component } from 'react';
import axios from 'axios'
import './Albums.css'


class Albums extends Component {
    constructor(params) {
        super()
        this.state = {
            albums : [],
            title: '',
            artist: '',
            release: '',
            artwork: ''
        }
    }

    componentDidMount() {
        this.getAlbums()
    }

    getAlbums() {
        axios.get(`/api/albums`).then(response => {
            const albums = response.data
            this.setState({
                albums: albums,
            })
        })
    }

    render() {
        return (
            <div className="album-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Albums</h1>
                        {this.state.albums.map((album, index) => { 
                            return <div key={index} className="info-container inner-masthead-max border-radius">
                                <div className="album-element info-element album-title">'{album.title}'</div>
                                <div className="album-element info-element album-artist">{album.artist_name}</div>
                                <div className="album-element info-element album-release">{album.release_year}</div>
                                <img className="album-element info-element album-art" src={album.artwork_url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Albums
