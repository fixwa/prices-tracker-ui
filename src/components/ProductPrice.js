import React, { Component } from 'react';
import './ProductPrice.css';

class ProductPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    render() {
        return (
            <div className="ProductPrice">
                <h2>{this.props.product.id}</h2>
                <p>{this.props.product.name}</p>
            </div>
        );
    }
}

export default ProductPrice;