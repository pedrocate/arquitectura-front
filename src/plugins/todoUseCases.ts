import useTodo from "@/useCases/useTodo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";
import ITodoRepository from "@/models/ITodoRepository";

export default () => {
  const repository: ITodoRepository = new TodoLocalStorageRepository();
  return useTodo(repository);
};
