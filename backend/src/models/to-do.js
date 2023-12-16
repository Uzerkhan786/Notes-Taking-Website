const mongoose=require('mongoose');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time
var change=today.getHours();
console.log(change);
if(change<=12){
     time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}
else{
    time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds();
}




var dateTime = date+' '+time;
 
const toDoSchema=new mongoose.Schema({
    title:{
        type:String
    },
    des:{
        type:String
    },
    date:{
        type:String,
        default:dateTime
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const toDo=mongoose.model('TODO',toDoSchema);
module.exports=toDo;
