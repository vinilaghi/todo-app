import React from "react";
import FaTrash from "react-icons/lib/fa/trash";
import "./Filter.css"


class Filter extends React.Component {


    render() {
        const toggleFilter = this.props.toggleFilter;
        const deleteAll = this.props.deleteAll;
        return (<div className="filter">
             <div className="filterDiv">
             <button className={this.props.filter === "all"? "filterActive" : "filterInactive"} onClick={x => toggleFilter("all")}> All </button>
             <button className={this.props.filter === "active"? "filterActive" : "filterInactive"} onClick={x => toggleFilter("active")}> Active </button>
             <button className={this.props.filter === "completed"? "filterActive" : "filterInactive"} onClick={x => toggleFilter("completed")}> Completed </button>
             </div>
             <button className="deleteAll" onClick={x => deleteAll()}>
          Clear completed
        </button>
        </div>
        );
    }

}

export default Filter;