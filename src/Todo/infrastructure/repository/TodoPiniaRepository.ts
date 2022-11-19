import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
import { TodoStore, useTodoStore } from "@/Todo/infrastructure/store/pinia";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export default class TodoPiniaRepository implements TodoRepository {
  store: TodoStore = useTodoStore();

  getAll(): Todo[] {
    return this.store.todos;
  }

  save(todos: Todo[]): void {
    this.store.replaceTodos(todos);
  }

  create(todo: Todo): void {
    this.store.addTodo(todo);
  }

  update(todo: Todo): void {
    this.store.updateTodo(todo);
  }
}
