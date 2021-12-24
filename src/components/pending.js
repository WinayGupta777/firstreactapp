import React from "react";
class Pending extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return(
        <>
            <h2>Pending Tasks</h2>
            {this.props.list.map(
                (i)=>
                <div>
                    <p>{i.title}</p>
                    <button onClick={()=>this.props.fun(i.id)}>Done</button>
                    <button onClick={()=>this.props.fun2(i.id)}>Delete</button>
                    {console.log(i)}
                </div>
            )}
        </> 
    )}
}

export default Pending;