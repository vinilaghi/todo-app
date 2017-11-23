import React from "react";

class AddTodo extends React.Component {
  handleKeyPress(target) {
    if (target.charCode === 13) {
     
      if (this.input.value.trim() != ""){
      this.props.addItem(this.input.value);
      }
      this.input.value = "";
      
    }
  }
  render() {
    const addItem = this.props.addItem;
    return (
      <div>
        
        <input
          ref={text => {
            this.input = text;
          }}
          onKeyPress={target => this.handleKeyPress(target)}
        />
        <button
          onClick={() => {
            addItem(this.input.value);
            this.input.value = "";
          }}
        >
          Add
        </button>
       
      </div>
    );
  }
}

export default AddTodo;
