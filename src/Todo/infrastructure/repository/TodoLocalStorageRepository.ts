import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";

export default class TodoLocalStorageRepository implements ITodoRepository {
  private localStorageKey: string = "todo";

  private save(todos: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  public getAll(): Todo[] {
    const item = localStorage.getItem(this.localStorageKey);

    if (!item) return [];
    return JSON.parse(item);
  }

  public create(todo: Todo): void {
    const todos: Todo[] = this.getAll();

    if (!todos) return;

    todos.push(todo);
    this.save(todos);
  }

  public update(todo: Todo): void {
    const todos = this.getAll();

    if (!todos) return;

    const todosFiltered = todos.filter(
      (todoItem: Todo) => todoItem.description !== todo.description
    );
    todosFiltered.push(todo);

    this.save(todosFiltered);
  }
}
