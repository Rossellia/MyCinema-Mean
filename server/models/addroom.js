const mongoose = require('mongoose');

var Room = mongoose.model('Room', {
    name: { type: String },
    seats: { type: Number }
});

module.exports = { Room };