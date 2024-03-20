



import React from 'react';
import './FooterBanner.css';
import tsl from '../../../assets/tsl-logo.png'

function FooterBanner() {
  return (
   <div>

  
      <div className="footer-banner-1">
        <div className="text">
          Powered By 
          <p>The Salt Legal</p>
        </div>
        <div className="image">
          <img src={tsl} alt="Image" />
        </div>
       
      </div>
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
   
  );
}

export default FooterBanner;