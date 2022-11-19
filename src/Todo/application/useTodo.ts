import "reflect-metadata";
import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/types";
import { myContainer } from "@/inversify.config";

@injectable()
class TodoUseCases {
  repository: TodoRepository;

  constructor(
    @inject(TYPES.TodoRepository) todoRepository: TodoRepository
  ) {
    this.repository = todoRepository;
  }

  public addTodo(description: string) {
    const todo = new Todo(description);
    this.repository.create(todo);

    return todo;
  }

  public doTodo(todoToDo: Todo) {
    if (!todoToDo.done) {
      todoToDo.do();
      this.repository.update(todoToDo);
    }
  }
}

export default () => {
  const useCases = myContainer.resolve(TodoUseCases);

  const addTodo = (description: string) => {
    return useCases.addTodo(description);
  };

  const doTodo = (todoToDo: Todo) => {
    useCases.doTodo(todoToDo);
  };

  return {
    addTodo,
    doTodo,
  };
};
