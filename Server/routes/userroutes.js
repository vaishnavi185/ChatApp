const express = require('express');
const router= express.Router();
const {logincontroller,registercontroller}=require("../Controller/usercontroller")

router.post('/login',logincontroller);
router.post('/register',registercontroller);


module.exports=router;