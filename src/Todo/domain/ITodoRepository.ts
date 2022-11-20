import Todo from "./Todo";

export default interface IITodoRepository {
  getAll(): Todo[];
  create(todo: Todo): void;
  update(todo: Todo): void;
}
