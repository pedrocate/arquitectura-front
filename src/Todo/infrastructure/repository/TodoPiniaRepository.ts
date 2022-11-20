import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
import { TodoStore, useTodoStore } from "@/Todo/infrastructure/store/pinia";

export default class TodoPiniaRepository implements TodoRepository {
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
