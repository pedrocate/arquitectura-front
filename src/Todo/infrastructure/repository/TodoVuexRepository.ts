import Todo from "@/Todo/domain/models/Todo";
import TodoRepository from "@/Todo/domain/models/TodoRepository";
import store from "@/Todo/infrastructure/store/vuex";

export default class TodoVuexRepository implements TodoRepository {
  public getAll(): Todo[] {
    return store.state.todos;
  }

  public create(todo: Todo): void {
    store.commit("addTodo", todo);
  }

  public update(todo: Todo): void {
    store.commit("updateTodo", todo);
  }
}
