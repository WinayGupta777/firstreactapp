import React from "react";
import Completed from "./completed";
import Pending from "./pending";
import Trash from "./TrashBin";
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
            (i)=>i.status===true && i.mode==="active"
        );
        return pends;
    }
    getCompleted=()=>{
        let pends = this.state.todos.filter(
            (i)=>i.status===false && i.mode==="active"
        );
        return pends;
    }
    changeState=(blockID)=>{
        //as we cant change state var directly...
        //so, we created deep copy
        const tmp = [...this.state.todos]; 
        const block = tmp.find( (i)=>i.id === blockID && i.mode === "active");
        block.status=!block.status;
        this.setState({todos:tmp})
    }
    move2trash=(blockID)=>{
        const tmp = [...this.state.todos];
        const block = tmp.find(  (i)=> i.id===blockID  && i.mode === "active");
        block.mode = "deactive";
        this.setState({todos:tmp});
    }
    getTrashed=()=>{
        let d = this.state.todos.filter( (i)=>i.mode==="deactive");
        return d;
    }
    render(){
        return(
            <>
                <Pending list={this.getPending()}   fun={this.changeState}  fun2={this.move2trash}></Pending>
                <Completed list={this.getCompleted()} fun2={this.move2trash}></Completed>
                <Trash list={this.getTrashed()}></Trash>
            </>
        )
    }
}

export default TodoComponent;