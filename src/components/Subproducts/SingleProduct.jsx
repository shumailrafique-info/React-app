import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import ReactImageMagnify from "react-image-magnify";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Item from "../Products/Item";

const SingleProduct = ({ data, catagory }) => {
  const { productid } = useParams();
  const product = data.find((productitem) => productitem.id === productid);
  const watchImg687 = product.image;
  const watchImg1200 = product.image;
  const [num, setNum] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6" style={{ zIndex: "100" }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: watchImg687,
              },
              largeImage: {
                src: watchImg1200,
                width: 1000,
                height: 3000,
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
            }}
          />
        </div>
        <div className="col-12 col-md-6" style={{ position: "relative" }}>
          <div
            className="container-fluid"
            style={{ position: "sticky", top: "6.6rem", zIndex: "1" }}
          >
            <h2 className="single-product-name">{product.name}</h2>
            <h2
              className="single-product-name"
              style={{
                color: "#BB7B1C",
                fontWeight: "600",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <span
                style={{
                  fontSize: ".8rem",
                  fontWeight: "600",
                  padding: "5px",
                  textDecoration: "line-through",
                  color: "#A8A8A8",
                }}
              >
                {" "}
                Rs 4000
              </span>
              {product.price}
            </h2>
            <hr />

            <div className="buy-now-container">
              <div className="counter">
                <button
                  onClick={() => {
                    if (num > 0) {
                      setNum(num - 1);
                    } else {
                      setNum(0);
                    }
                  }}
                  className="button-inc"
                >
                  -
                </button>
                <p>{num}</p>
                <button
                  onClick={() => {
                    if (num < 5) {
                      setNum(num + 1);
                    } else {
                      setNum(5);
                    }
                  }}
                  className="button-inc"
                >
                  +
                </button>
              </div>
              <div
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="buy-now"
              >
                Buy Now
              </div>
            </div>
            <div className="whish-comare-container">
              <div className="wish">
                <i className="fa-regular fa-heart"></i>
                <span>ADD TO COMPARE</span>
              </div>
              <div className="compare">
                <i className="fa-solid fa-arrows-left-right"></i>
                <span>ADD TO WISHLIST</span>
              </div>
            </div>
            <hr />
            <div className="navigate">
              <span>Category:</span>
              <Link className="link-tag" to={`/${catagory}`}>
                {catagory}
              </Link>
            </div>
            <hr />
            <div className="single-product-icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <a href="https://www.facebook.com/binyousafclothing">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/binyousafclothing/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Heading heading="Related Products" />
      <div className="container-fluid">
        <div className="row">
          {data.map((value, i) => {
            if (product.id === value.id) {
              return <></>;
            } else if (i % 2 === 0) {
              return <></>;
            } else {
              return (
                <Item
                  nev={`${value.url}/${value.id}`}
                  src={value.image}
                  name={value.name}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
