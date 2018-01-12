import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { login } from '../ducks/reducer.js'
import { connect } from 'react-redux';
import '../App.css';
import './Home.css';
import PrimaryNavControl from './PrimaryNavControl';


class Home extends Component {
    constructor() {
        super();
        this.lock = null;
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
        console.log('this.lock', this.lock);
        this.lock.on('authenticated', authResult => {
            this.lock.getUserInfo(authResult.accessToken, (error, user) => {
                axios.post('/login', { userId: user.sub }).then(response => {
                    this.props.login(response.data.user);
                    this.props.history.push('/private');
                })
            })
        })
    }

    login() {
        this.lock.show();
    }

    render() {
        return (
            <div className="controller home-controller">
                <PrimaryNavControl />
                <div className="actions">
                    <button onClick={this.login} className="login-button">Log in</button>
                </div>
            </div>
        )
    }
}
export default Home