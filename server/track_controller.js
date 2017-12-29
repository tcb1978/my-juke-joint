require('dotenv').config();
const axios = require('axios');

let tracks = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { id, albumId, title, length, fileURL } = req.body;
        tracks.push({ id, albumId, title, length, fileURL });
        id++;
        res.status(200).send(id, albumId, title, length, fileURL);
    },

    read: (req, res) => {
        res.status(200).send(id, albumId, title, length, fileURL);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = tracks.findIndex(track => track.id == updateID);

        tracks[index] = {
            id: tracks[index].id,
            albumId: req.body.album.track || album[index].albumId,
            title: req.body.album.title || album[index].title,
            length: req.body.album.length || album[index].length,
            fileURL: req.body.album.fileURL || album[index].fileURL,
            track: req.body.album.track || album[index].track,
        };

        res.status(200).send(tracks);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        trackID = tracks.findIndex(track => track.id == deleteID);
        tracks.splice(trackID, 1);
        res.status(200).send(id, albumId, title, length, fileURL);
    }
};