import React from 'react'
import { Link } from 'react-router-dom'

export default function PrimaryNavControl(props) {
    return (
        <nav className="nav-controller top-z">
            <Link to={`/jukebox`} className="allow-flex-grow pill"><button className="btn btn-control btn-open-jukebox bttn-gradient bttn-primary">Jukebox</button></Link>
            <Link to={`/random`}  className="allow-flex-grow pill hidden"><button className="btn btn-control btn-randomize bttn-gradient bttn-primary">Random Play</button></Link>
            <Link to={`/add_album`} className="allow-flex-grow pill" ><button className="btn btn-control btn-top-forty bttn-gradient bttn-primary">Add Album</button></Link>
        </nav>
    )
}