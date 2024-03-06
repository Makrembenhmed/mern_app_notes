import  Express  from "express";

import dotenv from "dotenv"

dotenv.config({
    path: "./Config/config.env",
})

const app = Express()

app.use(Express.json)
app.get("/",(req,res)=>{
    res.send("hello word")
})


app.listen(3000,()=>{   console.log("server run port 3000")})
