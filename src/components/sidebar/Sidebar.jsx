import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const Navigate = useNavigate();

  return (
    <div>
      <div
        style={{ zIndex: "10000000" }}
        className="offcanvas offcanvas-start bg-dark text-white"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            {/* Bin Yousaf */}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body nav-links">
          <div
            onClick={() => {
              Navigate("/boski");
            }}
          >
            BOSKI
          </div>
          <div
            onClick={() => {
              Navigate("/wash-and-wear");
            }}
          >
            WASH & WEAR
          </div>
          <div
            onClick={() => {
              Navigate("/kurta");
            }}
          >
            KURTA
          </div>
          <div
            onClick={() => {
              Navigate("/men-shawl");
            }}
          >
            MEN SHAWL
          </div>
          <div
            onClick={() => {
              Navigate("/cotton");
            }}
          >
            COTTON
          </div>
          <div
            onClick={() => {
              Navigate("/karandi");
            }}
          >
            KARANDI
          </div>
          <div
            onClick={() => {
              Navigate("/contact-us");
            }}
          >
            CONTACT US
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
