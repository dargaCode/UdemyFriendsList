
'use strict'; // so let will work
/* jshint esversion: 6 */
/* jshint node: true */

// DEPENDENCIES

const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

// SETTINGS

app.use(express.static('public'));
app.set('view engine', 'ejs');
ejs.delimiter = '?';
app.use(bodyParser.urlencoded({
  extended: true
}));

const PORT_NUM = 3000;
const SERVER_START_MSG = 'Serving Post Route Test on port ' + PORT_NUM;

// VARIABLES

let friends = [
  'Charlie',
  'Mac',
  'Frank',
  'Dee',
  'Dennis',
];

// SERVER

app.listen(process.env.PORT || PORT_NUM, function () {
  console.log(SERVER_START_MSG);
});

// ROUTES

app.post('/addfriend', function(req,res) {
  var newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/');
});

app.get('/', function(req, res) {
  res.render('friends', {
    friends: friends
  });
});
