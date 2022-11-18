import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";

export default class TodoLocalStorageRepository implements TodoRepository {
  localStorageKey: string = "todo";

  getAll(): Todo[] {
    const item = localStorage.getItem(this.localStorageKey);

    if (!item) return [];
    return JSON.parse(item);
  }

  save(todos: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  create(todo: Todo): void {
    const todos: Todo[] = this.getAll();

    if (!todos) return;

    todos.push(todo);
    this.save(todos);
  }

  update(todo: Todo): void {
    const todos = this.getAll();

    if (!todos) return;

    const todosFiltered = todos.filter(
      (todoItem: any) => todoItem.description !== todo.description
    );
    todosFiltered.push(todo);

    this.save(todosFiltered);
  }
}
