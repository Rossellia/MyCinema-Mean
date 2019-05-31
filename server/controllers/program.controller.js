const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const express = require('express');


const Program = mongoose.model('Program');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.addprogram = (req, res, next) => {
    var program = new Program();
    program.nr_tickets = 0;
    program.movieName = req.body.movieName;
    program.room = req.body.room;
    program.date = req.body.date;
    program.hour = req.body.hour;
    program.seats = new Array();
    for (var i = 0; i < 91; i++) program.seats[i] = 0;

    /*Program.find((err, docs) => {
       // if (!err) { res.send(docs); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
        //console.log(docs);
        if(!err){
            for(var i=0;i<docs.length;i++){
                if(docs[i].movieName==req.body.movieName)program.movieName=docs[i].id; break;
            }
        }
        else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
    });*/

    console.log("am intrat in addprogram");
    program.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Program Save :' + JSON.stringify(err, undefined, 2)); }
    });

}
var sort = { movieName: 1 };
module.exports.getprogram = (req, res) => {
        Program.find((err, docs) => {
            if (!err) { res.send(docs); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
        });
    }
    /*
    module.exports.getprogram = (req, res) => {
        Program.find((err, docs) => {
            if (!err) { res.send(docs.sort(movieName:1)); } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
        });
    }*/



module.exports.getprogramid = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    Program.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
            console.log(doc);
        } else { console.log('Error in Retriving Program :' + JSON.stringify(err, undefined, 2)); }
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
    console.log(req.body._id);
    //console.log(req.body.id);


    if (!ObjectId.isValid(req.body._id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    var program = {
        seats: req.body.seats,
        nr_tickets: req.body.nr_tickets,
        movieName: req.body.movieName,
        room: req.body.room,
        date: req.body.date,
        hour: req.body.hour,
    };

    Program.findByIdAndUpdate(req.body._id, { $set: program }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Program Update :' + JSON.stringify(err, undefined, 2)); }
    });
}