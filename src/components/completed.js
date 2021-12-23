import React from "react";
class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return(
        <>
            <h2>Completed Tasks</h2>
            {this.props.list.map(
                (i)=><p>{i.title}</p> 
            )}
        </>
    )}
}

export default Completed;