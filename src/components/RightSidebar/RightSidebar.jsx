import React from "react";
import "./RightSidebar.css";
const RightSidebar = () => {
  return (
    <div style={{zIndex:"2003"}}>
     
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Bin Yousaf</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">

             <h1 className="sidebar-shopping-cart">Shopping Cart</h1>

            <div className="container text-white p-2 mx-2 mt-1 text-center view-cart">
                View Cart
            </div>
            <div className="container text-white p-2 mx-2 mt-1 text-center check-out">
                CheckOut
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
