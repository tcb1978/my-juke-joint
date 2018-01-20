import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import AccountInfo from './components/AccountInfo'
import Jukebox from './components/Jukebox'
import Randomize from './components/Randomize'
import Artist from './components/Artist'
import Albums from './components/Albums'
import Tracks from './components/Tracks'
import AddAlbum from './components/AddAlbum'

export default (
    <HashRouter>
        <Switch>
            <Route exact path="/(access_token.*)?" component={Home} />
            <Route path="/private" component={AccountInfo} />
            <Route path="/jukebox" render={() => (
                <Jukebox>
                    <Route path="/jukebox/albums" component={Albums} />
                    <Route path="/jukebox/artist" component={Artist} />
                    <Route path="/jukebox/tracks" component={Tracks} /> 
                </Jukebox>
            )} />
            <Route path="/random" component={Randomize} />
            <Route path="/add_album" component={AddAlbum} />
        </Switch>
    </HashRouter>
)

