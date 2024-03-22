


import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Card, CardContent } from "@mui/material";
import bt from "../../assets/template/banner-template.jpg";
import "./Features.css";
import Testimonials from '../Home/testimonial/testimonial'
import Testimonial from "../Home/testimonial/testimonial";

function Features() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="features-container">
        <h2>
          <span>Optimized for Enhancing Business Efficiency</span>
        </h2>
        <p>
          Top designed Templates to smooth running of Bussiness
        </p>
        <div className="features-div">
          <div>
            <img src={bt} style={{ width: "100%", padding: "50px" }} />
          </div>
        </div>
        {/* Youtube video */}
        <div>
        <div className='footer-banner-2'>
            <h2>Who we are <span>?</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
              <p>Reprehenderit impedit eius voluptates perspiciatis quod delectus, fugiat nihil hic vel dicta</p>
        </div>
        <div className="content-right">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/7oKGUn07V4w" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
          {/* <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis quis iste cumque molestiae eveniet? Ullam voluptatem nemo ad fugiat totam distinctio iste quae iure consectetur optio? Error, velit odio.
          </h2> */}
        </div>
        </div>
        

      </div>
      <div>
          <Testimonial/>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Features;
