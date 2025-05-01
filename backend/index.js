import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import userRouter  from "./routes/registor.routes.js";
import cors from "cors";
const app=express();

dotenv.config({
    path:".env"
});
mongoose.connect(process.env.MONGODB_URI);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log("we connot connect the dataBase", err);
})
db.once("open", () => {
    console.log("Connected to MongoDB");
  });
const corsOptions={
    origin:process.env.CORS_ORIGIN,
    credentials:true
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.json({
        message:"Everything is ok",
        success:true
    })
})
app.use("/api/v1/user",userRouter);
app.listen(process.env.PORT,(err)=>{
    if(err)
        console.log(`sever not start some error occure ${err}`);
    else
        console.log(`server listen at port on ${process.env.PORT||8000}`);
    
});