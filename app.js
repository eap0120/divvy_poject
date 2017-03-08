//server.js

//BASE setup

const express = require('express'); //call express
const logger = require('morgan');
const bodyParser = require('body-parser');
//var Station = require('/Applications/models/station');
var port = process.env.PORT || 8080;

//setup the express app
const app = express(); //define app using express 

//log requests to the console
app.use(logger('dev'));

//parse incoming requests data
app.use(bodyParser('json'));
app.use(bodyParser.urlencoded({extended: false}));


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
//database stuff
var mysql = require('mysql');
var connection = mysql.createConnection ({
  host  : 'localhost',
  user  : 'divvy_user',
  password  : 'ima_user',
  database  : 'divy'
});

connection.connect();

connection.query('Select count(*) from divy.divvy_trips as count', function (error, results, fields) {
    if (error) throw error;
    console.log('The count is:', results[0].count);
} );

//close the connection
connection.end();


//routes for our API
var router = express.Router();


//route test
router.get('/', function (req,res) {
    res.json({message: 'welcome to our API test.'});
});

//additional routes for later.

//register our routes

//routes will be prefixed with /divvy/API

app.use('/divvy/api', router);

//start the server

app.listen(port);
console.log('Server started on port ' + port);


