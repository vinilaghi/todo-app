import React from "react";
import FaTrash from "react-icons/lib/fa/trash";
import "./Filter.css"


class Filter extends React.Component {


    render() {
        const toggleFilter = this.props.toggleFilter;
        const deleteAll = this.props.deleteAll;
        return (<div>
             {this.props.filter == "all"? <span> All </span> : <span onClick={x => toggleFilter("all")}> all </span>}
             {this.props.filter == "completed"? <span> Completed </span> : <span onClick={x => toggleFilter("completed")}> completed </span>}
             {this.props.filter == "active"? <span> Active </span> : <span onClick={x => toggleFilter("active")}> active </span>}
             
             <button className="deleteAll" onClick={x => deleteAll()}>
          <FaTrash />
        </button>
        </div>
        );
    }

}

export default Filter;