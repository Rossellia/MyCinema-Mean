const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({

    userName: { type :String},
    hashedPassword: { type :String},
    firstName: { type: String},
    lastName: { type :String},
    email: { type: String},
    salt : String
});

mongoose.model('User', userSchema);