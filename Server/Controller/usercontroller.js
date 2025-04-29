const express=require('express');
const user = require('../model/Usermodel');
const expressAsynHandler = require('express-async-handler');

const logincontroller=()=>{
    res.send("login")
}
const registercontroller=expressAsynHandler(async (req,res)=>{
    //exceptional handling

    const  {name,email,passward}=req.body;
     if(!name || !email || !passward){
        res.status(400).json({message:"please fill all fields"})
     }

    const userexist= await user.findOne({email:email})
    if(userexist){
        res.status(400).json({message:"user already exist"});
    }
    const username = await user.findOne({ name: name });
    if(username){
        res.status(400).json({message:"username already exist"});
    }

    //create new user

    const newuser = await user.create({
        name,email,passward
    })

})


module.exports={logincontroller,registercontroller}