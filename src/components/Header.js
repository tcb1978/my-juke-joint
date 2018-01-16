import React, { Component} from 'react';
import '../App.css';
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        console.log(this.props.user)
        return (
            <header className="App-header gradient top-z">
                <section className="inner-header">
                    <div className="inner-header-right">
                        <Link to="/" className="my-juke-joint link">JUKE JOINT</Link>
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