import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../App.css'
import './AddAlbum.css'
import Header from './Header'
import Footer from './Footer'


class AddAlbum extends Component {
    constructor(params) {
        super()
        this.state = {
            albums: [],
            titleValue: '',
            artistValue: '',
            releaseValue: '',
            artworkValue: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleReleaseChange = this.handleReleaseChange.bind(this)
        this.handleArtworkChange = this.handleArtworkChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(e) {
        console.log(e.target.value)
        this.setState({ titleValue: e.target.value})
    }

    handleArtistChange(e) {
        console.log(e.target.value)
        this.setState({ artistValue: e.target.value})
    }

    handleReleaseChange(e) {
        console.log(e.target.value)
        this.setState({ releaseValue: e.target.value})
    }

    handleArtworkChange (e) {
        console.log(e.target.value)
        this.setState({ artworkValue: e.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post(`/api/albums`, {
            title: this.state.titleValue,
            artist_name: this.state.artistValue,
            release_year: this.state.releaseValue,
            artwork_url: this.state.artworkValue
        }).then(
            this.setState({
                titleValue: '',
                artistValue: '',
                releaseValue: '',
                artworkValue: ''
            })
        )
    }

    render(){
        const title = this.state.titleValue
        const artist = this.state.artistValue
        const release = this.state.releaseValue
        const artwork = this.state.artworkValue
        return(
        <div className="controller top-forty-controller">
            <Header />
                <div className="controller nav-controller include-your-favorite-records top-z padded gradient border-radius opacity">
                    <h1>Include Your Favorite Records!</h1>
                    {/*<WikipediaViewer />*/}
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-element form-input">
                                <input className="form-input border-radius padded" type="text" name="title" placeholder="Title" value={title} onChange={this.handleTitleChange} />
                            </div>
                            <div className="form-element form-input">
                                <input className="form-input border-radius padded" type="artist" name="artist" placeholder="Artist" value={artist} onChange={this.handleArtistChange} />
                            </div>
                            <div className="form-element form-input">
                                <input className="form-input border-radius padded" type="release" name="release" placeholder="Release" value={release} onChange={this.handleReleaseChange} />
                            </div>
                            <div className="form-element form-input">
                                <input className="form-input border-radius padded" type="artwork" name="artwork" placeholder="Artwork (Any image url will do!)" value={artwork} onChange={this.handleArtworkChange} />
                            </div>
                            <div className="form-element form-album-display">
                                <div className="form-element album-element-display">
                                    {title}
                                </div>
                                <div className="form-element album-element-display">
                                    {artist}
                                </div>
                                <div className="form-element album-element-display">
                                    {release}
                                </div>
                                <div className="form-element album-element-display">
                                    {artwork}
                                </div>
                            </div>
                            <div className="form-element">
                                <input className="bttn-gradient bttn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddAlbum)