import useTodo from "@/Todo/application/useTodo";
import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import TodoRepository from "@/Todo/domain/models/TodoRepository";

export default () => {
  const repository: TodoRepository = new TodoLocalStorageRepository();
  return useTodo(repository);
};
