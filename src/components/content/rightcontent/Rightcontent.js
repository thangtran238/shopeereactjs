import React, { Component } from 'react';
import {Data} from "./Data";
import Item from "../rightcontent/item/Item";
class Rightcontent extends Component {
  render() {
    const items = Data();
    return (
      <div className="features_items">
            {/*features_items*/}
            <h2 className="title text-center">Features Items</h2>
            {
              items.map((item) =>
              <Item 
                    image={item.image}
                    name={item.name}
                    price={item.price}
              />
              )
            }
          </div>
    );
  }
}

export default Rightcontent;