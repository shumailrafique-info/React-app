import "./App.css";
import Header from "./components/Header2/Header";
import { Routes, Route } from "react-router-dom";
import TopBanner from "./components/TopBanner/TopBanner";
import Slider from "./components/Slider/Slider";
import Sidebar from "./components/sidebar/Sidebar";
import Heading from "./components/Heading/Heading";
import Products from "./components/Products/Products";
import SubProducts from "./components/Subproducts/SubProducts";
import data from "./data/data.json";
import SingleProduct from "./components/Subproducts/SingleProduct";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  



  return (
    <div>
      <Sidebar />
      <RightSidebar/>
      <TopBanner />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Heading heading="MEN" subheading="COLLECTION 2023" />
              <Products />
            </>
          }
        />
        <Route path="/boski" element={<SubProducts data={data.boskipics}/>} />
        <Route path="/boski/:productid" element={<SingleProduct catagory="boski" data={data.boskipics} />} />
        <Route path="/wash-and-wear" element={<SubProducts data={data.wwpics}/>} />
        <Route path="/wash-and-wear/:productid" element={<SingleProduct catagory="wash-and-wear" data={data.wwpics} />} />
        <Route path="/kurta" element={<SubProducts data={data.kurtapics}/>} />
        <Route path="/kurta/:productid" element={<SingleProduct catagory="kurta" data={data.kurtapics} />} />
        <Route path="/men-shawl" element={<SubProducts data={data.menspics}/>} />
        <Route path="/men-shawl/:productid" element={<SingleProduct catagory="men-shawl" data={data.menspics} />} />
        <Route path="/cotton" element={<h1 style={{backgroundColor:"#7e7e6e",fontSize:"1rem",padding:"0px",margin:"1rem 0px 0px 0px"}} className="text-center text-white p-5">{data.cottonpics[0].message}-----{data.cottonpics[0].name}</h1>} />
        <Route path="/karandi" element={<h1 style={{backgroundColor:"#7e7e6e",fontSize:"1rem",padding:"0px",margin:"1rem 0px 0px 0px"}} className="text-center text-white p-5">{data.karandipics[0].message}-----{data.karandipics[0].name}</h1>} />
      </Routes>
    </div>
  );
}

export default App;
