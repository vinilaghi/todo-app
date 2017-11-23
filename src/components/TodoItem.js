import React from "react";
import FaTrash from "react-icons/lib/fa/trash";
import FaSquareO from 'react-icons/lib/fa/square-o';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';

class TodoItem extends React.Component {
 
  render() {
    const { deleteItem, action, id, done, toggleDone } = this.props;
    const check = (done) => {
        if (done === false) {
            return <FaSquareO />;
           
            
                    }
                    else { 
                        return <FaCheckSquareO />;
                        
                    }
                }
    return (
      <div style={{ display: "flex", margin: "0" }}>
        <div onClick={x => deleteItem(id)}>
          <FaTrash />
        </div>
        <span> {action} </span>
      <div onClick={x => toggleDone(id)}>{check(done)}</div>
        
      </div>
    );
  }
}

export default TodoItem;
