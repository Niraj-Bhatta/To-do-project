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

    module.exports = {homeController, addTodoFormController};