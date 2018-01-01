require('dotenv').config();
const axios = require('axios');

let albums = [];
let id = 0;



module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { title, artist_name, release_year, artwork_url } = req.body;
        dbInstance.albums.insert({
            title: req.body.title,
            artist_name: req.body.artist_name,
            release_year: req.body.release_year,
            artwork_url: req.body.artwork_url
        }).then(created => {
            res.send(created)
        }).catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    list: (req, res) => {
        const dbInstance = req.app.get('db')
        const { title, artist_name, release_year, artwork_url } = req.body;
        dbInstance.albums.find()
        .then(found => {
            res.send(found)
        }).catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    findOne: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.body;
        dbInstance.albums.findOne({
            id: req.params.id
        }).then(found => {
            res.send(found)
        }).catch(err => {
            console.log(err)
            res.err(err)
        })
    },
    
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const { title, artist_name, release_year, artwork_url } = req.body;
        const newUpdate = {}

        if (req.body.title) {
            newUpdate.title = req.body.title
        }

        if (req.body.artist_name) {
            newUpdate.artist_name = req.body.artist_name
        }

        if (req.body.release_year) {
            newUpdate.release_year = req.body.release_year    
        }

        if (req.body.artwork_url) {
            newUpdate.artwork_url = req.body.artwork_url
        }

        dbInstance.albums.update({
            id: req.params.id,
        }, newUpdate)
        .then(updated => {
            res.send(updated)
        }).catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    destroy: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.body;
        dbInstance.albums.update({
            title: req.body.title,
            artist_name: req.body.artist_name,
            release_year: req.body.release_year,
            artwork_url: req.body.artwork_url
        }).then(deleted => {
            res.end()
        })
    }
};