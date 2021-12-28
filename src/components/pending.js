import React from "react";
import styles from "./pending.css";
class Pending extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
            <h2>◉ Pending Tasks</h2>
            {this.props.list.map(
                (i)=>
                <div className="block">
                    <p>{i.title}</p>
                    <button className="com" onClick={()=>this.props.fun(i.id)}>Done</button>
                    <button className="del" onClick={()=>this.props.fun2(i.id)}>Delete</button>
                    {console.log(i)}
                </div>
            )}
        </> 
    )}
}

export default Pending;