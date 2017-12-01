import React from "react";
import FaTrash from "react-icons/lib/fa/trash";
import FaSquareO from 'react-icons/lib/fa/square-o';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import "./todoItem.css";

class TodoItem extends React.Component {

  render() {
    const { deleteItem, action, id, done, toggleDone } = this.props;
    const check = (done) => {
      if (done === false) {
        return <button className="uncheck"><FaSquareO /></button>;


      }
      else {
        return <button className="check"><FaCheckSquareO /></button>;

      }
    }
    // const color = (done) => {
    //   if (done === false) {
    //     return ""
    //     console.log(color);
    //   }
    //   else{
    //     return ""
    //     console.log(color);
    //   }
    // }
    return (
      <div className="divItem" >

        <div className="divCheck" onClick={x => toggleDone(id)}>{check(done)}</div>
        <span className="action" onClick={x => toggleDone(id)}> {action} </span>
        <button className="delete" onClick={x => deleteItem(id)}>
          <FaTrash />
        </button>

      </div>
    );
  }
}

export default TodoItem;
