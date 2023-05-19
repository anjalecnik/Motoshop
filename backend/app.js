var express = require('express');
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var izdelkiRouter = require('./routes/izdelki');
var akcijski_izdelkiRouter = require('./routes/akcijski_izdelki');
var sport_izdelkiRouter = require('./routes/sport_izdelki');
var shraniPodatkeKosariceRouter = require('./routes/shraniPodatkeKosarice');

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/izdelki', izdelkiRouter);
app.use('/akcijski_izdelki', akcijski_izdelkiRouter);
app.use('/sport_izdelki', sport_izdelkiRouter);
app.use('/shraniPodatkeKosarice', shraniPodatkeKosariceRouter);

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.listen(3000);

module.exports = app; 