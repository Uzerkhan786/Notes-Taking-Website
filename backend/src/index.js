const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoDBconnection=require('./config/db')
const{PORT,MONGO_DB_URI}=require('./config/config-env')

const router=require('./routes/index')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const demo=require('./models/demo')
const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.json());



app.post('/',async(req,res)=>{
    const newuser=await demo.create(req.body)
   
   res.json({
    data:newuser
   })
})
app.use(cors());
app.use('/api',router);

app.listen(PORT,async(req,res)=>{
    await mongoDBconnection();
    console.log('Server is listening at '+PORT);
})



// app.get('/get',async(req,res)=>{
//     const user=await userModel.findOne({
//         name:'uzer'
//     }).populate({path:'todo'})
    
//     res.json({
//         data:user
//     })
// })

// app.post('/post',async(req,res)=>{
//     const d=await todoModel.create({
//         task:req.body.task,
//         user:req.body.user
//     });
//     console.log(d.user);
//     const a=await userModel.findOne({
//         _id:d.user
//     });
//     console.log(a);
//      a.todo.push(d);
//      a.save()
//     console.log(a);
//     res.json({
//        data:d
//     })
// })
