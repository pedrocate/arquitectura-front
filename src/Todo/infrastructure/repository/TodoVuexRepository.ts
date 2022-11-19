import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
import store from "@/Todo/infrastructure/store/vuex";

export default class TodoVuexRepository implements TodoRepository {
  getAll(): Todo[] {
    return store.state.todos;
  }

  save(todos: Todo[]): void {
    store.commit("replaceTodos", todos);
  }

  create(todo: Todo): void {
    store.commit("addTodo", todo);
  }

  update(todo: Todo): void {
    store.commit("updateTodo", todo);
  }
}
