const mongoose=require('mongoose');
const usermodel =mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String,required:true,unique:true},
    passward:{type:String,required:true}
},{
    timeStamps:true
}
)

const user=mongoose.model('user',usermodel);
module.exports=user;