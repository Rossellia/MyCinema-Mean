const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const userProfile = mongoose.model('User');
//var { UserProfile } = require('../models/userProfile.model');

module.exports.printAll = (req, res) => {
    userProfile.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Movies :' + JSON.stringify(err, undefined, 2)); }
});
};

module.exports.getUser = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        userProfile.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving UserProfile :' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.addUser = (req, res) => {
    var usrProfile = new userProfile();
    usrProfile.username = req.body.username;
    usrProfile.profilePicture = req.body.profilePicture;
    usrProfile.firstName = req.body.firstName;
    usrProfile.lastName = req.body.lastName;
    usrProfile.email = req.body.email;
    usrProfile.phoneNumber = req.body.phoneNumber;
    usrProfile.birthday=  req.body.birthday;
    usrProfile.password= req.body.password;
    usrProfile.confirmPassword= req.body.confirmPassword;
    

    usrProfile.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in creating a user profile: ' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.updateUser = (req, res) => {
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

    userProfile.findByIdAndUpdate(req.params.id, { $set: usrProfile }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in UserProfile Update :' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports.deleteUser = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    userProfile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}