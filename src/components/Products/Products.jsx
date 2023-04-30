import React from "react";
import data from "../../data/data.json";
import Item from "./Item";
function Products() {
  const productdata = data.homepics;
  return (
    <div className="container">
      <div className="row main-container-row">
        
        {productdata.map((value, i) => {
          return <Item name={value.name} src={value.image} nev={value.nev} />;
        })}

      </div>
    </div>
  );
}

export default Products;
