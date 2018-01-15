import React, { Component } from 'react'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'
import { login } from '../ducks/reducer.js'
import { connect } from 'react-redux'
import '../App.css'
import './Home.css'
import Header from './Header'
import PrimaryNavControl from './PrimaryNavControl'
import Footer from './Footer'
import Auth0 from './Auth0'

class Home extends Component {

    render() {
        return (
            <div className="controller home-controller gradient">
                <Header />
                {/*<PrimaryNavControl />*/}
                <Auth0 />
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = {
    login: login,
}

export default connect(null, mapDispatchToProps)(Home)