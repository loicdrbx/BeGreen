import { useState } from 'react'
import './App.css'
import './index.css'
import uottahack6 from './assets/uottahack6.png'
import jamesyapper from './assets/jamesyapper.jpeg'
import exkellybur from './assets/exkellybur.jpeg'



function Podium({}) {
  return (
    <>
        <div className='flex flex-row justify-start items-center ml-5 my-5 justify-evenly'>
            <img src={jamesyapper} alt='profile picture' className='rounded-full h-20 w-20' />
            <img src={uottahack6} alt='profile picture' className='rounded-full h-40 w-40' />
            <img src={exkellybur} alt='profile picture' className='rounded-full h-16 w-16' />

        </div>

    </>
  )
}

export default Podium