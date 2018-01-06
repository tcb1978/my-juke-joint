import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import ControllerBox from './NavControllerBox';


class Home extends Component {
    render() {
        return (
            <div className="controller home-controller">
                <ControllerBox />
            </div>
        )
    }
}
export default Home