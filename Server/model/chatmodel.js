const mongoose= require('mongoose');

const chatmodel = mongoose.Schema({
    ChatName :{type:String},
    isGroupChat:{type:Boolean},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ],
    latestmessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'msg'
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }


},{
    timeStamps:true
})

const chat =mongoose.model('chat',chatmodel);
module.exports=chat;
