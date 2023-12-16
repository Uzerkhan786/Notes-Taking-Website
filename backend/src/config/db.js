const mongoose=require('mongoose');
const mongoDBconnection=async()=>{
     await mongoose.connect('mongodb://localhost:27017/NOTETAKING');
     console.log('Database connected');
}
module.exports=mongoDBconnection;