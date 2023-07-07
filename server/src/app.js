const express = require("express");
const app = express();
const AuthRoute=require("./routes/home");
const LoginRoute=require("./routes/login");
const RegisterRoute=require("./routes/reg")


app.use(express.json());
app.use("/",AuthRoute);
app.use("/home",LoginRoute)
app.use("/home",RegisterRoute)

// app.get("/",(req,res)=>{
//     res.send("ok");
// })

// app.post("/",(req,res)=>{
//    res.send(req.body);
//    console.log(req.body);
// })


app.listen(8001,()=> {
    console.log("server listening at 8001");
})