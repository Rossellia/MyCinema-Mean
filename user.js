const mongoose = require('mongoose');


var User = mongoose.model('User',{

    userName: { type :String},
    hashedPassword: { type :String},
    firstName: { type: String},
    lastName: { type :String},
    email: { type: String}
    
});

module.exports = { 
    User };