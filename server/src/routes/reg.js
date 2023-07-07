const express=require("express");
const routeRegister=express.Router();

routeRegister.post("/register",(req,res)=>{
    res.send("THIS IS REG PAGE");
    console.log(req.body);
})

module.exports = routeRegister;