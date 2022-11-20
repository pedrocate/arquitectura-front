import Todo from '@/Todo/domain/Todo';
import { createStore } from 'vuex';

type TodoState = {
  todos: Todo[];
}

export default createStore({
  state(): TodoState {
    return {
      todos: [],
    };
  },
  mutations: {
    addTodo(state: TodoState, todo: Todo): void {
      state.todos.push(todo);
    },
    updateTodo(state: TodoState, todoUpdated: Todo): void {
      const todosFiltered: Todo[] = state.todos.filter((todo: Todo) => todo.description !== todoUpdated.description);
      todosFiltered.push(todoUpdated);
      state.todos = todosFiltered;
    }
  },
});
