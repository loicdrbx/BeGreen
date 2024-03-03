import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import profilepic from './assets/profilepic.jpeg'
import leaf from './assets/leaf-dot.png'
import UserHeader from './UserHeader.jsx'
import Picture from './Picture.jsx'



function Post() {
  return (
    <>
      <div class='flex flex-col justify-around mb-8'>
        {/* Profile picture and name */}
        <UserHeader />

        {/* Picture needs to take up 5/6 of the WHOLE screen height */}
        {/* Picture */}
        <Picture />

        {/* Green points */}
        <div className='flex flex-row justify-start ml-6'>
          <p>#</p> {/* NUMBER OF LIKES GOES HERE*/}
          <img src={leaf} alt='BeGreen leaf <3' className='h-5 w-5'/>
          <p>Green points</p>
        </div>

      </div>
    </>
  )
}

export default Post