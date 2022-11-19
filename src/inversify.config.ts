import { Container } from "inversify";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
//import TodoVuexRepository from "@/Todo/infrastructure/repository/TodoVuexRepository";
import TodoPiniaRepository from "@/Todo/infrastructure/repository/TodoPiniaRepository";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<TodoRepository>(TYPES.TodoRepository).to(TodoPiniaRepository);

export { myContainer };
