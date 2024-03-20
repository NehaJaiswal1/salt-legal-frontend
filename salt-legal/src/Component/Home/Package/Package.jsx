

import React from 'react';
import './Package.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function Package() {
  return (
    <div className='pakage-container'>
       <h2>Choose a <span>Right plan</span> for you</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quos nemo totam unde quaerat odit facere.</p>
   
    <div className="package">
      
      <div className="package-card">
        <h2>1 User</h2>
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>20 GB cloud storage Templates</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>20 GB cloud storage Templates</p>
        </div>
        <div style={{display:'flex', flexDirection:'row', textAlign:'center'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>20 GB cloud storage Templates</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>20 GB cloud storage Templates</p>
        </div>
        <h3>US $10 / month</h3>
        <button>SELECT</button>
      </div>
      <div className=" package-card-2">
        <h2>5 Users</h2>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'white', marginTop:'5px'}}/><p>Ideal for small teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'white', marginTop:'5px'}}/><p>Ideal for small teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row', textAlign:'center'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'white', marginTop:'5px'}}/><p>Ideal for small teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'white', marginTop:'5px'}}/><p>Ideal for small teams </p>
        </div>
       
        <h3>US $24.99/ month</h3>
        <button>SELECT</button>
      </div>
      <div className="package-card">
        <h2>Unlimited</h2>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>Ideal for larger teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>Ideal for larger teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row', textAlign:'center'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>Ideal for larger teams </p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginRight:'15px', color:'black', marginTop:'5px'}}/><p>Ideal for larger teams </p>
        
        </div>
        <h3>US $30 / month</h3>
        <button>FULL ACCESS</button>
      </div>
    </div>
    </div>
  );
}

export default Package;