import React, { Component } from 'react';
import './App.css';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <section className="inner-header">
                    <div className="inner-header-right"></div>
                    <div class="inner-header-left"></div>
                </section>
            </header>
        )
    }
}

export default Header;