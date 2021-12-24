import React from "react";

class Trash extends React.Component {
    constructor(props){
        super(props)
    }
    render(){return(
        <>
            <h2>Trash Bin</h2>
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