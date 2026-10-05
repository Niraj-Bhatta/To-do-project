const express =require("express");
const Todo =require("../models/Todo");
const router =express.Router();

const {homeController,addTodoFormController,updateTodoFormController,deleteTodoFormController,enhance} = require("../controllers/todo");

router.get("/", homeController)


router.get("/add-todo",addTodoFormController)

router.get("/update",updateTodoFormController)

router.get("/delete-todo",deleteTodoFormController)

router.post("/add-todo",enhance)


module.exports =router;