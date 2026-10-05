const Todo =require("../models/Todo");
const moment=require("moment");

const homeController = async (req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt : -1});

        res.locals.momentUse =moment;
        res.render("index",{title:"List to do",todos});

    }catch(error){
        res.status(500).json({message:error.message});

    }}

const addTodoFormController =(req,res,next)=>{
    try{
        res.render("newtodo",{title:"add to do"});

    }catch(error){
        res.status(500).json({message:error.message});
    }}


    const updateTodoFormController =(req,res,next)=>{
    try{
        res.render("update",{title:"Update to do"});

    }catch(error){
        res.status(500).json({message: error.message}) ;   }
}

const deleteTodoFormController = (req,res,next)=>{
    try{
        res.render("delete",{title:"update to-do"});

    }catch(error){
        res.status(500).json({message : error.message});
    }
}


const enhance =async (req,res,next)=>{
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
}
    module.exports = {homeController, addTodoFormController, updateTodoFormController,deleteTodoFormController, enhance};