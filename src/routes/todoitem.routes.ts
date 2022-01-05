import express from 'express';
import { TodoItemController } from "../controller/todoitem.controller";

const todoItemRouter = express.Router({
    mergeParams: true
});

todoItemRouter.get('/todo-items', TodoItemController.getTodoItems); // get todo-items
todoItemRouter.post('/todo-item', TodoItemController.addTodoItem); // post todo-item
todoItemRouter.put('/todo-item', TodoItemController.updateTodoItem); // put todo-item
todoItemRouter.delete('/todo-item/:id', TodoItemController.deleteTodoItem); // delete todo-item
todoItemRouter.delete('/todo-items', TodoItemController.deleteAllTodoItems); // delete all todo-items

export {
    todoItemRouter
}
