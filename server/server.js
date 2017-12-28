//	DEPENDENCIES
require('dotenv').config(); 
const controller = require('./controller');

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')

//EXPRESS
const app = express();
app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS
// app.post('/api/city', controller.onCitySearch);


//ROUTES

massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	}).catch((error) => console.error());

const db = app.get('db');


//START SERVER
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`));
