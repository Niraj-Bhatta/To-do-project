const express = require("express");
const path= require("path");
const bodyParser =require("body-parser");
const moment = require("moment");
const connectMongodb =require("./init/mongodb");
const todoSchema = require("./models/Todo");
const PORT =8000;

//init app
const app =express();

connectMongodb();


//view engine
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended : true}))


app.get("/",async (req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt : -1});

        res.locals.momentUse =moment;
        res.render("index",{title:"List to do",todos});

    }catch(error){
        res.status(500).json({message:error.message});

    }
})

app.get("/add-todo",(req,res,next)=>{
    try{
        res.render("newtodo",{title:"add to do"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.get("/update",(req,res,next)=>{
    try{
        res.render("update",{title:"Update to do"});

    }catch(error){
        res.status(500).json({message: error.message}) ;   }
})

app.get("/delete-todo",(req,res,next)=>{
    try{
        res.render("delete",{title:"update to-do"});

    }catch(error){
        res.status(500).json({message : error.message});
    }
})

app.post("/add-todo",async (req,res,next)=>{
try{
   const {title,desc} =req.body;
   if(!title){
   return res.status(400).json({message :"Title is required Field"})
   }

   const newTodo= new Todo({title,desc});
   await newTodo.save();

   res.redirect("/");

}catch(error){
    res.status(500).json({message: error.message})
}
})

//listen server

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`);
})