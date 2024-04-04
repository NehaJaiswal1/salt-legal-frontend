import React from "react";
import "./FooterBanner.css";
import tsl from "../../../assets/tsl-logo.png";
import tsl1 from "../../../assets/logo.webp";
import pb from "../../../assets/power.png";

function FooterBanner() {
  return (
    <div>
    <div className="footer-banner-1">
        {/* <div className="text">
          <div style={{display:'flex'}}>
            <img src={pb} />
            <p className="text-div-p"> Powered by </p>
          </div>

          <span>The Salt Legal </span>
        </div> */}
        <div className="image">
          <p>
         " A legal innovator crafting comprehensive solutions across diverse practice areas for exceptional client experiences."
          </p>
         
          <img src={tsl1} alt="Image" />
        </div>
        
      </div> 
      <div className="footer-banner-2">
        <h2>
          Who we are <span>?</span>
        </h2>
        <p>A legal studio crafting tailored decision.</p>
        <p>
        Always at the forefront of legal trends, The SALT Legal ensures clients maintain online competitive advantage.
        </p>
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
  );
}

export default FooterBanner;
