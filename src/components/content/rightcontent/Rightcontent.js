import React, { Component } from "react";
import { Data } from "../Data";
import Item from "../rightcontent/item/Item";
class Rightcontent extends Component {
  render() {
    const dis_products = Data("products");
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
      <div className="features_items">
        {/*features_items*/}
        <h2 className="title text-center">Features Items</h2>
        {items}
      </div>
    );
  }
}

export default Rightcontent;
