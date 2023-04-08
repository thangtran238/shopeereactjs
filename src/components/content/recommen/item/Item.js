import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={this.props.image} alt="" />
              <h2>{this.props.price}</h2>
              <p>{this.props.name}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart" />
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
