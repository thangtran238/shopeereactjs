import React, { Component } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Slider from "../content/carousel/Slider";
import Content from "../content/Content";
class App extends Component {
  render() {
    return (
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Home | E-Shopper</title>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <link href="css/prettyPhoto.css" rel="stylesheet" />
  <link href="css/price-range.css" rel="stylesheet" />
  <link href="css/animate.css" rel="stylesheet" />
  <link href="css/main.css" rel="stylesheet" />
  <link href="css/responsive.css" rel="stylesheet" />
  {/*[if lt IE 9]>
    
    
    <![endif]*/}
  <link rel="shortcut icon" href="images/ico/favicon.ico" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="images/ico/apple-touch-icon-144-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="images/ico/apple-touch-icon-114-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="images/ico/apple-touch-icon-72-precomposed.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    href="images/ico/apple-touch-icon-57-precomposed.png"
  />
  {/*/head*/}
  <Header />
  {/*/header*/}
  <Slider />
  {/*/slider*/}
  <Content />
  <Footer />
  {/*/Footer*/}
</>

    );
  }
}

export default App;