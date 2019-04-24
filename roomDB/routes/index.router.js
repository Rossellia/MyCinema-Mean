const express = require('express');
const router = express.Router();
 
const ctrlRoom = require('../controllers/room.controller');
 
router.post('/createRoom', ctrlRoom.createRoom);
 
module.exports = router;