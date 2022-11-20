import Todo from "@/Todo/domain/Todo";
import ITodoRepository from "@/Todo/domain/ITodoRepository";
import store from "@/Todo/infrastructure/store/vuex";

export default class TodoVuexRepository implements ITodoRepository {
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
