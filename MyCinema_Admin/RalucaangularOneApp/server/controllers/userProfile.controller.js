const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const userProfile = mongoose.model('UserProfile');
//var { UserProfile } = require('../models/userProfile.model');

module.exports.printAll = (req, res) => {
    userProfile.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving UserProfiles: ' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.getUser = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        userProfile.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.addUser = (req, res, next) => {
    var usrProfile = new userProfile({
        username: req.body.username,
        profilePicture: req.body.profilePicture,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        birthday: req.body.birthday
    });

    usrProfile.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in creating a user profile: ' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.updateUser = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var usrProfile = {
        username: req.body.username,
        profilePicture: req.body.profilePicture,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        birthday: req.body.birthday
    };

    UserProfile.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in UserProfile Update :' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.deleteUser = (res, req, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    UserProfile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}