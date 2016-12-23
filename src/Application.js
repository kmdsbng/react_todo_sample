class Application {
  constructor(render) {
    this.render = render;
    this.todoStr = '';
    this.todos = ['todo1', 'todo2', '3', '4', '5' ];
  }

  setTodoStr(str) {
    this.todoStr = str;
    this.notifyUpdate();
  }

  addTodo() {
    this.todos.push(this.todoStr);
    this.todoStr = '';
    this.notifyUpdate();
  }

  notifyUpdate() {
    this.render();
  }

  deleteTodo(index) {
    const newTodos = this.todos.slice(0, index).concat(this.todos.slice(index + 1, this.todos.size));
    this.todos = newTodos;
    this.notifyUpdate();
  }
}

export default Application;
