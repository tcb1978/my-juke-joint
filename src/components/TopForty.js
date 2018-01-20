import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Header from './Header'
import Footer from './Footer'

class TopForty extends Component {
    constructor(params) {
        super()
        this.state = {
            albums: [],
            title: '',
            artist: '',
            release: '',
            artwork: '',
            id: '',
            tracks: [],
            jukeboxes: 0
        }
    }

    render(){
        return(
        <div className="controller top-forty-controller">
            <Header />
                <div className="controller nav-controller top-z padded mix-blend">
                    <h1>Top 40</h1>
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

export default connect(mapStateToProps)(TopForty)