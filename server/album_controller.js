require('dotenv').config();

let albums = [];
let id = 0;

//dbInstance.albums.insert({ //stuff here }).then(created => {  //do whatever with the created thing }).catch(err => {  //handle error})


module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { Id, Title, ArtistName, ReleaseYear, ArtworkUrl } = req.body; 

        dbInstance.create_album([ Id, Title, ArtistName, ReleaseYear, ArtworkUrl ])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        
        // const { Id, Title, ArtistName, ReleaseYear, ArtworkUrl } = req.body;
        // albums.push({ Id, Title, ArtistName, ReleaseYear, ArtworkUrl });
        // id++;
        // res.status(200).send(albums);
    },

    list: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_albums()
            .then(products => res.status(200).send(albums))
            .catch(() => res.status(500).send());
        // res.status(200).send(albums);
    },

    findOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req
        dbInstance.read_album([params.id])
            .then(product => res.status(200).send(album))
            .catch(() => res.status(500).send());
        // const findID = req.params.id;
        // albumID = albums.findIndex(album => album.id == findID);
        // res.status(200).send(albums);
    },

    destroy: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_album()
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        // const deleteID = req.params.id;
        // albumID = albums.findIndex(album => album.id == deleteID);
        // albums.splice(albumID, 1);
        // res.status(202)
        // res.end()
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req
        dbInstance.update_album([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
        // const updateID = req.params.id;
        // let index = albums.findIndex(album => album.id == updateID);

        // albums[index] = {
        //     Id: albums[index].id,
        //     Title: req.body.album || albums[index].Title,
        //     ArtistName: req.body.album || albums[index].ArtistName,
        //     ReleaseYear: req.body.album || albums[index].ReleaseYear,
        //     ArtworkUrl: req.body.album || albums[index].ArtworkUrl
        // };

        // res.status(200).send(albums);
    }
};