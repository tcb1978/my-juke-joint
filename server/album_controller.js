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
            // albums.push({ Id, Title, ArtistName, ReleaseYear, ArtworkUrl });
            // id++;
            // res.status(200).send({ albums });
    },

    list: (req, res) => {
        const dbInstance = req.app.get('db');  
            res.status(200).send({ albums });
    },

    findOne: (req, res) => {
        const findID = req.params.id;
        albumID = albums.findIndex(album => album.id == findID);
        res.status(200).send({ albums });
    },
    
    update: (req, res) => {
        const updateID = req.params.id;
        let index = albums.findIndex(album => album.id == updateID);
            albums[index] = {
                Id: req.body.album || albums.Id,
                Title: req.body.album || albums.Title,
                ArtistName: req.body.album || albums.ArtistName,
                ReleaseYear: req.body.album || albums.ReleaseYear,
                ArtworkUrl: req.body.album || albums.ArtworkUrl
            };

            res.status(200).send(albums);
    },

    destroy: (req, res) => {
        const deleteID = req.params.id;
        albumID = albums.findIndex(album => album.id == deleteID);
        albums.splice(albumID, 1);
        res.status(202)
        res.end()
    }
};