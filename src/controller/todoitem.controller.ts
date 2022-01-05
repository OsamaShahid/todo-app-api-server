import { Request, Response, NextFunction } from 'express';
import { TodoItemManager } from '../manager/todoitem.manager';
import { consoleLogger } from '../helper';

export class TodoItemController {

  static async getTodoItems(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

        const todoItems = await TodoItemManager.getTodoItems();
        return res.send(JSON.stringify({ success: true, data: todoItems }))
      
    } catch (err) {

      consoleLogger.error('getTodoItems:: Failed to get todo items. error:: ', err);
      return res
        .status(400)
        .send(JSON.stringify({ success: false, message: 'Failed to fetch todo items', details: err }));
    }
  }

  static async addTodoItem(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

        const todoItem = await TodoItemManager.addTodoItem(req.body);
        return res.send(JSON.stringify({ success: true, data: todoItem }))
      
    } catch (err) {

      consoleLogger.error('addTodoItem:: Failed to add todo item:: ', req.body, ', error:: ', err);
      return res
        .status(400)
        .send(JSON.stringify({ success: false, message: 'Failed to add todo item', details: err }));
    }
  }

  static async updateTodoItem(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

        const todoItem = await TodoItemManager.updateTodoItem(req.body);
        return res.send(JSON.stringify({ success: true, data: todoItem }))
      
    } catch (err) {

      consoleLogger.error('updateTodoItem:: Failed to updata todo item:: ', req.body, ', error:: ', err);
      return res
        .status(400)
        .send(JSON.stringify({ success: false, message: 'Failed to update todo item', details: err }));
    }
  }

  static async deleteTodoItem(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      consoleLogger.info('deleteTodoItem:: Request to delete todo item:: ', req.params);
      await TodoItemManager.deleteTodoItem(Number(req.params.id));
      return res.send(JSON.stringify({ success: true, data: req.params }))
      
    } catch (err) {

      consoleLogger.error('deleteTodoItem:: Failed to delete todo item:: ', req.body, ', error:: ', err);
      return res
        .status(400)
        .send(JSON.stringify({ success: false, message: 'Failed to delete todo item', details: err }));
    }
  }

  static async deleteAllTodoItems(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      consoleLogger.info('deleteAllTodoItems:: Request to delete all todo items');
      await TodoItemManager.deleteAllTodoItem(req.body.ids);
      return res.send(JSON.stringify({ success: true, data: {} }))
      
    } catch (err) {

      consoleLogger.error('deleteAllTodoItems:: Failed to delete all todo items, error:: ', err);
      return res
        .status(400)
        .send(JSON.stringify({ success: false, message: 'Failed to delete all todo items', details: err }));
    }
  }
  
}
