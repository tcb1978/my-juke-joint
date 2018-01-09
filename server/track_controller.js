require('dotenv').config();
const massive = require('massive')

module.exports = {
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
    /*
        dbInstance.query(
        SELECT * FROM tracks where albums_id = $1, [1]
        JOIN albums
        ON tracks.albums_id = albums.id
        ).then(tracks => {
            albums_id : req.params.albums_id
        });

        SELECT * FROM whatever_table_name_1
        JOIN whatever_table_name_2
        ON whatever_table_name_1.whatever_the_foreign_key_is = whatever_table_name_2.id

        dbInstance.query(
        SELECT * FROM tracks where albums_id = $1
        JOIN albums
        ON tracks.albums_id = albums.id,
        [req.params.albums_id]
        )
        .then(tracks => {
            albums_id: req.params.albums_id
        })
        .catch(err => {
            console.log(err)
            res.err(err)
        })
    */
    list: (req, res) => {
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