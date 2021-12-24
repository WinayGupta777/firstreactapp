import React from "react";
import Completed from "./completed";
import Pending from "./pending";

let todoList = [
    {
        title: "Do exercise",
        status: true,
        id: 1,
        mode: "active"
    },
    {
        title: "Update zoom app",
        status: true,
        id: 2,
        mode: "active"
    },
    {
        title: "Repair your cycle",
        status: false,
        id: 3,
        mode: "active"
    },
    {
        title: "Research on Linux",
        status: true,
        id: 4,
        mode: "active"
    },
    {
        title: "watch - No way home",
        status: false,
        id: 5,
        mode: "active"
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
    changeState=(blockID)=>{
        //as we cant change state var directly...
        //so, we created deep copy
        const tmp = [...this.state.todos]; 
        const block = tmp.find( (i)=>i.id === blockID);
        block.status=!block.status;
        this.setState({todos:tmp})
    }
    render(){
        return(
            <>
                <Pending list={this.getPending()}   fun={this.changeState}></Pending>
                <Completed list={this.getCompleted()}></Completed>
            </>
        )
    }
}

export default TodoComponent;