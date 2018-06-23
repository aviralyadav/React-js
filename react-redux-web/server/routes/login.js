var express = require('express');
var router = express.Router();
var Users = require('../models/user');


router.post('/', (req, res) => {
   // const { errors, isValid } = validateInput.index(req.body);
    var user = new Users();
    // if(isValid) {
        user.username = req.body.username;
        user.password = req.body.password;
        
        console.log(user);
        user.findOne({username: user.username},function(err, doc){
            console.log(doc);
        })
        // user.save(function(err, doc){
        //     if(!err){
        //         res.json({success: true});
        //     }
        // })
    //     })
    // } else {
    //     res.json(errors);
    // }
    //res.json(errors);
    //console.log(req.body);
});

module.exports = router;