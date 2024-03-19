
import React from 'react'
import './Step.css'
import { Button } from '@mui/material'
import StepCard from './StepCard'
import { faEarth, faStopwatch, faTrophy, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Step() {
  const cardsData = [
      {
        title: 'Card 1 Title',
        description: 'Card 1 Description',
        image: 'https://media.stonly.com/media/images/3a2d8041-9bfb-46a0-b125-8f7bfe2a7ee5.png?s=77fd6bc2f0fc44c911ea18e4cc9163cf033e55951c01607aa97c4c807ebb21f66bf59a663c8c6957c803095896716be4c6ce38097a3189cab2c71b240481c4957bd6b66de51424b308278d0ce661cbd0ad4dc24c6e5d32195171053f0ce86344a01c82baf901b57a8e4c2b8d914c3b1d&w=1280&h=1440&auto=format',
        alt: 'Alt text 1',
      },
      {
        title: 'Card 2 Title',
        description: 'Card 2 Description',
        image: 'https://media.stonly.com/media/images/3a2d8041-9bfb-46a0-b125-8f7bfe2a7ee5.png?s=77fd6bc2f0fc44c911ea18e4cc9163cf033e55951c01607aa97c4c807ebb21f66bf59a663c8c6957c803095896716be4c6ce38097a3189cab2c71b240481c4957bd6b66de51424b308278d0ce661cbd0ad4dc24c6e5d32195171053f0ce86344a01c82baf901b57a8e4c2b8d914c3b1d&w=1280&h=1440&auto=format',
        alt: 'Alt text 2',
      },
      {
        title: 'Card 3 Title',
        description: 'Card 3 Description',
        image: 'https://media.stonly.com/media/images/3a2d8041-9bfb-46a0-b125-8f7bfe2a7ee5.png?s=77fd6bc2f0fc44c911ea18e4cc9163cf033e55951c01607aa97c4c807ebb21f66bf59a663c8c6957c803095896716be4c6ce38097a3189cab2c71b240481c4957bd6b66de51424b308278d0ce661cbd0ad4dc24c6e5d32195171053f0ce86344a01c82baf901b57a8e4c2b8d914c3b1d&w=1280&h=1440&auto=format',
        alt: 'Alt text 3',
      },
    ];
return (
  <div className='div-step'>
      <div>
          <h3>
              Step-by-Step Simplification of Your Work Process
          </h3>
          <div className='div-step2'>
              <Button>STEP 1</Button>
              <Button>STEP 2</Button>
              <Button>STEP 3</Button>
              <Button>STEP 4</Button>
          </div>

      </div>
     
      
    
  </div>
)
}


export default Step