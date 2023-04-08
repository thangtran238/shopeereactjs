import React, { Component } from "react";

function Item (props) {
    return (
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={props.image} alt="" />
              <h2>{props.price}</h2>
              <p>{props.name}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart" />
                Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>{props.price}</h2>
                <p>{props.name}</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Item;
