var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String
});

module.exports = mongoose.model('contact', contactSchema);