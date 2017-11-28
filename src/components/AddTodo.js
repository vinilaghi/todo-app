import React from "react";
import "./addTodo.css"

class AddTodo extends React.Component {
  handleKeyPress(target) {
    if (target.charCode === 13) {
     
      if (this.input.value.trim() !== ""){
      this.props.addItem(this.input.value);
      }
      this.input.value = "";
      
    }
  }
  render() {
    const addItem = this.props.addItem;
    return (
      <div>
        
        <input className="Input" type="text"
          ref={text => {
            this.input = text;
          }}
          onKeyPress={target => this.handleKeyPress(target)}
        />
        <button className="Button"
          onClick={() => {
            addItem(this.input.value);
            this.input.value = "";
          }}
        >
          <b>Add</b>
        </button>
       
      </div>
    );
  }
}

export default AddTodo;
