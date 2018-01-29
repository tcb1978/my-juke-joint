import React, { Component} from 'react';
import '../App.css';
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../ducks/reducer'

class Header extends Component {
    render() {
        return (
            <header className="App-header gradient top-z">
                <section className="inner-header">
                    <div className="inner-header-right">
                        <Link to="/" className="my-juke-joint link">theJukeBoxy</Link>
                    </div>
                    <div className="inner-header-left">{this.props.user ? 
                        <div className="loginLogout">
                            <span onClick={this.props.logout}> Log Out </span>
                            <img src={this.props.user.pictureurl} className="header-avatar" alt="user avatar" />
                        </div> : ' '}
                    </div>
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

export default connect(mapStateToProps, {logout})(Header);