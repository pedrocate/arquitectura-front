import Todo from "./Todo";

export default interface TodoRepository {
  getAll(): Todo[];
  create(todo: Todo): void;
  update(todo: Todo): void;
}
