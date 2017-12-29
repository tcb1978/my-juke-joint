require('dotenv').config();
const axios = require('axios');

let tracks = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { Id, AlbumId, Title, TrackLength, FileUrl } = req.body;
        tracks.push({ Id, AlbumId, Title, TrackLength, FileUrl });
        id++;
        res.status(200).send(Id, AlbumId, Title, TrackLength, FileUrl);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = tracks.findIndex(track => track.id == updateID);

        tracks[index] = {
            Id: tracks[index].Id,
            AlbumId: req.body.album.Id || album[index].AlbumId,
            Title: req.body.album.Title || album[index].Title,
            TrackLength: req.body.album.TrackLength || album[index].TrackLength,
            FileUrl: req.body.album.FileUrl || album[index].FileUrl
        };

        res.status(200).send(Id, AlbumId, Title, TrackLength, FileUrl);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        trackID = tracks.findIndex(track => track.id == deleteID);
        tracks.splice(trackID, 1);
        res.status(200).send(Id, AlbumId, Title, TrackLength, FileUrl);
    }
};