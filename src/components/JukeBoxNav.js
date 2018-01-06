import React from 'react';
import { Link } from 'react-router-dom';

export default function JukeBoxNav(props) {
    return (
        <nav className="jukebox-nav-controller">
            <Link to={`/jukebox/artist`}><button className="btn btn-control btn-open-artist">Artist</button></Link>
            <Link to={`/jukebox/albums`}><button className="btn btn-control btn-albums">Albums</button></Link>
            <Link to={`/jukebox/tracks`}><button className="btn btn-control btn-top-tracks">Tracks</button></Link>
        </nav>
    )
}