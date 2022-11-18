import Todo from "@/Todo/domain/models/Todo";
import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import TodoRepository from "@/Todo/domain/models/TodoRepository";

export default (todoRepository: TodoRepository) => {
  const repository: TodoRepository = todoRepository;

  const addTodo = (description: string) => {
    const todo = new Todo(description);
    repository.create(todo);

    return todo;
  };

  const doTodo = (todoToDo: Todo) => {
    if (!todoToDo.done) {
      todoToDo.do();
      repository.update(todoToDo);
    }
  };

  return {
    addTodo,
    doTodo,
  };
};
