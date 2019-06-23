require('dotenv').config;
let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
let exphbs = require('express-handlebars');
let htmlRoute = require('./routes/htmlRoutes');

let db = require('./models');

let app = express();

let PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/NewsScraper'

mongoose.connect(MONGODB_URI);

app.use('/', htmlRoute);

app.listen(PORT, function(){
    console.log(`App is listening on ${PORT}!`);
})