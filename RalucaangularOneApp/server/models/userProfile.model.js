const mongoose = require('mongoose');

var userProfileSchema = new mongoose.Schema( {
    username: { type: String },
    profilePicture: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    birthday: { type: String }
});

mongoose.model('UserProfile', userProfileSchema);

