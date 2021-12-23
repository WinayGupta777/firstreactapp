import React from "react";
import Completed from "./completed";
import Pending from "./pending";

let todoList = [
    {
        title: "Do exercise",
        status: true
    },
    {
        title: "Repair your cycle",
        status: false
    },
    {
        title: "Research on Linux",
        status: true
    },
    {
        title: "watch - No way home",
        status: false
    }
];


class TodoComponent extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            todos: todoList
        }
    }
    getPending=()=>{
        let pends = this.state.todos.filter(
            (i)=>i.status===true
        );
        return pends;
    }
    getCompleted=()=>{
        let pends = this.state.todos.filter(
            (i)=>i.status===false
        );
        return pends;
    }
    render(){
        return(
            <>
                <Pending list={this.getPending()}></Pending>
                <Completed list={this.getCompleted()}></Completed>
            </>
        )
    }
}

export default TodoComponent;