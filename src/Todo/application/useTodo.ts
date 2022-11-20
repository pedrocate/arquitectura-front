import "reflect-metadata";
import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/types";
import { myContainer } from "@/inversify.config";

@injectable()
class TodoUseCases {
  private repository: ITodoRepository;

  constructor(
    @inject(TYPES.ITodoRepository) ITodoRepository: ITodoRepository
  ) {
    this.repository = ITodoRepository;
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
