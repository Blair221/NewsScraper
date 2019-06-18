let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
let exphbs = require('express-handlebars');
let htmlRoute = require('./routes/htmlRoutes');

let db = require('./models');

let app = express();

let PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

mongoose.connect('mongodb://localhost:27017/NewsScraper', {useNewUrlParser: true});

app.use('/', htmlRoute);

app.listen(PORT, function(){
    console.log(`App is listening on ${PORT}!`);
})