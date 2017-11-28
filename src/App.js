import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";

let nextTodoId = 2;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
       
      ]
    };
  }

  deleteItem = key => {
    let newTodo = this.state.todos.filter(item => item.id !== key);
    console.log("item removed: ", key);
    this.setState({ todos: newTodo });
  };
  addItem = text => {
    if (text.trim() !== ""){
    let newList = [
      ...this.state.todos,
      { action: text, id: nextTodoId++, done: false }
    ];
    this.setState({ todos: newList });
  };
  };
  toggleDone = id => {
    let newTodo = this.state.todos.map(item => {
      if (item.id !== id) {
        return item;
      }
        return {
          ...item,
          done: !item.done
        };
      
    });
    this.setState({ todos: newTodo });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To do app!</h1>
        </header>
        <p className="App-intro">Let's get started!</p>
        <AddTodo addItem={this.addItem} />
        <TodoList todos={this.state.todos} deleteItem={this.deleteItem} toggleDone={this.toggleDone} />
      </div>
    );
  }
}

export default App;
