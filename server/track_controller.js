require('dotenv').config();
const axios = require('axios');

let tracks = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { track } = req.body;
        tracks.push({ id, track });
        id++;
        res.status(200).send(tracks);
    },

    read: (req, res) => {
        res.status(200).send(tracks);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = tracks.findIndex(track => track.id == updateID);

        tracks[index] = {
            id: tracks[index].id,
            track: req.body.album.track || album[index].track,
        };

        res.status(200).send(tracks);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        trackID = tracks.findIndex(track => track.id == deleteID);
        tracks.splice(trackID, 1);
        res.status(200).send(tracks);
    }
};