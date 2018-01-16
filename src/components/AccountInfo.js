import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { login } from '../ducks/reducer.js'
import Header from './Header'
import Footer from './Footer'
import './AccountInfo.css'

class AccountInfo extends Component {
    componentDidMount() {
        axios.get('/user-data').then(response => {
            if (response.data.user) {
                this.props.login(response.data.user);
            }
        });
    }

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div className="controller account-info-controller">
                <Header />
                <div className="logged-in-as-container top-z gradient border-radius padded opacity">
                    <h1>Account Info</h1>
                    {user && <div className="acct-info logged-in-as">
                    <img src={user.pictureurl} alt="user" className="avatar" />
                    <div>You are logged in as:</div>
                    <div className="acct-info user-name">{user.name}</div>
                        <div className="acct-info ">{user.email}</div>
                        <Link to="/" className="login-button border-radius padded link">Juke Joint</Link>
                    </div>}
                    {!user && <Link to="/" className="login-button border-radius padded link add-line-height">Log in</Link>}
                </div>
                <Footer />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    login: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);