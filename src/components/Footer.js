import React, { Component } from 'react';
import '../App.css'
import './Footer.css'
import Facebook from './FontAwesomeFaceBook'
// import Twitter from './FontAwesomeTwitter'

class Footer extends Component {

    render() {
        return (
            <footer className="App-footer gradient top-z">
                <section className="inner-footer">
                    <div className="inner-footer-right"></div>
                    <div className="inner-footer-left">
                        <Facebook />
                        
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;