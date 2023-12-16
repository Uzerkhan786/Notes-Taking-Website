const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }, 
    notes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TODO'
    }]
})
const user=mongoose.model('User',userSchema);
module.exports=user;