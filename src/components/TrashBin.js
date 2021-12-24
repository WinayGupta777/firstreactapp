import React from "react";

class Trash extends React.Component {
    constructor(props){
        super(props)
    }
    clearALL=()=>{
        
    }
    render(){return(
        <>
            <h2>Trash Bin  
                <button>Clear</button>
            </h2>
            {this.props.list.map(
                (i)=>
                <div>
                    <p>{i.title}</p>
                </div>
            )}
        </>
    )}
}

export default Trash;