const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');
const jwtHelper = require('../config/jwtHelper');
const userProfile = require('../controllers/userProfile.controller');

router.post('/registeradmin', ctrlAdmin.registeradmin);
router.post('/authenticate', ctrlAdmin.authenticate);
router.get('/mainadmin',jwtHelper.verifyJwtToken, ctrlAdmin.mainadmin);
router.post('/loginadmin', ctrlAdmin.loginadmin);

router.get('/modifyuser', userProfile.printAll);
router.get('/modifyuser/:id', userProfile.getUser);
router.post('/modifyuser', userProfile.addUser);
router.put('/modifyuser/:id', userProfile.updateUser);
router.delete('/modifyuser/:id', userProfile.deleteUser);

module.exports = router;

