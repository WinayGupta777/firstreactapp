import React from "react";
import Pending from "./pending";
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
    render(){
        return(
            <>
                <Pending list={this.getPending()}   fun={this.changeState}  fun2={this.move2trash}></Pending>
            {/* <h3>
                {this.state.todos.map(
                    (i)=>
                    <>
                        <p>Id:{i.id}</p>
                        <p>Title:{i.title}</p>
                        <p>Completed:{i.completed}</p>
                    </>
                )}
            </h3> */}
            </>
        )
    }
} 

export default TodoApi;