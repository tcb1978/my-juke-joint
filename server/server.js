//	DEPENDENCIES
require('dotenv').config() 
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const album_controller = require(__dirname + '/album_controller.js')
const track_controller = require(__dirname + '/track_controller.js')

//EXPRESS
const app = express()

massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	}).catch((error) => console.error())

console.log(process.env.CONNECTION_STRING);
app.use(bodyParser.json())
app.use(cors())	

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
app.get(`/api/albums/:albums_id/tracks`, track_controller.list)
app.get(`/api/albums/:albums_id/tracks/:id`, track_controller.findOne)


//LOGIN
app.post('/login', (req, res) => {
	const { userId } = req.body;
	const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
	axios.get(auth0Url, {
		headers: {
			Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
		}
	}).then(response => {
		const userData = response.data;
		req.session.user = {
			name: userData.name,
			email: userData.email,
			auth0_id: userData.user_id,
			pictureUrl: userData.picture
		};
		res.json({ user: req.session.user });
		app.get('db').find_user(userData.user_id).then(users => {
			if (!users.length) {
				app.get('db').create_user([userData.user_id, userData.email, userData.picture, userData.name]).then(() => {

				}).catch(error => {
					console.log('error', error);
				});
			}
		})
	}).catch(error => {
		console.log('error', error);
		res.status(500).json({ message: 'Error!' });
	});
});

app.get('/user-data', (req, res) => {
	res.json({ user: req.session.user });
});

//START SERVER
const port = 3000
app.listen(port, () => console.log(`Rocking and Rolling on port ${port}`))
