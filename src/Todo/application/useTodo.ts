import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";

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
