const mongoose=require('mongoose');

const demoSchema=new mongoose.Schema({
    title:{
        type:String,
        enum:['PASSED','FAILED']
    },
    
    
})
const demo=mongoose.model('DEMO',demoSchema);
module.exports=demo;
