require('dotenv').config();
const axios = require('axios');

let albums = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { Id, Title, ArtistName, ReleaseYear, ArtworkUrl } = req.body;
        albums.push({ Id, Title, ArtistName, ReleaseYear, ArtworkUrl });
        id++;
        res.status(200).send(albums);
    },

    list: (req, res) => {
        res.status(200).send(albums);
    },

    findOne: (req, res) => {
        const findID = req.params.id;
        albumID = albums.findIndex(album => album.id == findID);
        albums.push(albumID);
        res.status(200).send(albums);
    },

    destroy: (req, res) => {
        const deleteID = req.params.id;
        albumID = albums.findIndex(album => album.id == deleteID);
        albums.splice(albumID, 1);
        res.status(200).send(albums);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = albums.findIndex(album => album.id == updateID);

        albums[index] = {
            Id: albums[index].id,
            Title: req.body.album || albums[index].Title,
            ArtistName: req.body.album || albums[index].ArtistName,
            ReleaseYear: req.body.album || albums[index].ReleaseYear,
            ArtworkUrl: req.body.album || albums[index].ArtworkUrl
        };

        res.status(200).send(albums);
    }
};