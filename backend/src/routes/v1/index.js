const {userController,todoController}=require('../../controllers/index');
const express=require('express');
const  router=express.Router();

//USER ROUTES
router.post('/createuser',userController.createUser);
router.post('/loginuser',userController.loginUser);
router.patch('/updateuser/:id',userController.updateUser);
router.delete('/deleteuser/:id',userController.deleteUser);
router.get('/getoneuser/:id',userController.getOneUser);
router.get('/getalluser',userController.getAllUser);
router.get('/gettask',todoController.getTaskOne)
//TO-DO ROUTES
router.post('/create',todoController.createTask);
router.patch('/update/:id',todoController.updateTask);
router.delete('/delete/:id',todoController.deleteTask);
router.get('/get/:id',todoController.getOneTask);
router.get('/getall',todoController.getAllTask);
router.get('/getuserTask/:id',todoController.getTaskUser);

module.exports=router
