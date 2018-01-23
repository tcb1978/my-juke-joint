import React, { Component } from 'react'
import axios from 'axios'
import './Albums.css'
import '../globalUtilities.css'
import { Link } from 'react-router-dom'
require('dotenv').config() 


class Albums extends Component {
    constructor(params) {
        super()
        this.state = {
            albums : [],
            title: '',
            artist: '',
            release: '',
            artwork: '',
            id: '',
            tracks: [],
            jukeboxes: 0,
            searchTerm: ''
        }
        this.removeAlbum = this.removeAlbum.bind(this)
        this.getJukeJointRating = this.getJukeJointRating.bind(this)
    }

    componentDidMount() {
        this.getTracks()
        this.getAlbums()
    }

    getTracks() {
        axios.get(`/api/tracks`).then(response => {
            const tracks = response.data
            this.setState({
                tracks: tracks,
            })
        })
    }

    getAlbums() {
        axios.get(`/api/albums`).then(response => {
            const albums = response.data
            this.setState({
                albums: albums,
            })
        })
    }

    removeAlbum(val) {
        axios.delete(`/api/tracks/albums/${val}`).then(response => {
            axios.delete(`/api/albums/${val}`).then(response => {
                this.getAlbums()
            })
        })
    }

    getJukeJointRating(id, value) {
        axios.patch(`/api/albums/${id}`, { jukeboxes: value }).then(response => {
            this.setState({
                jukeboxes: value
            })
        }).then(response => {
            this.getAlbums()
        })
    }

    

    


    render() {
        const album = this.state.albums.map((album, index) => { 
            return (
                <div key={album.id} className=" album-view-info-cell info-container border-radius">
                    <div className="about-album">
                        <div className="album-element info-element album-title">'{album.title}'</div>
                        <div className="album-element info-element album-artist">{album.artist_name}</div>
                        <div className="album-element info-element album-release">{album.release_year}</div>
                        <div className="album_id hidden">{album.id}</div>
                    </div>
                    <div className="album-controls-box">
                        <img className="album-element info-element album-art" src={album.artwork_url} />
                        <button onClick={() => this.removeAlbum(album.id)} className="album-remove bttn-gradient bttn-primary">Remove</button>
                    </div>
                    <div className="about-album">
                        <div className="jukebox-rating-left">
                            <span>Juke Joint Rating </span>
                            <select onChange={ (e) => this.getJukeJointRating(album.id, e.target.value)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="jukebox-rating-right">{
                            this.state.jukeboxes !== album.jukeboxes ? album.jukeboxes : this.state.jukeboxes
                        }</div>
                    </div>
                    
                </div>
            )
        })
        return (
            <div className="album-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <div className="modal-top">
                            <h1 className="top-z jukebox-selected">Albums</h1>
                            <Link to={`/add_album`} >
                                <button className="btn btn-control btn-top-forty bttn-gradient bttn-primary">Add New Album</button>
                            </Link>
                        </div>
                        <div className="max-verticle-height horizontal-row">
                            {album}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Albums
