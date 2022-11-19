import useTodo from "@/Todo/application/useTodo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import TodoVuexRepository from "../repository/TodoVuexRepository";

const repository: TodoRepository = new TodoVuexRepository();

export default () => useTodo(repository);
