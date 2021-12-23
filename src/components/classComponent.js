import React from "react";
import LoginPage from "./isLoggedin";
import LogoutPage from "./isLoggedOut";

class ProductCatalogClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
        // this.togglePage=this.togglePage.bind(this);
    }
    togglePage=()=>{
        //this.state.isLoggedIn = !this.state.isLoggedIn;  //you can't do this
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }
    render(){
        return(
            <div>
                <button onClick={this.togglePage}>Sign In</button>
                <button onClick={this.togglePage}>Sign Out</button>
                {this.state.isLoggedIn ? <LoginPage></LoginPage> : <LogoutPage></LogoutPage>}
            </div>
        )
    }
} 

export default ProductCatalogClass;