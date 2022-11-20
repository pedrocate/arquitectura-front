export default class Todo {
  public description: string;
  public done: boolean;

  constructor(description: string, done: boolean = false) {
    this.description = description;
    this.done = done;
  }

  public do(): void {
    this.done = true;
  }
}
