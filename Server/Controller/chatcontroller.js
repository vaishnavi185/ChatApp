const expressAsynHandler = require('express-async-handler');
const express = require('express');
const Chat = require("../model/chatmodel.js");

const User = require("../model/Usermodel.js");
const Message = require("../model/messagemodel.js");
const user = require('../model/Usermodel.js');


const accesschat =expressAsynHandler(async(req,res)=>{
    const {userID}=req.body;
    if(!userID){
        console.log("user not found");
        return res.status(400).send("user not found")
    }
    var isChat =await Chat.find({
        isGroup :false,
        $and:[
            {users:{$elemMatch:{$eq:req.users._id}}},
            {users:{$elemMatch:{$eq:userID}}}

        ]
    })
    .populate("users","-passward")
    .populate("latestMessage")

    isChat=await User.populate(isChat,{
        path :"latestMessage.sender",
        select :"name email"
    })

    if(isChat.length>0){
        res.send(isChat[0])
    }
    else{
        var chatData ={
            chatName:"sender",
            isGroup:false,
            users:[req.users._id,userID]
        }
        try {
            const createdchat = await Chat.create(chatData);
            const fullchat =await Chat.findOne({_id:createdchat._id}).populate("users", "-passward")
            res.status(200).send(createdchat);

        } catch (error) {
            console.error("Error creating chat:", error);
            res.status(500).send("Failed to create chat");
        }
    }
})
const fetchchat = expressAsynHandler(async (req, res) => {
    try {
        const chats = await Chat.find({ users: { $elemMatch: { $eq: req.users._id } } })
            .populate("users", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 });

        const results = await User.populate(chats, {
            path: "latestMessage.sender",
            select: "name email"
        });

        res.status(200).send(results);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

const fetchgroup =expressAsynHandler(async(req,res)=>{
    try{
        const allGroup = await Chat.where("isGroupChat").equals(true);
        res.status(200).send(allGroup);
    }catch(e){
        res.status(400).send(e.message)
    }
})
const creategroup =expressAsynHandler(async(req,res)=>{
    if(!req.body.users || !req.body.name){
       return res.status(400).send("please fill all data")
    }
    var users =JSON.parse(req.body.users)
    console.log("chatController/creatgroups:",req)
    users.push(req.user);
    try{
        const gruopchat =await Chat.create({
            chatName:req.body.name,
            users:users,
            isGroup:true,
            groupAdmin:req.user._id
        })
        const fullgroupChat=await Chat.findOne({id:gruopchat._id})
        .populate("users","-passward")
        .populate("groupAdmin","-passward")

        res.status(200).send(fullgroupChat);
    }catch(e){
        res.status(400).send(e.message)
    }

})
const exitgroup =expressAsynHandler(async(req,res)=>{
    const{chatID ,userID}=req.body;
    const removed = await Chat.findByIdAndUpdate(
        
    )
    .populate("users","-passward")
    .populate("groupAdmin","-passward")

    if(!removed){
        res.status(404).send("chat not found")
    }else{
        res.json(removed)
    }
})
const addgroup =expressAsynHandler(async(req,res)=>{
    const {chatID,userID}=req.body;
    const added =await Chat.findByIdAndUpdate(
        chatID,{
            $push:{users:userID}
        },
        {
            new:true
        }
    )
    .populate("users","-passward")
    .populate("groupAdmin","-passward");

    if(!added){
        res.status(404).send("chat not found")
    }
    else{
        res.json(added)
    }
})


module.exports = { accesschat, fetchchat, fetchgroup,creategroup,exitgroup};