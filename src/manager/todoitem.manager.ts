
import { TodoItemHandler } from '../handler/todoitem.handler';
import { consoleLogger } from '../helper';

export class TodoItemManager {

    static async getTodoItems() {

        try {

            consoleLogger.info(`getTodoItems:: Request to get todo items`);
            const todoitems = await TodoItemHandler.getTodoItems();
            consoleLogger.success(`getTodoItems:: Successfully fetched todo items:: `, todoitems);
            return todoitems;
        
        } catch (err) {

            consoleLogger.error('getTodoList:: Failed to get todo items. error:: ', err);
            throw err;

        }
  }

    static async addTodoItem(data: any) {

        try {

            consoleLogger.info(`addTodoItem:: Request to add todo item:: `, data);
            const todoItem = await TodoItemHandler.addTodoItem(data);
            consoleLogger.success(`addTodoItems:: Successfully added todo item:: `, todoItem);
            return todoItem;
        
        } catch (err) {

            consoleLogger.error('addTodoItem:: Failed to add todo item:: ', data, ', error:: ', err);
            throw err;

        }
    }

    static async updateTodoItem(data: any) {

        try {
    
            consoleLogger.info(`updateTodoItem:: Request to update todo item:: `, data);
            const todoItem = await TodoItemHandler.updateTodoItem(data);
            consoleLogger.success(`updateTodoItem:: Successfully updated todo item:: `, todoItem);
            return todoItem;
        
        } catch (err) {
    
            consoleLogger.error('updateTodoItem:: Failed to update todo item:: ', data, ', error:: ', err);
            throw err;
    
        }
    }

    static async deleteTodoItem(id: number) {

        try {
    
            consoleLogger.info(`deleteTodoItem:: Request to delete todo item, id::  `, id);
            const result = await TodoItemHandler.deleteTodoItem(id);
            consoleLogger.success(`deleteTodoItem:: Successfully deleted todo item, id:: `, id, ', result:: ', result);
        
        } catch (err) {
    
            consoleLogger.error('deleteTodoItem:: Failed to delete todo item, id:: ', id, ', error:: ', err);
            throw err;
    
        }
    }

    static async deleteAllTodoItem(ids: number[]) {

        try {
    
            consoleLogger.info(`deleteAllTodoItem:: Request to delete all todo items`);
            const result = await TodoItemHandler.deleteAllTodoItems(ids);
            consoleLogger.success(`deleteAllTodoItem:: Successfully deleted all todo items, result:: `, result);
        
        } catch (err) {
    
            consoleLogger.error('deleteAllTodoItem:: Failed to delete all todo items, error:: ', err);
            throw err;
    
        }
    }

}
