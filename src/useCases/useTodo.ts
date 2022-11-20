import Todo from "@/models/Todo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";
import ITodoRepository from "@/models/ITodoRepository";

export default (ITodoRepository: ITodoRepository) => {
  const repository: ITodoRepository = ITodoRepository;

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
