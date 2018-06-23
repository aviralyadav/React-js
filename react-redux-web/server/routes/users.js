var express = require('express');
var router = express.Router();
var validateInput = require('../validation/signup');
var bcrypt = require('bcrypt');
var User = require('../models/user');


router.post('/', (req, res) => {
    const { errors, isValid } = validateInput.index(req.body);
    var user = new User();
    if(isValid) {
        user.username = req.body.username;
        var password = bcrypt.hashSync(req.body.password, 10);
        user.email = req.body.email;
        user.timezone = req.body.timezone;
        user.password = password;
        //console.log(user);
        user.save(function(err, doc){
            res.json({success: true});
        })
    } else {
        res.json(errors);
    }
    //res.json(errors);
    //console.log(req.body);
});

module.exports = router;