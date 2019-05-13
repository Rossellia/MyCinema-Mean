const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/registeradmin', ctrlAdmin.registeradmin);
router.post('/authenticate', ctrlAdmin.authenticate);
router.get('/mainadmin',jwtHelper.verifyJwtToken, ctrlAdmin.mainadmin);
router.post('/loginadmin', ctrlAdmin.loginadmin);

module.exports = router;

