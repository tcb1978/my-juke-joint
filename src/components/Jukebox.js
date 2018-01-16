import React from 'react';
import { connect } from 'react-redux'
import JukeBoxNav from './JukeBoxNav';
import './Jukebox.css';
import Header from './Header'
import Footer from './Footer'

function Jukebox(props) {
    return (
        <div className="controller jukebox-controller">
            <Header />
            <JukeBoxNav/>
            {props.children}
            <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Jukebox)
