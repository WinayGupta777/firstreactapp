import React from "react";

class ProductCatalogClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
        this.togglePage=this.togglePage.bind(this);
    }
    togglePage(){
        //this.state.isLoggedIn = !this.state.isLoggedIn;  //you can't do this
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }
    render(){
        return(
            <div>
                <button onClick={this.togglePage}>Sign In</button>
                <button onClick={this.togglePage}>Sign Out</button>
                {this.state.isLoggedIn ? <p>True</p> : <p>False</p>}
            </div>
        )
    }
} 

export default ProductCatalogClass;