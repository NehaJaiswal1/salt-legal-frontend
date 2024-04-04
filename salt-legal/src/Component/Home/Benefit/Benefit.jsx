

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
            <p className='benefit-description'>we save time by providing pre-written responses for customer communication, consistency, accuracy and leading to improved customer relationships and business success. They offer a cost-effective solution for businesses seeking to streamline their communication processes and maintain a professional image.</p>
          </div>

          <div className='benefit-item'>
          <div className="icon-wrapper">
              <img src={sm} className='icon' />
            </div>
            <h2 className='benefit-title'>SAVE THOUSANDS OF DOLLARS</h2>
            <p className='benefit-description'>Time-saving templates for business communication, such as email, SMS, and phone prospecting templates, streamline messaging, ensure consistency, and boost efficiency, enhancing overall communication processes and productivity.</p>
          </div>

          <div className='benefit-item'>
          <div className="icon-wrapper">
              <img src={grow} className='icon' />
            </div>
            <h2 className='benefit-title'>GROW AND SUCCEED</h2>
            <p className='benefit-description'>
            Paid templates help businesses grow and succeed by streamlining communication, ensuring consistency, and saving time, leading to improved customer relationships and business success. By utilizing paid templates for various communication needs, such as email, SMS, and phone prospecting.</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Benefit;