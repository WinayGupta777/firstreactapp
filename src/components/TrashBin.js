import React from "react";
import styles from "./trash.css";
class Trash extends React.Component {
    constructor(props){
        super(props)
    }
    clearALL=()=>{
        
    }
    render(){return(
        <>
            <div className="block">
                <h2>Trash Bin</h2>
                <button className="trash">Clear</button>
            </div>
            {this.props.list.map(
                (i)=>
                <div>
                    <p>{i.title}</p>
                </div>
            )}
        </>
    )}
}

export default Trash;