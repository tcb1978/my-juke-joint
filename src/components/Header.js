import React, { Component} from 'react';
import '../App.css';
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="App-header gradient top-z">
                <section className="inner-header">
                    <div className="inner-header-right">
                        <Link to="/" className="my-juke-joint link">JUKE JOINT</Link>
                    </div>
                    <div className="inner-header-left">{this.props.user ? <img src={this.props.user.pictureurl} className="header-avatar"/> : ' '}</div>
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