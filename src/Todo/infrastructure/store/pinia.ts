import { defineStore } from "pinia";
import Todo from "@/Todo/domain/models/Todo";

export type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  replaceTodos: (todos: Todo[]) => void;
  updateTodo: (todoUpdated: Todo) => void;
};

type TodoState = {
  todos: Todo[];
};

export const useTodoStore = defineStore("todos", {
  state(): TodoState {
    return {
      todos: [],
    };
  },
  actions: {
    addTodo(todo: Todo): void {
      this.todos.push(todo);
    },
    replaceTodos(todos: Todo[]): void {
      this.todos = [...todos];
    },
    updateTodo(todoUpdated: Todo): void {
      const todosFiltered: Todo[] = this.todos.filter(
        (todo: Todo) => todo.description !== todoUpdated.description
      );
      todosFiltered.push(todoUpdated);
      this.todos = todosFiltered;
    },
  },
});
