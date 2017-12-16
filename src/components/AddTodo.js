import React from "react";
import "./AddTodo.css"
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
    // const addItem = this.props.addItem;
    const {checkAll, allChecked } = this.props;
   
    

    
    return (
      <div className="addDiv" style={{
       
        
      }}
      >

        <button className={allChecked == true? "checkAllActive" : "checkAll"} onClick={checkAll}>
          <FaAngleDown />
        </button>
        <input className="input" type="text" placeholder="What needs to be done?"
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
//