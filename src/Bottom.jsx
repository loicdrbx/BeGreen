import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import shutterbutton from './assets/shutterbutton.png'

import './index.css'


function Bottom() {
  return (
    <>
        <div className='flex flex-row justify-center'>
            <button>
                <img src={shutterbutton} alt='shutter button' className='fixed z-10 bottom-0 h-28 w-28'/>
            </button>
        </div>
    </>
  )
}

export default Bottom