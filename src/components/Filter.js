import React from "react";



class Filter extends React.Component {


    render() {
        const toggleFilter = this.props.toggleFilter;
        return (<div>
             {this.props.filter == "all"? <span> All </span> : <span onClick={x => toggleFilter("all")}> all </span>}
             {this.props.filter == "completed"? <span> Completed </span> : <span onClick={x => toggleFilter("completed")}> completed </span>}
             {this.props.filter == "active"? <span> Active </span> : <span onClick={x => toggleFilter("active")}> active </span>}
           
        </div>
        );
    }

}

export default Filter;