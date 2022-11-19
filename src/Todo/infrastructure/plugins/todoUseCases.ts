import useTodo from "@/Todo/application/useTodo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
//import TodoVuexRepository from "../repository/TodoVuexRepository";
import TodoPiniaRepository from "../repository/TodoPiniaRepository";

export default () => {
  const repository: TodoRepository = new TodoPiniaRepository();
  return useTodo(repository);
};
