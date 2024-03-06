import  Express  from "express";
import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config({
   path: "./Config/config.env",
})

const app = Express()

app.use(Express.json())

app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("hello word")
})


app.listen(8000,()=>{   console.log("server run port 3000")})
