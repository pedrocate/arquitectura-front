import useTodo from "@/Todo/application/useTodo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import TodoVuexRepository from "../repository/TodoVuexRepository";

export default () => {
  const repository: ITodoRepository = new TodoVuexRepository();
  return useTodo(repository);
};
