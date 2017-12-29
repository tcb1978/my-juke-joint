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
app.get(albumsURL, album_controller.list);
app.get(`${albumsURL}/:id`, album_controller.findOne);
app.delete(`${albumsURL}/:id`, album_controller.destroy);
app.put(`${albumsURL}/:id`, album_controller.update);

const trackURL = "/api/tracks/:track_id/tracks";
app.post(trackURL, track_controller.create);
app.put(`${trackURL}/:id`, track_controller.update);
app.delete(`${trackURL}/:id`, track_controller.destroy);


massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	}).catch((error) => console.error());

const db = app.get('db');


//START SERVER
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`));
