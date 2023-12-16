
const {userModel}=require('../models/index');


 const createUser=async (req,res)=>{
    try {
        
        const existUser=await userModel.findOne({
            name:req.body.name
        })
        
        if(existUser){
            console.log('Already exist user with this name');
            throw error;
        }
        const t=await userModel.create(req.body);
        
        res.status(200).json({
            data:t,
            message:'User created successfully',
            error:'',
            success:true

        })
    } catch (error) {
        res.status(400).json({
            data:{},
            message:'Unable to create user,there is some problem',
            error:error,
            success:false
        })
    }
 }
 
const loginUser=async(req,res)=>{
    try {
         getUser=await userModel.findOne({
            name:req.body.name
        }).populate({path:'notes'})
        if(!getUser){
            console.log('There is no user  of this name');
            throw error
        }
    
        if(getUser.password!=req.body.password){
                  console.log('password does not match');
                  throw error
        }
    
        res.status(200).json({
            data:getUser,
            message:'Successsfully get username and password',
            success:true
            
        })
    } catch (error) {
        res.status(400).json({
            data:{},
            message:'incorrect username or password',
            err:error,
            success:false
        })
    }
    


}
 const getOneUser=async (req,res)=>{
    try {
        const user=await userModel.findById(req.params.id);
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

 const updateUser=async (req,res)=>{
    try {
        const user=await userModel.findByIdAndUpdate(req.params.id,req.body);
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
  
 const deleteUser=async (req,res)=>{
    try {
        const user=await userModel.findByIdAndDelete(req.params.id);
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

 const getAllUser=async (req,res)=>{
    try {
        const user=await userModel.find();
        res.status(200).json({
            data:user,
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
    createUser,getOneUser,getAllUser,
    deleteUser,updateUser,loginUser,
   
}


