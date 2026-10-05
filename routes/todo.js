const express =require("express");
const Todo =require("../models/Todo");
const router =express.Router();

const {homeController,addTodoFormController} = require("../controllers/todo");

router.get("/", homeController)


router.get("/add-todo",addTodoFormController)

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