import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
// import  useEffect from "react";
// import  axios from "axios";

const Item = (props) => {
  const Nevigate = useNavigate();

  // useEffect(() => {


  //     axios.get("http://localhost:5000/api/v1/users/me",{});

  
  
  // }, []);


  return (
    <div
      onClick={() => {
        Nevigate(`/${props.nev}`);
      }}
      className="col-md-4 col-sm-6 main-product-div"
      style={{ cursor: "pointer" }}
    >
      <img className="img-fluid" src={props.src} alt="" />
      <p className="text-center main-product-name">{props.name}</p>
    </div>
  );
};

export default Item;
