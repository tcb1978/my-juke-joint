import React, { Component } from 'react';
import '../App.css';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <header className="App-header gradient top-z">
                <section className="inner-header">
                    <div className="inner-header-right">
                        <span className="my-juke-joint">MY JUKE JOINT</span>
                    </div>
                    <div className="inner-header-left"></div>
                </section>
            </header>
        )
    }
}

export default Header;