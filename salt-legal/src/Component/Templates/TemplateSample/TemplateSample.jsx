

import React from 'react'
import {templateSample} from '../../../Data/templateSample'
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import './TemplateSample.css'

function TemplateSample() {
  return (
   
   
   <div>
       <h2 className='template-container-h2'>View Our Most Popular <span>Business Templates.</span></h2>
          <div className="template-container">
            
        {templateSample.map((item, index) => (
          <Card key={index} className="template-card-style-1">
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia>
                  <img src={item.img} style={{ width: '100%' }}  />
                </CardMedia>
                <p>
                  {item.name}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='template-button-div'>
      <Button className='register-button'>Get STARTED</Button>
      </div>
      
    </div>
  )
}

export default TemplateSample