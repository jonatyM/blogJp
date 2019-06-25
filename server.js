var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
//secret key (use any big text)
var secretKey = "MySuperSecretKey";
//Database in the cloud
var mongoose = require('mongoose');
mongoose.connect('mongodb://USER:PASSWOD@___URL___/blog', f\
unction (err) {
    if (err) { console.error("error! " + err) }
});
//bodyparser to read json post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Load mongodb model schema
var Post = require('./model/post');
var User = require('./model/user');