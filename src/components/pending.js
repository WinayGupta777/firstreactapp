import React from "react";
class Pending extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){return(
        <>
            <h2>Pending Tasks</h2>
            <p>{this.props.list[0].title}</p>
            <p>{this.props.list[1].title}</p>
        </>
    )}
}

export default Pending;