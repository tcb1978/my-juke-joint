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
                    <div className="audio-box">
                        <audio controls="controls">
                            Your browser does not support the &lt;audio&gt; tag.
                        <source src="../m/example.mp3" />
                        </audio>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;