import React from "react";

class LifeCycle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            msg: "Previour Message"
        }
    }
    //This method will run after 
    // render() method automatically!!
    componentDidMount=()=>{
        setTimeout(() => {
           this.setState({msg: "New message!!"}); 
        }, 5000);
    }
    //After DidMount called DidUpdate() will run automatically!!
    componentDidUpdate=(prevMsg)=>{
        if (prevMsg.msg!==this.state.msg)
        {document.getElementById("just").innerHTML="Update occured!!"}
    }
    render(){
        return(
            <>
                <h1>{this.state.msg}</h1>
            </>
        )
    }
}

export default LifeCycle;