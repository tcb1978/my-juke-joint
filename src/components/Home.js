import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import PrimaryNavControl from './PrimaryNavControl';


class Home extends Component {
    render() {
        return (
            <div className="controller home-controller">
                <PrimaryNavControl />
            </div>
        )
    }
}
export default Home