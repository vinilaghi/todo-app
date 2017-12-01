import React from "react";
import "./addTodo.css"
import FaAngleDown from 'react-icons/lib/fa/angle-down';


class AddTodo extends React.Component {
  handleKeyPress(target) {
    if (target.charCode === 13) {

      if (this.input.value.trim() !== "") {
        this.props.addItem(this.input.value);
      }
      this.input.value = "";

    }
  }
  render() {
    const addItem = this.props.addItem;
    const checkAll = this.props.checkAll;
    return (
      <div style={{
        textAlign: "left",
        maxWidth: 500,
        width: "100%",
        margin: "auto",
        display: 'flex'
      }}
      >

        <button className="CheckAll" onClick={checkAll}>
          <FaAngleDown />
        </button>
        <input className="Input" type="text" placeholder="What needs to be done?"
          ref={text => {
            this.input = text;
          }}
          onKeyPress={target => this.handleKeyPress(target)}
        />
        {/* <button className="Button"
          onClick={() => {
            addItem(this.input.value);
            this.input.value = "";
          }}
        >
          <b>Add</b>
        </button> */}

      </div>
    );
  }
}

export default AddTodo;
