import Todo from "@/models/Todo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";
import TodoRepository from "@/models/TodoRepository";

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
