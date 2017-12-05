import React from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends React.Component {


  render() {
    let filtered = "";
    switch (this.props.filter) {
      case "all":
        filtered = this.props.todos;
        break;
      case "completed":
        filtered = this.props.todos.filter(e=> {
          return e.done==true
        });
        break;
        case "active":
        filtered = this.props.todos.filter(e=> {
          return e.done==false
        });
    }

    return (
      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "flexStart"
        }}
      >
        <div
          style={{
            maxWidth: 500,
            width: "100%",
            margin: "auto"
          }}
        >
          {filtered.map(e => {
            return (
              <div style={{ margin: "0 auto" }} key={e.id}>
                <TodoItem {...e} deleteItem={this.props.deleteItem} toggleDone={this.props.toggleDone} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default TodoList;
