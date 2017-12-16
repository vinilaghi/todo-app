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
      filter: "all",
      allChecked: false,
      checked: 0
    }
  }

  getFiltered = (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter(e => {
          return e.check === true
        });
      case "active":
        return todos.filter(e => {
          return e.check === false
        });
      default:
        return "";
    }
  }


  deleteItem = key => {
    let newTodo = this.state.todos.filter(item => item.id !== key);
    console.log("item removed: ", key);
    let state = {
      todos: newTodo,
      allChecked: newTodo.every(x => x.check),
      checked: this.countChecked(newTodo)
    }

    this.setState(state);
  }

  addItem = text => {
    if (text.trim() !== "") {
      let newList = [
        ...this.state.todos,
        { action: text, id: nextTodoId++, check: false }
      ];
      this.setState({
        todos: newList,
        allChecked: false,
      });
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

    let state = {
      todos: newTodo,
      allChecked: newTodo.every(x => x.check),
      checked: this.countChecked(newTodo)
    }

    this.setState(state);
    console.log(state);
  }

  checkAll = () => {

    let newTodo = null;
    if (this.state.allChecked === false) {
      newTodo = this.state.todos.map(item => {
        return {
          ...item,
          check: true
        };
      });
    }
    else {
      newTodo = this.state.todos.map(item => {
        return {
          ...item,
          check: false
        }
      });
    }

    let state = {
      todos: newTodo,
      allChecked: newTodo.every(x => x.check),
      checked: this.countChecked(newTodo)
    }
    this.setState(state);
  }

  toggleFilter = state => {
    this.setState({ filter: state });
  }

  deleteAll = () => {
    let newTodo = this.state.todos.filter(e => e.check === false)
    let state = {
      todos: newTodo,
      allChecked: newTodo.every(x => x.check),
      checked: this.countChecked(newTodo)
    }

    this.setState(state);
  }

  countChecked = (todos) => {
    let counted = todos.filter((e) => e.check === true);
    return counted.length;

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
          <AddTodo  
          allChecked={this.state.allChecked} 
          addItem={this.addItem} 
          checkAll={this.checkAll} 
          />
          <TodoList 
          todos={filtered} 
          deleteItem={this.deleteItem} 
          toggleCheck={this.toggleCheck} 
          filter={this.state.filter} 
          />
          {this.state.todos.length === 0 ? "" : <Filter 
          filter={this.state.filter} 
          toggleFilter={this.toggleFilter} 
          deleteAll={this.deleteAll}
          checked={this.state.checked}
          items={this.state.todos.length} 
          />}
        </div>
      </div>
    );
  }
}

export default App;
