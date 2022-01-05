import { AnyAaaaRecord } from "dns";
import { TodoItem } from "../entity/TodoItem";

export class TodoItemHandler {

    static getTodoItems() {

        return TodoItem.find();

    }

    static addTodoItem(item: any) {

        const todoItem = new TodoItem();
        todoItem.id = item.id;
        todoItem.text = item.text;
        return todoItem.save()

    }

    static updateTodoItem(item: any) {

        return TodoItem.update(item.id, { text: item.text });

    }

    static deleteTodoItem(id: number) {

        return TodoItem.delete(id);

    }

    static deleteAllTodoItems(ids: number[]) {

        return TodoItem.delete(ids);

    }

}