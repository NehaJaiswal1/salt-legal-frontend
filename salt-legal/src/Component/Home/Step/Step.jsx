
import React from 'react'
import './Step.css'
import { Button } from '@mui/material'
import StepCard from './StepCard'
import { faEarth, faGlobe, faSortNumericAsc, faStopwatch, faTrophy, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s1 from '../../../assets/template/r4.png';
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
            <p>Step <span>1</span></p>
          </div>

          <div className='step-item'>
           
            <img src={s2}/>
            <p>Step <span>2</span></p>
          </div>

          <div className='step-item'>
            <img src={s3}/>
            <p>Step <span>3</span></p>
          </div>
         
        </div>

      </div>
     
      
    
  </div>
)
}


export default Step