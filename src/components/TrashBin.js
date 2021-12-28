import React from "react";
import styles from "./trash.css";
class Trash extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isVisible: true
        }
    }
    clearALL=()=>{
        // console.log(this.state.isVisible);
        // console.log(this.props.list[0].id);
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render(){return(
        <>
            <div className="block">
                <h2>Trash Bin</h2>
                <button className="trash" onClick={this.clearALL}>Clear</button>
            </div>
            {this.state.isVisible == true ? 
            this.props.list.map(
                (i)=>
                <div>
                    <p>{i.title}</p>
                </div>
            ):<></>}
        </>
    )}
}

export default Trash;