import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { modalProduct } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={modalProduct.image} alt="" />
        </div>
        <div className="col-sm-6">
          <h3>Chi tiết sản phẩm</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>{modalProduct.name}</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>{modalProduct.price}</td>
              </tr>
              <tr>
                <td>Thông tin</td>
                <td>{modalProduct.description}</td>
              </tr>
              <tr>
                <td>Thông tin sơ lược</td>
                <td>{modalProduct.shortDescription}</td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>{modalProduct.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
