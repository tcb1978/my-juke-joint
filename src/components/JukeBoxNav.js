import React from 'react';
import { Link } from 'react-router-dom';

export default function JukeBoxNav(props) {
    return (
        <nav className="nav-controller top-z">
            <Link to={`/jukebox/artist`} className="allow-flex-grow">
                <button className="btn btn-control btn-open-artist bttn-gradient bttn-primary">Artist</button>
            </Link>
            <Link to={`/jukebox/albums`} className="allow-flex-grow">
                <button className="btn btn-control btn-albums bttn-gradient bttn-primary">Albums</button>
            </Link>
            <Link to={`/jukebox/tracks`} className="allow-flex-grow">
                <button className="btn btn-control btn-top-tracks bttn-gradient bttn-primary">Tracks</button>
            </Link>
        </nav>
    )
}