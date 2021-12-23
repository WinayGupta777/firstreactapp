import React from "react";

class ProductCatalogClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <img  src={this.props.imgSrc}></img><br/>
                <button>Buy Here</button>
                <>${this.props.price}</>
                <br/>
            </>
        )
    }
} 

export default ProductCatalogClass;