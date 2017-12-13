import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";
import Filter from "./components/Filter.js"

let nextTodoId = 2;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [

      ],
      filter: "all"
    }
  }

  getFiltered = (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
        break;
      case "completed":
        return todos.filter(e => {
          return e.check === true
        });
        break;
      case "active":
        return todos.filter(e => {
          return e.check === false
        });
    }
  }


  deleteItem = key => {
    let newTodo = this.state.todos.filter(item => item.id !== key);
    console.log("item removed: ", key);
    this.setState({ todos: newTodo });
  }

  addItem = text => {
    if (text.trim() !== "") {
      let newList = [
        ...this.state.todos,
        { action: text, id: nextTodoId++, check: false}
      ];
      this.setState({ todos: newList });
    }
  }

  toggleCheck = id => {
    let newTodo = this.state.todos.map(item => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        check: !item.check
      }

    });
    this.setState({ todos: newTodo });
  }

  checkAll = () => {
    let allChecked = true;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].check === false) {
        allChecked = false;
        break;
      }
    }

    if (allChecked === false) {
      let newTodo = this.state.todos.map(item => {
        return {
          ...item,
          check: true
        };
      });
      this.setState({ todos: newTodo });
    }
    else {
      let newTodo = this.state.todos.map(item => {
        return {
          ...item,
          check: false
        }
      });
      this.setState({ todos: newTodo });
    }
  }

  toggleFilter = state => {
    this.setState({ filter: state });
  }

  deleteAll = () => {
    let newTodos = this.state.todos.filter(e => e.check === false)
    this.setState({ todos: newTodos });
  }

  allCheck = () => {
    let allChecked = true;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].check === false) {
        allChecked = false;
        break;
      }
    }
    console.log(allChecked);
    return allChecked;
  }
  

  render() {
    const filtered = this.getFiltered(this.state.todos, this.state.filter);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Things to do:</h1>
        </header>
        <div className="appContent">
        <AddTodo addItem={this.addItem} checkAll={this.checkAll} allCheck={this.allCheck} />
        <TodoList todos={filtered} deleteItem={this.deleteItem} toggleCheck={this.toggleCheck} filter={this.state.filter} />
        {this.state.todos.length === 0 ? "" : <Filter filter={this.state.filter} toggleFilter={this.toggleFilter} deleteAll={this.deleteAll} />}
      </div>
      </div>
    );
  }
}

export default App;
