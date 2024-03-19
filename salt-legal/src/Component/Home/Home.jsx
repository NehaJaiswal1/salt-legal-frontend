


import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Step from "./Step/Step";
import Benefit from "./Benefit/Benefit";
import StepCard from "./Step/StepCard";
import Footer from "./Footer/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Banner/>
      </div>
      <div>
        <Category/>
      </div>
      <div>
        <Step />
      </div>
      <div>
        <Benefit/>
      </div>
        <Footer/>
    </div>
  );
}

export default Home;
