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
            return <button className="Uncheck"><FaSquareO /></button>;
           
            
                    }
                    else { 
                        return <button className="Check"><FaCheckSquareO /></button>;
                        
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
      <div style={{ display: "flex", marginBottom: "5px"}}>
        
        <span className="Action" onClick={x => toggleDone(id)}> {action} </span>
      <div className="DivItem" onClick={x => toggleDone(id)}>{check(done)}</div>
      <button className="Delete" onClick={x => deleteItem(id)}>
          <FaTrash />
        </button>
        
      </div>
    );
  }
}

export default TodoItem;
