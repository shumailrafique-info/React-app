import React from "react";
import "./SubProducts.css";
import { useNavigate } from "react-router-dom";

const SubProducts = (data) => {
  const Navigate = useNavigate();
  const productpics = data.data;
  return (
    <>
      <div className="container-fluid px-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-3 order-set">
            <h6 style={{ fontFamily: "'Russo One', sans-serif" }}>
              Categories
            </h6>
            <div className="links-box">
              <div
                onClick={() => {
                  Navigate("/boski");
                }}
              >
                Boski
              </div>
              <div
                onClick={() => {
                  Navigate("/wash-and-wear");
                }}
              >
                Wash & Wear
              </div>
              <div
                onClick={() => {
                  Navigate("/kurta");
                }}
              >
                Kurta
              </div>
              <div
                onClick={() => {
                  Navigate("/men-shawl");
                }}
              >
                Men Shawl
              </div>
              <div
                onClick={() => {
                  Navigate("/cotton");
                }}
              >
                Cotton
              </div>
              <div
                onClick={() => {
                  Navigate("/karandi");
                }}
              >
                Karandi
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              {productpics.map((value, i) => {
                return (
                  <div  onClick={() => {
                    Navigate(`/${value.url}/${value.id}`);
                  }} style={{ cursor: "pointer", }} className="col-12 col-sm-6 col-md-4 main-sub-div">


                    <div style={{position:"relative",overflow:"hidden"}}>
                    <div className="hover-icons">
                      <i
                        style={{
                          fontSize: ".6rem",
                          fontFamily: "sans-serif",
                        }}
                        className="fa-solid"
                      >
                        buy
                      </i>
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-solid fa-arrows-left-right"></i>
                    </div>
                    <div
                      className="img-container"
                      style={{ position: "relative" }}
                    >
                      <img
                        className="img-fluid"
                        src={value.image}
                        alt={value.name}
                      />
                    </div>
                    </div>

                    
                    <p className="text-center sub-p">{value.name}</p>
                    <p className="text-center sub-price">{value.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubProducts;
