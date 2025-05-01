const express = require('express');
const router = express.Router();
const protect = require('../middleware/Authmiddleware');

const { accesschat, fetchchat, fetchgroup, creategroup, exitgroup } = require("../Controller/chatcontroller"); // Fixed typo in fetchchat

router.route('/').post(protect, accesschat);
router.route('/fetchchat').post(protect, fetchchat); // Corrected fetchchat
router.route('/creategroup').post(protect, creategroup);
router.route('/fetchgroup').post(protect, fetchgroup);
router.route('/exitgroup').post(protect, exitgroup);

module.exports = router;
