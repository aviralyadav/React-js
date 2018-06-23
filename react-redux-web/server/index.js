var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var contact = require('./routes/contact');
var loginUser = require('./routes/login');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react');

var app = express();
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/login_user', loginUser);
app.use('/api/contact_form', contact);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Running on localhost: 8080'));