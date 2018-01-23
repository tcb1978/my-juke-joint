import React, { Component } from 'react';
import '../App.css'
import './Footer.css'
import Facebook from './FontAwesomeFaceBook'//dont erase
// import Twitter from './FontAwesomeTwitter'

class Footer extends Component {

    render() {
        return (
            <footer className="App-footer gradient top-z">
                <section className="inner-footer">
                    <div className="audio-box"></div>
                </section>
            </footer>
        )
    }
}

export default Footer;