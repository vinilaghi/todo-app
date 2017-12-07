import React from "react";
import FaTrash from "react-icons/lib/fa/trash";
import FaSquareO from 'react-icons/lib/fa/square-o';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import "./TodoItem.css";

class TodoItem extends React.Component {

  render() {
    const { deleteItem, action, id, check, toggleCheck } = this.props;
    const checkButton = (check) => {
      if (check === false) {
        return <button className="uncheck"><FaSquareO /></button>;


      }
      else {
        return <button className="check"><FaCheckSquareO /></button>;

      }
    }
  
    return (
      <div className="divItem" >

        <div className="divCheck" onClick={x => toggleCheck(id)}>{checkButton(check)}</div>
        <span className="action" onClick={x => toggleCheck(id)}> {action} </span>
        <button className="delete" onClick={x => deleteItem(id)}>
          <FaTrash />
        </button>

      </div>
    );
  }
}

export default TodoItem;
