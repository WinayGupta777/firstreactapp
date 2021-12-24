import React from "react";
class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return(
        <>
            <h2>Completed Tasks</h2>
            {this.props.list.map(
                (i)=>
                <div>
                    <p>{i.title}</p>
                    <button onClick={()=>this.props.fun2(i.id)}>Delete</button>
                </div>
            )}
        </>
    )}
}

export default Completed;