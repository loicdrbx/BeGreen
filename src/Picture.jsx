import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import frontface from './assets/frontfacetest.jpeg'
import backface from './assets/backfacetest.jpeg'



function Picture() {
  return (
    <>
      {/* BeGreen picture*/}
      <div className='flex flex-col justify-center items-center relative'>
        {/* <div className="w-[300px] h-[300px] bg-red-200 absolute top-10"></div> */}

        <img src={frontface} alt='BeGreen front face picture' className='h-4/12 w-3/12 pt-3 rounded-md absolute top-2 left-6 overflow-hidden'/>
        <img src={backface} alt='BeGreen back face picture' className='h-5/6 w-11/12 pt-3 rounded-md overflow-hidden'/>
      </div>

    </>
  )
}

export default Picture