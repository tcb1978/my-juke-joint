require('dotenv').config();
const axios = require('axios');

let tracks = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { Id, AlbumId, Title, TrackLength, FileUrl } = req.body;
        tracks.push({ Id, AlbumId, Title, TrackLength, FileUrl });
        id++;
        res.status(200).send({tracks});
    },
    
    update: (req, res) => {
        const updateID = req.params.id;
        let index = tracks.findIndex(track => track.id == updateID);
        tracks[index] = {
            Id: tracks.Id,
            AlbumId: tracks.AlbumId || tracks.AlbumId,
            Title: tracks.Title || tracks.Title,
            TrackLength: tracks.TrackLength || tracks.TrackLength,
            FileUrl: tracks.FileUrl || tracks.FileUrl
        };

        res.status(200).send({tracks});
    },

    destroy: (req, res) => {
        const deleteID = req.params.id
        trackID = tracks.findIndex(track => track.id == deleteID)
        tracks.splice(trackID, 1)
        res.status(202)
        res.end()
    }
};