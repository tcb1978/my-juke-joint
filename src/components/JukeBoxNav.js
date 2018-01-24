import React from 'react'
import { Link } from 'react-router-dom'
import  './button.css'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    allowFlexGrow: {
        flexGrow: '1'
    },
    pill: {
        margin: '1em 0'
    }
})

export default function JukeBoxNav(props) {
    return (
        <nav className="nav-controller top-z">
            <Link to={`/jukebox/artist`} className={css(styles.allowFlexGrow, styles.pill)}>
                <button className="btn btn-control btn-open-artist bttn-gradient bttn-primary">Artist</button>
            </Link>
            <Link to={`/jukebox/albums`} className={css(styles.allowFlexGrow, styles.pill)}>
                <button className="btn btn-control btn-albums bttn-gradient bttn-primary">Albums</button>
            </Link>
            <Link to={`/jukebox/tracks`} className={css(styles.allowFlexGrow, styles.pill)}>
                <button className="btn btn-control btn-top-tracks bttn-gradient bttn-primary">Tracks</button>
            </Link>
        </nav>
    )
}
