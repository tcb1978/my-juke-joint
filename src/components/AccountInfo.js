import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { login } from '../ducks/reducer.js'
import Header from './Header'
import Footer from './Footer'
import './AccountInfo.css'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    noMargin: {
        margin : '0 0'
    },
    avatar : {
        borderRadius: '100%',
        width: '10em',
        margin: '0 0',
        '@media(max-width: 640px) and (max-height: 360px)': {
            display: 'none'
        }
    },
    acctInfo : {
        lineHeight: '3',
    },
    acctInfoLineItem: {
        lineHeight: '2'
    },
    displayNone : {
        '@media(min-width: 640px) and (min-height: 360px)': {
            display: 'none'
        }
    }
})

class AccountInfo extends Component {
    componentDidMount() {
        axios.get('/user-data').then(response => {
            if (response.data.user) {
                this.props.login(response.data.user)
            }
        })
    }

    render() {
        const { user } = this.props
        return (
            <div className="controller account-info-controller">
                
                <div className="logged-in-as-container top-z gradient border-radius padded opacity">
                    {user && <div className={css(styles.acctInfo)}>
                    <h1 className={css(styles.noMargin)}>Account Info</h1>
                    <img src={user.pictureurl} alt="user" className={css(styles.avatar)} />
                    <div className={css(styles.displayNone)}>You are logged in as:</div>
                    <div className={css(styles.acctInfoLineItem)}>{user.name}</div>
                    <div className={css(styles.acctInfoLineItem)}>{user.email}</div>
                        <Link to="/" className="login-button border-radius padded link">Juke Joint</Link>
                    </div>}
                    {!user && <div className="not-logged-in">
                        <Link to="/" className="login-button border-radius padded link add-line-height">Return to Login</Link>
                    </div>}
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

const mapDispatchToProps = {
    login: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)