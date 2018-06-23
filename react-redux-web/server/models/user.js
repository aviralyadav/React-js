var mongoose = require('mongoose');
var schema = mongoose.Schema();

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    timezone: String
});

module.exports = mongoose.model('user', userSchema);
