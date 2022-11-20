import { Container } from "inversify";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
//import TodoVuexRepository from "@/Todo/infrastructure/repository/TodoVuexRepository";
import TodoPiniaRepository from "@/Todo/infrastructure/repository/TodoPiniaRepository";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<ITodoRepository>(TYPES.ITodoRepository).to(TodoPiniaRepository);

export { myContainer };
