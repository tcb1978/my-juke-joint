//	DEPENDENCIES
require('dotenv').config() 
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const album_controller = require(__dirname + '/album_controller.js')
const track_controller = require(__dirname + '/track_controller.js')
const axios = require('axios')

//EXPRESS
const app = express()

massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	}).catch((error) => console.error())


app.use(bodyParser.json())

//ENDPOINTS
const albumsURL = "/api/albums"
app.post(albumsURL, album_controller.create)
app.get(albumsURL, album_controller.list)
app.get(`${albumsURL}/:id`, album_controller.findOne)
app.delete(`${albumsURL}/:id`, album_controller.destroy)
app.put(`${albumsURL}/:id`, album_controller.update)

const trackURL = `/api/tracks`
app.post(trackURL, track_controller.create)
app.put(`${trackURL}/:id`, track_controller.update)
app.delete(`${trackURL}/:id`, track_controller.destroy)
app.delete(`/api/tracks/albums/:albums_id`, track_controller.destroyTracks)
app.get(`/api/tracks`, track_controller.listAll)
app.get(`/api/albums/:albums_id/tracks`, track_controller.list)
app.get(`/api/albums/:albums_id/tracks/:id`, track_controller.findOne)


//LOGIN
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
	expires: 2592000000
}));

app.post('/login', (req, res) => {
	const { userId } = req.body;
	const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
	axios.get(auth0Url, {
		headers: {
			Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
		}
	}).then(response => {
		const userData = response.data;
		app.get('db').find_user(userData.user_id).then(users => {
			if (!users.length) {
				app.get('db').create_user([userData.user_id, userData.email, userData.picture, userData.name])
				.then((user) => {
					req.session.user = user[0]
					res.json({ user: req.session.user });
				})
				.catch(error => {
					console.log('error', error);
				})
			}else {
				req.session.user = users[0]
				console.log(users[0]);
				res.json({ user: req.session.user });
			}
		})
	}).catch(error => {
		console.log('error', error);
		res.status(500).json({ message: 'Error!' });
	});
});

app.get('/user-data', (req, res) => {
	if (req.session.user) {
		res.json({ user: req.session.user });	
	}
});

//START SERVER
const port = 3005
app.listen(port, () => console.log(`Rocking and Rolling on port ${port}`))
