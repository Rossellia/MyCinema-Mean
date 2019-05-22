const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const express = require('express');


const Program = mongoose.model('Program');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.addprogram = (req, res, next) => {
    var program = new Program();
    program.movieName = req.body.movieName;
    program.room = req.body.room;
    program.date = req.body.date;
    program.hour = req.body.hour;

    console.log("am intrat in addprogram");
    program.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Program Save :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.getprogram = (req, res) => {
    Program.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.getprogramid = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    Program.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
    });
}
module.exports.getprogramname = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.movieName}');

    Program.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc.movieName); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.deleteprogram = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    Program.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in movie Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.putidprogram = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    var program = {
        movieName: req.body.movieName,
        room: req.body.room,
        date: req.body.date,
        hour: req.body.hour,
    };

    Program.findByIdAndUpdate(req.params.id, { $set: program }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Program Update :' + JSON.stringify(err, undefined, 2)); }
    });
}