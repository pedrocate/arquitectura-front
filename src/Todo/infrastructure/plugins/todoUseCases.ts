import useTodo from "@/Todo/application/useTodo";
import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import ITodoRepository from "@/Todo/domain/ITodoRepository";

export default () => {
  const repository: ITodoRepository = new TodoLocalStorageRepository();
  return useTodo(repository);
};
