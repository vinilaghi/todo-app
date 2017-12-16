import React from "react";
import "./Filter.css"


class Filter extends React.Component {


    render() {
        const { toggleFilter, deleteAll, checked, items } = this.props;
        return (<div className="filter">
            <span className="remaining">
            {items - checked} items left
            </span>
            <div className="filterDiv">
                <button className={this.props.filter === "all" ? "filterActive" : "filterInactive"} onClick={x => toggleFilter("all")}> All </button>
                <button className={this.props.filter === "active" ? "filterActive" : "filterInactive"} onClick={x => toggleFilter("active")}> Active </button>
                <button className={this.props.filter === "completed" ? "filterActive" : "filterInactive"} onClick={x => toggleFilter("completed")}> Completed </button>
            </div>
            {checked > 0 ? <button className="deleteAll" onClick={x => deleteAll()}>
                Clear completed
        </button> : ""}
        </div>
        );
    }

}

export default Filter;