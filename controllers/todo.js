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


    const updateTodoFormController =async(req,res,next)=>{
    try{
        const {id} = req.query;
        const todo = await Todo.findById(id);
        res.render("update",{title:"Update to do",todo});

    }catch(error){
        res.status(500).json({message: error.message}) ;   }
}

const deleteTodoFormController = (req,res,next)=>{
    try{
        const {id} =req.query;
        res.render("delete",{title:"update to-do",id});

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
};

const updateTodoController = async (req,res,next) =>{
    try{
const {id} = req.params;
const {title,desc} =req.body;

const todo =await Todo.findById(id);
if(!todo){
    return res.status(404).json({message : "todo not found"})
}

todo.title =title;
todo.desc = desc;

await todo.save();

res.redirect("/");
    }catch(error){
res.status(500).json({message: error.message})
    }
}
    module.exports = {homeController, addTodoFormController, updateTodoFormController,deleteTodoFormController, enhance,updateTodoController};