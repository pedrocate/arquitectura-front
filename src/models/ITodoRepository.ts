import Todo from "./Todo";

export default interface ITodoRepository {
  getAll(): Todo[];
  create(todo: Todo): void;
  update(todo: Todo): void;
}
