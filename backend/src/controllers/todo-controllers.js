
const {todoModel,userModel}=require('../models/index');

 const createTask=async (req,res)=>{
    try {
        const task=await todoModel.create(req.body);
         
        res.status(200).json({
            data:task,
            message:'Successfully created the notes',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'Unable to create the notes',
            error:error
        })
    }
 }

 const getOneTask=async (req,res)=>{
    try {
        const user=await todoModel.findById(req.params.id);
        res.status(200).json({
            data:user,
            message:'Get Data successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })
    }
 }

 const updateTask=async (req,res)=>{
    try {
        const user=await todoModel.findByIdAndUpdate(req.params.id,req.body);
        
        res.status(200).json({
            data:user,
            message:'data get updated successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })
    }
 }
  
 const deleteTask=async (req,res)=>{
    try {
        const user=await todoModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            data:user,
            message:'data get deleted successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })
    }
 }

 const getAllTask=async (req,res)=>{
    try {
       
        const task=await todoModel.find(req.query);  
       console.log(task);
       
        res.status(200).json({
            data:task,
            message:'data get fetched successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })   
    }
 }

 const getTaskUser=async(req,res)=>{
    
    
    try {
        const task=await todoModel.find({
            user:req.params.id
        })
        res.status(200).json({
            data:task,
            message:'data get fetched successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })   
    }
 }

 const getTaskOne=async(req,res)=>{
    
    
    try {
        const task=await userModel.find({
            name:'saad'
        }).populate({path:'notes'});
        res.status(200).json({
            data:task,
            message:'data get fetched successfully',
            error:''
        })
    } catch (error) {
        res.status(400).json({
            data:' ',
            message:'cannot get data',
            error:error
        })   
    }
 }


module.exports={
    createTask,getOneTask,getAllTask,
    updateTask,deleteTask,getTaskUser,getTaskOne
}
