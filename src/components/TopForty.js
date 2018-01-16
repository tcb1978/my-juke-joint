import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Header from './Header'
import Footer from './Footer'

class TopForty extends Component {
    render(){
        return(
        <div className="controller top-forty-controller">
            <Header />
            <div className="controller-box">
                <div className="allow-flex-grow"><h1 className="top-z mix-blend">Top 40</h1></div>
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