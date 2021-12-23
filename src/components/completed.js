import React from "react";
class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return(
        <>
            <h2>Completed Tasks</h2>
            <p>{this.props.list[0].title}</p>
            <p>{this.props.list[1].title}</p>
            {/* This thing we cant do for huge data */}
        </>
    )}
}

export default Completed;