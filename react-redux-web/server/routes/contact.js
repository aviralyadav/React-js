var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');


router.post('/', (req, res) => {
   // const { errors, isValid } = validateInput.index(req.body);
    var contact = new Contact();
    // if(isValid) {
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.mobile = req.body.mobile;
        contact.message = req.body.message;
        //console.log(user);
        contact.save(function(err, doc){
            if(!err){
                res.json({success: true});
            }
        })
    //     })
    // } else {
    //     res.json(errors);
    // }
    //res.json(errors);
    //console.log(req.body);
});

module.exports = router;