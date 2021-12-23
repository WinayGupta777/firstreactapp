import React from "react";
class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:1
        }
    }
    onPlus=()=>{
        this.setState({count: this.state.count + 1})
    }
    onMinus=()=>{
        this.setState({count: this.state.count - 1})
    }
    render() {
        return(<div>
            <button onClick={this.onPlus}>+</button>
            {this.state.count}
            <button onClick={this.onMinus}>-</button>
        </div>)
    }
}

export default AddItem;