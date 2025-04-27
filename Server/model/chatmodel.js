const mongoose= require('mongoose');

const chatmodel = mongoose.Schema({
    ChatName :{type:String},
    isGroupChat:{type:Boolean},
    User:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ],
    lastmessage:{
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
