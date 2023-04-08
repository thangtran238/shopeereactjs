import React, { Component } from "react";
import Leftbar from "../content/leftsidebar/Leftbar";
import Rightcontent from "../content/rightcontent/Rightcontent";
import Category from "../content/category-tab/Category";
import Recommend from "../content/recommen/Recommend";
class Content extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Leftbar />
            </div>
            <div className="col-sm-9 padding-right">
              <Rightcontent />
              {/*features_items*/}
              <Category />
              {/*/category-tab*/}
              <Recommend />
              {/*/recommended_items*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
