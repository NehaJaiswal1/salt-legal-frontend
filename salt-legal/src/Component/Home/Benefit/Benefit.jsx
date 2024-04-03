

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faGlobe, faStopwatch, faTrophy } from '@fortawesome/free-solid-svg-icons';
import "./Benefit.css";
import st from '../../../assets/template/savetime.jpg'
import sm from '../../../assets/template/savemoney.avif'
import grow from '../../../assets/template/growth.jpg'

function Benefit() {
  return (
    <div>
      <div className='benefit-container'>
        <p className='benefit-heading'>Experience<span>  Impressive </span>  benefit with Documentations</p>
        
        <div className='benefit-items'>
          <div className='benefit-item'>
            <div className="icon-wrapper">
              <img src={st} className='icon' />
            </div>
            <h2 className='benefit-title'>SAVE PRECIOUS TIME</h2>
            <p className='benefit-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem accusantium tempore ratione distinctio commodi suscipit ad alias autem, libero et placeat assumenda aspernatur ea quos iure doloremque. Et, aspernatur?!</p>
          </div>

          <div className='benefit-item'>
          <div className="icon-wrapper">
              <img src={sm} className='icon' />
            </div>
            <h2 className='benefit-title'>SAVE THOUSANDS OF DOLLARS</h2>
            <p className='benefit-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem accusantium tempore ratione distinctio commodi suscipit ad alias autem, libero et placeat assumenda aspernatur ea quos iure doloremque. Et, aspernatur?!</p>
          </div>

          <div className='benefit-item'>
          <div className="icon-wrapper">
              <img src={grow} className='icon' />
            </div>
            <h2 className='benefit-title'>GROW AND SUCCEED</h2>
            <p className='benefit-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem accusantium tempore ratione distinctio commodi suscipit ad alias autem, libero et placeat assumenda aspernatur ea quos iure doloremque. Et, aspernatur?!</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Benefit;