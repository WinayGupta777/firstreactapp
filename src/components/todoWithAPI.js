import React from "react";

class TodoApi extends React.Component {
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    render(){
        return(
            <h3>{this.state.todos}</h3>
        )
    }
} 

export default TodoApi;