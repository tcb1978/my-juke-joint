import React, { Component } from 'react'
import { login } from '../ducks/reducer.js'
import { connect } from 'react-redux'
import axios from 'axios'
import '../App.css'
import './Home.css'
import PrimaryNavControl from './PrimaryNavControl'
import Auth0 from './Auth0'

class Home extends Component {
    constructor(props) {
        super()
        this.state = ({
            user : null
        })
    }

    componentDidMount() {
        axios.get('/user-data').then(response => {
            this.props.login(response.data.user)
        })
    }

    render() {
        return (
            <div className="controller home-controller">
                {this.props.user ? <PrimaryNavControl /> : <Auth0 />}
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);