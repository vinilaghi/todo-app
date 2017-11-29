import React from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends React.Component {


  render() {
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
          {this.props.todos.map(e => {
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
