import React from "react";
import LayOut from "../../Component/Layout/Layout";
import Carousel from "../../Component/Caruosel/Carousel";
import Category from "../../Component/Category/category";
import Product from "../../Component/Products/Product";
function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
