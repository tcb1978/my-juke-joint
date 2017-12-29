require('dotenv').config();
const axios = require('axios');

let artists = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { artist } = req.body;
        albums.push({ id, artist });
        id++;
        res.status(200).send(artists);
    },

    read: (req, res) => {
        res.status(200).send(artists);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = artists.findIndex(artist => artist.id == updateID);

        artists[index] = {
            id: artists[index].id,
            artist: req.body.album || albums[index].artist
        };

        res.status(200).send(albums);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        artistID = artists.findIndex(artist => artist.id == deleteID);
        artists.splice(artist, 1);
        res.status(200).send(artists);
    }
};