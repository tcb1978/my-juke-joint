require('dotenv').config();
const massive = require('massive')

let albums = []
let id = 0

module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const {
            title,
            artist_name,
            release_year,
            artwork_url
        } = req.body
        dbInstance.albums.insert({
            title: title,
            artist_name: artist_name,
            release_year: release_year,
            artwork_url: artwork_url
        }).then(created => {
            res.send(created)
        }).catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    list: (req, res) => {
        const dbInstance = req.app.get('db')
        const {
            title,
            artist_name,
            release_year,
            artwork_url
        } = req.body
        dbInstance.albums.find()            
            .then(found => {
                res.send(found)
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    },

    findOne: (req, res) => {
        const dbInstance = req.app.get('db')
        const {
            id
        } = req.body
        dbInstance.albums.findOne({
            id: req.params.id
        })
        .then(found => {
            res.send(found)
        })
        .catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db')
        if(req.params) {
            const { id } = req.params
        }
        const {
            id,
            title,
            artist_name,
            release_year,
            artwork_url,
            jukeboxes
        } = req.body
        // console.log(req.body)
        const newUpdate = {}

        if (title) {
            newUpdate.title = title
        }

        if (artist_name) {
            newUpdate.artist_name = artist_name
        }

        if (release_year) {
            newUpdate.release_year = release_year
        }

        if (artwork_url) {
            newUpdate.artwork_url = artwork_url
        }

        if (jukeboxes) {
            newUpdate.jukeboxes = jukeboxes
        }

        dbInstance.albums.update({
                id: req.params.id,
            }, newUpdate)
            .then(updated => {
                console.log(updated)
                res.send(updated)
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    },

    albumRating: (req, res) => {
        const dbInstance = req.app.get('db')
        if (req.params) {
            const { id } = req.params
        }
        const {jukeboxes} = req.body
        const newJukeRating = {}

        if (jukeboxes) {
            newJukeRating.jukeboxes = jukeboxes
        }

        dbInstance.albums.update({
            jukeboxes: req.params.jukeboxes,
        }, newJukeRating)
            .then(updated => {
                console.log(updated)
                res.send(updated)
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    },

    destroy: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.albums.destroy({
                id: req.params.id,
            })
            .then(deleted => {
                res.status(202).send('aldkjfa;sldkfjasd;lkfjasd;lkfjas;dlkfjasd;lkfj')
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    }
};