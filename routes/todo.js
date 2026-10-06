const express =require("express");
const Todo =require("../models/Todo");
const router =express.Router();

const {homeController,addTodoFormController,updateTodoFormController,deleteTodoFormController,enhance,updateTodoController} = require("../controllers/todo");

router.get("/", homeController)


router.get("/add-todo",addTodoFormController)

router.get("/update",updateTodoFormController)

router.get("/delete-todo",deleteTodoFormController)

router.post("/add-todo",enhance)

router.post("/update-todo/:id",updateTodoController)


module.exports =router;