const express = require('express');
const router= express.Router();
const protect = require('../middleware/Authmiddleware')
const {logincontroller,registercontroller,fetchuser}=require("../Controller/usercontroller")

const protected = require("../middleware/Authmiddleware")

router.post('/login',logincontroller);
router.post('/register',registercontroller);
router.get('/fetchuser', protect, fetchuser);

module.exports=router;