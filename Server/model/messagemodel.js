const mongoose=require('mongoose');
messagemodel=mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    chat :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'chat'
        
    },




},
{
    timeStamps:true
})

const msg=mongoose.model('msg',messagemodelmodel);
module.exports=msg;