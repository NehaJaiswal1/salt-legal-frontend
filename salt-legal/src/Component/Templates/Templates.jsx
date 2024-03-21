

import React from 'react';
import Navbar from './Navbar/Navbar1';
import Category from '../Templates/Category/Category1';
import TemplateSample from './TemplateSample/TemplateSample';

function Templates() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        
        <div>
          <Category/>
        </div>
        <div>
          <TemplateSample/>
        </div>

    </div>
  )
}

export default Templates