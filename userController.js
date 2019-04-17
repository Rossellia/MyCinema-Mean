const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');
//=>localhost:3000/users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving users: ' + JSON.stringify(err, undefined, 2)); }

    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record is given with id : ${req.params.id}`);
    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving users: ' + JSON.stringify(err, undefined, 2)); }
    })
});

router.post('/', (req, res) => {
    var usr = new User({

        userName: req.body.userName,
        hashedPassword: req.body.hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email

    });

    usr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in save users: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => { // to be changed with patch -> TUTORIAL
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record is given with id : ${req.params.id}`);
    var usr = ({

        userName: req.body.userName,
        hashedPassword: req.body.hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email

    });

    User.findByIdAndUpdate(req.params.id, {$set: usr}, {new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in users update: ' + JSON.stringify(err, undefined, 2)); }

    });

})

//router.delete() if needed

module.exports = router;
