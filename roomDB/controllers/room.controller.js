const mongoose = require('mongoose');
 
const Room = mongoose.model('Room');
 
module.exports.createRoom = (req, res, next) => {
    var room = new Room();
    room.roomName = req.body.roomName;
    room.numberOfSeats = req.body.numberOfSeats;
    //console.log(message);
    for(var seatID=0;seatID<room.numberOfSeats;seatID++)
    {
        room.seatStatus[seatID] = 0;
    }
    room.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //error handling
        }
 
    });
}
module.exports.changeStatus = function (roomID,seatID,newStatus) {
    //let myRoom = await Room.findOne({roomID});
    //console.log(message);
   // myRoom.seatStatus[seatID] = newStatus;
   // myRoom.save();
}