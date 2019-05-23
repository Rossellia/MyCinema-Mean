
const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlAdminMovie = require('../controllers/adminmovie.controller');
const ctrlUserProfile = require('../controllers/userProfile.controller');
const ctrlUser = require('../controllers/normaluser.controller');
const ctrlProgram = require('../controllers/program.controller');


router.post('/registeradmin', ctrlAdmin.registeradmin);
router.post('/authenticate', ctrlAdmin.authenticate);
router.get('/mainadmin',jwtHelper.verifyJwtToken, ctrlAdmin.mainadmin);
router.post('/loginadmin', ctrlAdmin.loginadmin);
router.post('/addmovie', ctrlAdminMovie.addmovie);
router.get('/getmovielist',ctrlAdminMovie.getmovielist);
router.get('/countmovies',ctrlAdminMovie.countmovies);
router.get('/:id',ctrlAdminMovie.getmovieid);
router.delete('/:id',ctrlAdminMovie.deleteidmovie);
router.put('/:id', ctrlAdminMovie.putidmovie);


router.get('/modifyuser/printall', ctrlUserProfile.printAll);
router.get('/modifyuser/:id', ctrlUserProfile.getUser);
router.post('/modifyuser', ctrlUserProfile.addUser);
router.put('/modifyuser/:id', ctrlUserProfile.updateUser);
router.delete('/modifyuser/:id', ctrlUserProfile.deleteUser);

router.post('/authenticateuser', ctrlUser.authenticateuser);
router.get('/main',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/registeruser', ctrlUser.registeruser);
//add program
router.post('/addprogram', ctrlProgram.addprogram);
router.get('/addprogram', ctrlProgram.getprogram);
router.get('/:id', ctrlProgram.getprogramname);

router.get('/:id', ctrlProgram.getprogramid);
router.get('/:id', ctrlProgram.getprogramname);
router.delete('/:id', ctrlProgram.deleteprogram);
router.put('/:id', ctrlProgram.putidprogram);
//program user
//router.get('/program', ctrlProgram.program);
//show program
//router.get('/showprogram', ctrlProgram.getprogram);
//router.delete('/addprogram/:id', ctrlProgram.deleteprogram);



module.exports = router;