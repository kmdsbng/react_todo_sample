import React, { Component } from 'react';
import './App.css';

class TodoComponent extends Component {
  doneTodo(e) {
    const id = this.props.id;
    this.props.app.deleteTodo(id);
  }

  render() {
    return (
      <div>
          <button onClick={this.doneTodo.bind(this)}>Done</button>
        {this.props.text}
      </div>
    );
  }
}

class TodosComponent extends Component {
  render() {
    console.log(this.props);
    const todoComponents = this.props.todos.map((text, index) => {
      return (
        <TodoComponent app={this.props.app} text={text} id={index} key={index} />
      );
    })

    return (
      <div>
        {todoComponents}
      </div>
    );
  }
}

class RootComponent extends Component {
  onChangeTodo(e) {
    console.log(e.target.value);
    this.props.app.setTodoStr(e.target.value);
  }

  addTodo(e) {
    this.props.app.addTodo();
  }

  render() {
    const props = {
      todos: this.props.app.todos,
      app: this.props.app
    }
    return (
      <div className="App">
        <div className="App-intro">
          <h2>Todo</h2>

          <input type="text" value={this.props.app.todoStr} onChange={this.onChangeTodo.bind(this)} />
          <button onClick={this.addTodo.bind(this)}>追加</button>
        </div>

        <TodosComponent {...props} />
      </div>
    );
  }
}

export default RootComponent;
