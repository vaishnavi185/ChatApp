const express=require('express');

const expressAsynHandler = require('express-async-handler');
const generateToken =require('../config/token.js');
const user = require('../model/Usermodel');

const logincontroller=expressAsynHandler(async(req,res)=>{

    const {name,passward}=req.body;
    const User = await user.findOne({ name})
    if( User && (await User.matchpassward(passward))){
        res.status(201).json({
            _id:User._id,
            name:User.name,
            email:User.email,
            isAdmin:User.isAdmin,
            token:generateToken(User._id)
        })

    }
    else{
        res.status(400).json({message:"invalid userr name or passward"})
    }
    
})
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

    if(newuser){
        res.status(201).json({
            _id:newuser._id,
            name:newuser.name,
            email:newuser.email,
            isAdmin:newuser.isAdmin,
            token:generateToken(newuser._id)
        })
    }
    else{
        res.status(400).json({message:"user not found"})
        
    }

})


module.exports={logincontroller,registercontroller}