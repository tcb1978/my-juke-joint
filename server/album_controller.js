require('dotenv').config();
const axios = require('axios');

let albums = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { album } = req.body;
        albums.push({ id, album });
        id++;
        res.status(200).send(albums);
    },

    read: (req, res) => {
        res.status(200).send(albums);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = albums.findIndex(album => album.id == updateID);

        albums[index] = {
            id: albums[index].id,
            album: req.body.album || albums[index],
        };

        res.status(200).send(albums);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        albumID = albums.findIndex(album => album.id == deleteID);
        albums.splice(albumID, 1);
        res.status(200).send(albums);
    }
};