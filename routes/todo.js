const express =require("express");
const Todo =require("../models/Todo");
const router =express.Router()
const moment = require("moment")

router.get("/",async (req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt : -1});

        res.locals.momentUse =moment;
        res.render("index",{title:"List to do",todos});

    }catch(error){
        res.status(500).json({message:error.message});

    }
})

router.get("/add-todo",(req,res,next)=>{
    try{
        res.render("newtodo",{title:"add to do"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.get("/update",(req,res,next)=>{
    try{
        res.render("update",{title:"Update to do"});

    }catch(error){
        res.status(500).json({message: error.message}) ;   }
})

router.get("/delete-todo",(req,res,next)=>{
    try{
        res.render("delete",{title:"update to-do"});

    }catch(error){
        res.status(500).json({message : error.message});
    }
})

router.post("/add-todo",async (req,res,next)=>{
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


module.exports =router;