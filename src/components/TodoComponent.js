import React from "react";

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
        let pend = this.state.todos.filter(
            (i)=>i.status===true
        );
        console.log(pend);
    }
    getCompleted=()=>{

    }
    render(){
        return(
            <>
                <button onClick={this.getPending}>press</button>
                {/* <Pending></Pending>
                <Completed></Completed> */}
            </>
        )
    }
}

export default TodoComponent;