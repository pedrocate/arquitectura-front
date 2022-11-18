import useTodo from "@/Todo/application/useTodo";
import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
import TodoRepository from "@/Todo/domain/models/TodoRepository";

const repository: TodoRepository = new TodoLocalStorageRepository();

export default () => useTodo(repository);
