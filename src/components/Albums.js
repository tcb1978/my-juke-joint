import React, { Component } from 'react';
import axios from 'axios'
import './Albums.css'
import '../globalUtilities.css'


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
            jukeboxes: 0
        }
        this.removeAlbum = this.removeAlbum.bind(this)
        this.getJukeJointRating = this.getJukeJointRating.bind(this)
        // this.addToTopForty = this.addToTopForty.bind(this)
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
        })
    }


    render() {
        const album = this.state.albums.map((album, index) => { 
            return (
                <div key={album.id} className=" album-view-info-cell info-container border-radius">
                    <div className="album-element info-element album-title">'{album.title}'</div>
                    <div className="album-element info-element album-artist">{album.artist_name}</div>
                    <div className="album-element info-element album-release">{album.release_year}</div>
                    <div className="album_id ">{album.id}</div>
                    <div className="album-controls-box">
                        <form>
                            <input className="hidden" type="id" name="id" placeholder="id" value={album.id} />
                            <input className="hidden" type="title" name="title" placeholder="title" value={album.title} />
                            <input className="hidden" type="artist" name="artist" placeholder="artist" value={album.artist_name} />
                            <input className="hidden" type="year" name="year" placeholder="year" value={album.release_year} />
                        </form>
                        <i className="fa fa-plus-circle album-controls" aria-hidden="true" onClick={() => this.addToTopForty(album)} />
                        <img className="album-element info-element album-art" src={album.artwork_url} />
                        <i onClick={ () => this.removeAlbum(album.id) } className="fa fa-minus-circle album-controls" aria-hidden="true" />
                    </div>
                    <div className="jukebox-rating-container">
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
                            album.jukeboxes !== this.state.jukeboxes ? album.jukeboxes : this.state.jukeboxes
                        }</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="album-controller">
                <div className="controller-box">
                    <div className="masthead gradient top-z opacity border-radius">
                        <h1 className="top-z jukebox-selected">Albums</h1>
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
