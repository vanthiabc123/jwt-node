const User=require("../models/User");

const userController={
    //get all user
    getAllUsers:async(req,res)=>{
        try{
const user=await User.find();
res.status(200).json(user);
        }catch(err){
res.status(500).json(err);
        }
    },
//delete user
deleteUser:async(req,res)=>{
    try{
const user=await User.findByIdAndDelete(req.params.id);
res.status(200).json("delete thành công");
    }catch(err){
res.status(500).json(err);
    }
}
}
module.exports=userController;