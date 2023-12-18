const mongoose=require('mongoose');
const {MONGO_DB_URI}=require('./config-env')
// const mongoDBconnection=async()=>{
//      await mongoose.connect('mongodb://localhost:27017/NOTETAKING');
//      console.log('Database connected');
// }
// module.exports=mongoDBconnection;
const mongoDBconnection=async()=>{
     await mongoose.connect(MONGO_DB_URI,{
          useUnifiedTopology:true,
          useNewUrlParser:true
     });
     console.log('Database connected');
}
module.exports=mongoDBconnection;