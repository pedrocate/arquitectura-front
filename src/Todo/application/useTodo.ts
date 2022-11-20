import "reflect-metadata";
import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/types";
import { myContainer } from "@/inversify.config";
import ILogger from "@/Logger/domain/ILogger";

@injectable()
class TodoUseCases {
  private repository: ITodoRepository;
  private logger: ILogger;

  constructor(
    @inject(TYPES.ITodoRepository) ITodoRepository: ITodoRepository,
    @inject(TYPES.ILogger) logger: ILogger
  ) {
    this.repository = ITodoRepository;
    this.logger = logger;
  }

  public addTodo(description: string) {
    const todo = new Todo(description);
    this.repository.create(todo);

    this.logger.info(`Todo "${description}" added successfully`);

    return todo;
  }

  public doTodo(todoToDo: Todo) {
    if (!todoToDo.done) {
      todoToDo.do();
      this.repository.update(todoToDo);

      this.logger.info(`Todo "${todoToDo.description}" done successfully`);
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
