import React, { Component } from 'react';
import Header from'./Header'
import Footer from './Footer'

class Randomize extends Component {
    render() {
        return (
            <div className="controller randomize-controller">
                <Header />
                <div className="controller-box">
                    <div className="allow-flex-grow"><h1 className="top-z mix-blend">Random</h1></div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Randomize