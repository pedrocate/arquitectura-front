import { Container } from "inversify";
import { TYPES } from "./types";

import ITodoRepository from "@/Todo/domain/ITodoRepository";
//import TodoLocalStorageRepository from "@/Todo/infrastructure/repository/TodoLocalStorageRepository";
//import TodoVuexRepository from "@/Todo/infrastructure/repository/TodoVuexRepository";
import TodoPiniaRepository from "@/Todo/infrastructure/repository/TodoPiniaRepository";

import ILogger from "@/Logger/domain/ILogger";
import ConsoleLogger from "@/Logger/infrastructure/ConsoleLogger";
//import SentryLogger from "@/Logger/infrastructure/SentryLogger";

const myContainer = new Container();
myContainer.bind<ITodoRepository>(TYPES.ITodoRepository).to(TodoPiniaRepository);
myContainer.bind<ILogger>(TYPES.ILogger).to(ConsoleLogger);

export { myContainer };
