import React from "react";

class LifeCycle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            msg: "Previour Message"
        }
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