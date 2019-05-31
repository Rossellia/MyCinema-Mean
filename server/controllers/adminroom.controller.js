const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const AdminRoom = mongoose.model('AdminRoom');
var ObjectId = require('mongoose').Types.ObjectId;



module.exports.addroom= (req, res, next) => {console.log("sdg");
    var room = new AdminRoom();
    room.roomName = req.body.roomName;
    room.roomImage1 = req.body.roomImage1;
    room.roomImage2 = req.body.roomImage2;
    room.roomImage3 = req.body.roomImage3;
    room.roomImage4 = req.body.roomImage4;

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
                roomName:req.body.roomName,
                roomImage1:req.body.roomImage1,
                roomImage2:req.body.roomImage2,
                roomImage3:req.body.roomImage3,
                roomImage4:req.body.roomImage4
            };
             AdminRoom.findByIdAndUpdate(req.params.id, { $set: room}, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Room Update :' + JSON.stringify(err, undefined, 2)); }
        });
    }
