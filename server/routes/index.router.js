
const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlAdminMovie = require('../controllers/adminmovie.controller');
const ctrlUserProfile = require('../controllers/userProfile.controller');
const ctrlUser = require('../controllers/normaluser.controller');
const ctrlProgram = require('../controllers/program.controller');
const ctrlAdminRoom = require('../controllers/adminroom.controller');
//add room
router.post('/room/addroom', ctrlAdminRoom.addroom);
router.get('/room/getroom', ctrlAdminRoom.getroomlist);
router.delete('/room/:id',ctrlAdminRoom.deleteidroom);



router.post('/admin/registeradmin', ctrlAdmin.registeradmin);
router.post('/admin/authenticate', ctrlAdmin.authenticate);
router.get('/admin/mainadmin',jwtHelper.verifyJwtToken, ctrlAdmin.mainadmin);
router.post('/admin/loginadmin', ctrlAdmin.loginadmin);
router.post('/movie/addmovie', ctrlAdminMovie.addmovie);
router.get('/movie/getmovielist',ctrlAdminMovie.getmovielist);
router.get('/movie/countmovies',ctrlAdminMovie.countmovies);
router.get('/movie/:id',ctrlAdminMovie.getmovieid);
router.delete('/movie/:id',ctrlAdminMovie.deleteidmovie);
router.put('/movie/:id', ctrlAdminMovie.putidmovie);


router.get('/modifyuser/printall', ctrlUserProfile.printAll);
router.get('/modifyuser/:id', ctrlUserProfile.getUser);
router.post('/modifyuser', ctrlUserProfile.addUser);
router.put('/modifyuser/:id', ctrlUserProfile.updateUser);
router.delete('/modifyuser/:id', ctrlUserProfile.deleteUser);

router.post('/user/authenticateuser', ctrlUser.authenticateuser);
router.get('/user/main',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/user/registeruser', ctrlUser.registeruser);
//add program
router.post('/program/addprogram', ctrlProgram.addprogram);
router.get('/program/addprogram', ctrlProgram.getprogram);

router.get('/program/getprogram/:id', ctrlProgram.getprogramid);
//router.delete('/program/:id', ctrlProgram.deleteprogram);
router.put('/program/:id', ctrlProgram.putidprogram);
//router.get('/program/:movieName', ctrlProgram.view);
//program user
//router.get('/program/program', ctrlProgram.program);
//show program
//router.get('/program/showprogram', ctrlProgram.getprogram);
//router.delete('/program/addprogram/:id', ctrlProgram.deleteprogram);


module.exports = router;