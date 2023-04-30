import React from "react";
import "./Header.css";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();
  
  return (
    <>
      <header style={{ position: "sticky", top: "-1px",backgroundColor:"transparent",zIndex:"1000"}}>
        {/* SideBar */}

        {/* //Header */}
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ height: 90 ,backgroundColor:"transparent"}}
        >
          <div className="container-fluid">
            <div className="main-container">
              <div
                className="menu"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                Menu
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="logo">
                <img
                  onClick={() => {
                    Navigate("/");
                  }}
                  src={data.logo}
                  alt=""
                />
              </div>
              <div className="icons">
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
        </nav>
      </header>
    </>
  );
}

export default Header;
