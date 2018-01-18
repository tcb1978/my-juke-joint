require('dotenv').config();
const massive = require('massive')

module.exports = {
    destroyTracks: (req, res) => {
        const dbInstance = req.app.get('db')
        const {albums_id} = req.params;
        console.log(albums_id);
        dbInstance.tracks.destroy({
            albums_id: albums_id,
        })
            .then(created => {
                res.send('created')
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const {
            title,
            albums_id,
            track_length,
            file_url
        } = req.body;

        dbInstance.tracks.insert({
            title: title,
            albums_id: albums_id,
            track_length: track_length,
            file_url: file_url
        })
        .then(created => {
            res.send(created)
        })
        .catch(err => {
            console.log(err)
            res.err(err)
        })
    },
    
    list: (req, res) => {
        console.log(req.params.albums_id);
        const dbInstance = req.app.get('db')
        dbInstance.query(
            //JOIN
        `SELECT * FROM tracks
        JOIN albums
        ON tracks.albums_id = albums.id
         where albums_id = $1
        `,
            [req.params.albums_id]
        )
        .then(tracks => {
            console.log(tracks);
            res.send(tracks);
        })
        .catch(err => {
            console.log(err)
            res.err(err)
        })
    },

    listAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.query(
            //JOIN
            `SELECT tracks.title, albums.artist_name, albums.release_year, tracks.file_url FROM tracks
            JOIN albums
            ON tracks.albums_id = albums.id`
        )
            .then(tracks => {
                console.log(tracks);
                res.send(tracks);
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
        dbInstance.tracks.findOne({
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
        const updateID = req.params.id;
        const dbInstance = req.app.get('db')
        const {
            title,
            albums_id,
            track_length,
            file_url
        } = req.body;
        const newUpdate = {}

        if (title) {
            newUpdate.title = title
        }

        if (albums_id) {
            newUpdate.albums_id = albums_id
        }

        if (track_length) {
            newUpdate.track_length = track_length
        }

        if (file_url) {
            newUpdate.file_url = file_url
        }

        dbInstance.tracks.update({
                id: req.params.id,
            }, newUpdate)
            .then(updated => {
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
                res.status(202).end()
            })
            .catch(err => {
                console.log(err)
                res.err(err)
            })
    }
};