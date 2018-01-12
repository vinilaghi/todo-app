import React from "react";
import FaCheck from 'react-icons/lib/fa/check';
import "./TodoItem.css";

class TodoItem extends React.Component {
  

  render() {
    const { deleteItem, action, id, check, toggleCheck} = this.props;
    return (
      <div className="divItem">

        <div className="divCheck" onClick={x => toggleCheck(id)}><button className={check === true? "check" : "unCheck"}><FaCheck /></button></div>
        <span className="action" onClick={x => toggleCheck(id)}> {action} </span>
        <button className="delete" onClick={x => deleteItem(id)}>
          X
        </button>

      </div>
    );
  }
}

export default TodoItem;
