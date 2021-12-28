import React from "react";
class Pending extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const divStyle = {
            color: "orange",
            fontFamily: "monospace",
        }
        return(
        <>
            <h2  style={{backgroundColor:"red"}}>Pending Tasks</h2>
            {this.props.list.map(
                (i)=>
                <div style={divStyle}>
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