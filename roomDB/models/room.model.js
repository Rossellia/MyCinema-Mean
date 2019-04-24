const mongoose = require('mongoose');


var roomSchema = new mongoose.Schema({

    roomName: { type :String , required:true},
    numberOfSeats: { type :Number , required:true},
    seatStatus: { type : [Number] , required:true}
});


mongoose.model('Room', roomSchema);