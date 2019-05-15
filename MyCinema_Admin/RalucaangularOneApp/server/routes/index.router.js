const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/user.controller');
const ctrlAdminMovie = require('../controllers/adminmovie.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/registeradmin', ctrlAdmin.registeradmin);
router.post('/authenticate', ctrlAdmin.authenticate);
router.get('/mainadmin',jwtHelper.verifyJwtToken, ctrlAdmin.mainadmin);
router.post('/loginadmin', ctrlAdmin.loginadmin);
router.post('/addmovie', ctrlAdminMovie.addmovie);
router.get('/getmovielist',ctrlAdminMovie.getmovielist);
router.get('/:id',ctrlAdminMovie.getmovieid);
router.delete('/:id',ctrlAdminMovie.deleteidmovie);
router.put('/:id', ctrlAdminMovie.putidmovie);



module.exports = router;

