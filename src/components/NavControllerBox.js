import React from 'react';
import { Link } from 'react-router-dom';

export default function ControllerBox(props) {
    return (
        <nav className="nav-controller">
            <Link to={`/jukebox`} ><button className="btn btn-control btn-open-jukebox">Jukebox</button></Link>
            <Link to={`/random`} ><button className="btn btn-control btn-randomize">Random Play</button></Link>
            <Link to={`/top_forty`} ><button className="btn btn-control btn-top-forty">Top Forty</button></Link>
        </nav>
    )
}