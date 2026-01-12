const mongoose = require('mongoose');
const express = require("express");

const URI = "mongodb+srv://NamasteNodeJs:TyC04SJFdhZfxH6Z@namastenodejs.exkc5xt.mongodb.net/";
const app = express();
const port = 8000;


const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("db connection success");
    }
    catch(err){
        console.log(err.message);
    }
}

app.get("/", (req, res)=>{
    res.send("hello");
});

app.listen(port, ()=>{
    connectDb();
    console.log(`server listen at port ${port}`);
});