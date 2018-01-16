import React, { Component } from 'react';
import '../App.css';
import './Header.css'
import Auth0 from './Auth0'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        console.log(this.props.user)
        return (
            <header className="App-header gradient top-z">
                <section className="inner-header">
                    <div className="inner-header-right">
                        <span className="my-juke-joint">MY JUKE JOINT</span>
                    </div>
                    <div className="inner-header-left">{this.props.user ? this.props.user.name : ' '}</div>
                </section>
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);