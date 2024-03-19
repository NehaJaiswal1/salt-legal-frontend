

import { faEarth, faStopwatch, faTrophy, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react";
import "./Benefit.css";

function Benefit() {
  return (
    <div>
      <div className='p-4 shadow-slate-400 '>
            <p className=' text-2xl text-slate-800 font-bold text-center mt-20'> With The Salt Legal Templates, You Will get the following benefit :</p>
          
            <div className='flex flex-wrap justify-center mt-10'>
              <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-900'>
                <div className="  flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faStopwatch} size='2x' className='text-white rounded-full bg-green-900 p-4' />
                </div>
                <h2 className='text-lg font-bold text-slate-900 text-center p-2'>SAVE PRECIOUS TIME</h2>
                <p className='font-semibold text-slate-600'>with ready to print templates at your fingertips. Edit, fill-in the blanks & done!</p>
              </div>
    
              <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-800'>
                <div className=" flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEarth} size='2x' className='text-white rounded-full bg-green-900 p-4' />
                </div>
                <h2 className='text-lg font-bold text-slate-900 text-center p-2'>SAVE THOUSANDS OF DOLLARS</h2>
                <p className='font-semibold text-slate-600'>on legal fees by using reliable do-it-yourself legal forms and templates!</p>
              </div>
              <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-800'>
                <div className=" flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faTrophy} size='2x' className='text-white rounded-full bg-green-900 p-4' />
                </div>
                <h2 className='text-lg font-bold text-slate-900 text-center p-2'>GROW AND SUCCEED</h2>
                <p className='font-semibold text-slate-600'>with professional document templates for any business situation!
                </p>
              </div>
              
            </div>
          </div>
    </div>
  );
}

export default Benefit;
