import React, { Component } from "react";
import ProductItem from "./productItem";

export default class Product extends Component {
  renderProductItem = () => {
    const { getProducts, getDetailProduct } = this.props;
    return getProducts.map((product, index) => {
      return (
        <ProductItem
          key={index}
          product={product}
          getDetailProduct={getDetailProduct}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
