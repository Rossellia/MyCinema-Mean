const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Room } = require('../models/addroom');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Room.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Rooms :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Room.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Room :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Room({
        name: req.body.name,
        seats: req.body.seats
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Room Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        seats: req.body.seats
    };
    Room.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Room Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
         return res.status(400).send(`No record with given id : ${req.params.id}`);

    Room.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Room Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;