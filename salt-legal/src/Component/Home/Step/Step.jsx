
import React from 'react'
import './Step.css'
import { Button } from '@mui/material'
import StepCard from './StepCard'
import { faEarth, faGlobe, faSortNumericAsc, faStopwatch, faTrophy, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s1 from '../../../assets/template/template.png';
import s2 from '../../../assets/template/r2.png';
import s3 from '../../../assets/template/r3.png';

function Step() {
 
return (
  <div className='div-step'>
      <div>
          <h2>
              Step-by-Step <span>Simplification of Your </span>Work Process 
          </h2>
          <div className='step-items'>
          <div className='step-item'>
            
            <img src={s1}/>
            <p>Step 1 :  <span>Register</span></p>
          </div>

          <div className='step-item'>
           
            <img src={s1}/>
            <p>Step 2 : <span>Pay</span></p>
          </div>

          <div className='step-item'>
            <img src={s1}/>
            <p>Step 3 : <span>Download</span></p>
          </div>
         
        </div>

      </div>
     
      
    
  </div>
)
}


export default Step