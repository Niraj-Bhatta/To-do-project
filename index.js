const express = require("express");
const mongoose = require("mongoose");
const path= require("path");
const PORT =8000;

//init app
const app =express();
const connectionUrl = "mongodb://localhost:27017/todoDb";

mongoose.connect(connectionUrl)
.then(()=>console.log("Database connected successfully"))
.catch((error)=>console.log(error.message));


//view engine
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));



app.get("/",(req,res,next)=>{
    try{
        res.render("index");

    }catch(error){
        res.status(500).json({message:error.message});

    }
})

app.get("/add-todo",(req,res,next)=>{
    try{
        res.render("newtodo");

    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.get("/update",(req,res,next)=>{
    try{
        res.render("update");

    }catch(error){
        res.status(500).json({message: error.message}) ;   }
})

app.get("/delete-todo",(req,res,next)=>{
    try{
        res.render("delete");

    }catch(error){
        res.status(500).json({message : error.message});
    }
})

//listen server

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`);
})