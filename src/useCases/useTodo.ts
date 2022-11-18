import Todo from "@/models/Todo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";

export default () => {
  const todoRepository: TodoLocalStorageRepository =
    new TodoLocalStorageRepository();

  const addTodo = (description: string) => {
    const todo = new Todo(description);
    todoRepository.create(todo);

    return todo;
  };

  const doTodo = (todoToDo: Todo) => {
    if (!todoToDo.done) {
      todoToDo.do();
      todoRepository.update(todoToDo);
    }
  };

  return {
    addTodo,
    doTodo,
  };
};
