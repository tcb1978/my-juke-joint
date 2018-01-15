import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { login } from '../ducks/reducer.js'

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
        return (
            <div className="controller account-info-controller">
                <h1>AccountInfo</h1>
                {user && <div className="acct-info logged-in-as">You are logged in as:
                    <div className="acct-info user-name">{user.name}</div>
                    <div className="acct-info ">{user.email}</div>
                    <div className="acct-info ">{user.auth0_id}</div>
                    <img src={user.pictureUrl} alt="user" />
                </div>}
                {!user && <p>You must login! <Link to="/">Log in</Link></p>}
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