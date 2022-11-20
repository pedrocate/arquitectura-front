import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
import { TodoStore, useTodoStore } from "@/Todo/infrastructure/store/pinia";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export default class TodoPiniaRepository implements ITodoRepository {
  private store: TodoStore = useTodoStore();

  public getAll(): Todo[] {
    return this.store.todos;
  }

  public create(todo: Todo): void {
    this.store.addTodo(todo);
  }

  public update(todo: Todo): void {
    this.store.updateTodo(todo);
  }
}
