import React, { Component } from "react";
import data from "./data.json";
import Product from "./product";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      modalProduct: data[0],
    };
  }
  HandleDetailProduct = (product) => {
    this.setState({
      modalProduct: product,
    });
  };
  render() {
    const { products, modalProduct } = this.state;
    return (
      <>
        <h3 className="text-center">Shoes Store</h3>
        <Product
          getProducts={products}
          getDetailProduct={this.HandleDetailProduct}
        />
        <Modal modalProduct={modalProduct} />
      </>
    );
  }
}
