export default class Todo {
  description: string;
  done: boolean;

  constructor(description: string, done: boolean) {
    this.description = description;
    this.done = done;
  }

  do(): void {
    this.done = true;
  }
}
