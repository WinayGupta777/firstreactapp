import React from "react";
import Pending from "./pending";
import Completed from "./completed";
class TodoApi extends React.Component {
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((result)=>result.json())
        .then((jsonData)=>this.setState({todos:jsonData}))
    }
    getPending=()=>{
        let pends = this.state.todos.filter(
            (i)=>i.completed===true
        );
        return pends;
    }
    getCompleted=()=>{
        let pends = this.state.todos.filter(
            (i)=>i.completed===false
        );
        return pends;
    }
    changeState=(blockID)=>{
        //as we cant change state var directly...
        //so, we created deep copy
        const tmp = [...this.state.todos]; 
        const block = tmp.find( (i)=>i.id === blockID);
        block.completed=!block.completed;
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

export default TodoApi;