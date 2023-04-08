import React, { Component } from "react";
import {Data} from "../recommen/Data";
import Item from "./item/Item";


class Recommend extends Component {
  render() {
    const items = Data();
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
              {items.map((item) => (
                <Item image={item.image} name={item.name} price={item.price} />
              ))}
            </div>
            <div className="item">
              {items.map((item) => (
                <Item image={item.image} name={item.name} price={item.price} />
              ))}
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
