
'use strict'; // so let will work
/* jshint esversion: 6 */
/* jshint node: true */

// DEPENDENCIES

const express = require('express');
const app = express();

// EXPRESS SETTINGS

app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT_NUM = 3000;
const SERVER_START_MSG = 'Serving Post Route Test on port ' + PORT_NUM;

// SERVER

app.listen(process.env.PORT || PORT_NUM, function () {
  console.log(SERVER_START_MSG);
});

// ROUTES

app.get("/", function(req, res) {
  res.send("Loaded Root Route!");
});
