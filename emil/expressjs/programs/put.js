var express=require('express');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var multer=require('multer');
var upload=multer();
var app=express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(upload.array());

var movies=require('./movies2.js');
app.use('/movies',movies);

app.listen(4000);