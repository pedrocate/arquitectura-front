import useTodo from "@/useCases/useTodo";
import TodoLocalStorageRepository from "@/models/TodoLocalStorageRepository";
import TodoRepository from "@/models/TodoRepository";

const repository: TodoRepository = new TodoLocalStorageRepository();

export default () => useTodo(repository);
