import React, { Component } from "react";
import { Data } from "../Data";
import Item from "./item/Item";

class Recommend extends Component {
  render() {
    const dis_products = Data("recommend");
    let items = [];
    for (let i = 0; i < dis_products.length; i++) {
      items[i] = (
        <Item
          key={i}
          image={dis_products[i].image}
          name={dis_products[i].name}
          price={dis_products[i].price}
        />
      );
    }
    return (
      <div className="recommended_items">
        {/*recommended_items*/}
        <h2 className="title text-center">recommended items</h2>
        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
            {items}
            </div>
            <div className="item">
            {items}
            </div>
          </div>
          <a
            className="left recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="right recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default Recommend;
