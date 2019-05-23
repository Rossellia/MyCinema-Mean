const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const AdminRoom = mongoose.model('AdminRoom');
var ObjectId = require('mongoose').Types.ObjectId;



module.exports.addroom= (req, res, next) => {
    var room = new AdminRoom();
    room.name = req.body.name;
    room.seats = req.body.seats;
    
    room.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Room Save :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.getroomlist=(req,res) => {
    AdminRoom.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Rooms :' + JSON.stringify(err, undefined, 2)); }
});
}


module.exports.getroomid=(req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    AdminRoom.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Room :' + JSON.stringify(err, undefined, 2)); }
    });
}



module.exports.deleteidroom=(req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

AdminRoom.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in room Delete :' + JSON.stringify(err, undefined, 2)); }
});
}



module.exports.putidroom=(req,res) => {
    if (!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id : ${req.params.id}');
           
            var room = {
                name:req.body.name,
                seats:req.body.seats,
            };
             AdminRoom.findByIdAndUpdate(req.params.id, { $set: room}, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Room Update :' + JSON.stringify(err, undefined, 2)); }
        });
    }
