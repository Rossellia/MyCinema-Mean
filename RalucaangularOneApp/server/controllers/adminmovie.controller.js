const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const AdminMovie = mongoose.model('AdminMovie');
var ObjectId = require('mongoose').Types.ObjectId;



module.exports.addmovie= (req, res, next) => {
    var movie = new AdminMovie();
    movie.movieName=req.body.movieName;
    movie.movieDescription=req.body.movieDescription;
    movie.moviePrice=req.body.moviePrice;
    movie.movieImage=req.body.movieImage;
    movie.movieGenre=req.body.movieGenre;
    movie.movieDuration=req.body.movieDuration;
    
    movie.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Movie Save :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.getmovielist=(req,res) => {
    AdminMovie.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Movies :' + JSON.stringify(err, undefined, 2)); }
});
}
module.exports.countmovies=(req,res) => {
    AdminMovie.countDocuments((err, docs) => {
        if (!err) {return res.json(docs); }
        else { console.log('Error in Retriving Movies :' + JSON.stringify(err, undefined, 2)); }
});
}

module.exports.getmovieid=(req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    AdminMovie.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Movie :' + JSON.stringify(err, undefined, 2)); }
    });
}



module.exports.deleteidmovie=(req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

AdminMovie.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in movie Delete :' + JSON.stringify(err, undefined, 2)); }
});
}


module.exports.putidmovie=(req,res) => {
if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
       
        var movie = {
        movieName:req.body.movieName,
        movieDescription:req.body.movieDescription,
        moviePrice:req.body.moviePrice,
        movieImage:req.body.movieImage,
        movieGenre:req.body.movieGenre,
        movieDuration:req.body.movieDuration,
        };
         AdminMovie.findByIdAndUpdate(req.params.id, { $set: movie}, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Movie Update :' + JSON.stringify(err, undefined, 2)); }
    });
}
