//	DEPENDENCIES
require('dotenv').config(); 
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const album_controller = require(__dirname + '/album_controller.js');

//EXPRESS
const app = express();
app.use(bodyParser.json());
app.use(cors());



//ENDPOINTS
const albumsURL = "/api/albums";
app.post(albumsURL, album_controller.create);
app.get(albumsURL, album_controller.read);
app.put(`${albumsURL}/:id`, album_controller.update);
app.delete(`${albumsURL}/:id`, album_controller.delete);

const trackURL = "/api/albums/:album_id/tracks";
app.post(trackURL, album_controller.create);
app.get(trackURL, album_controller.read);
app.put(`${trackURL}/:id`, album_controller.update);
app.delete(`${trackURL}/:id`, album_controller.delete);


massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	}).catch((error) => console.error());

const db = app.get('db');


//START SERVER
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`));
