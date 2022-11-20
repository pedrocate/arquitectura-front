import useTodo from "@/useCases/useTodo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";
import TodoRepository from "@/models/TodoRepository";

export default () => {
  const repository: TodoRepository = new TodoLocalStorageRepository();
  return useTodo(repository);
};
