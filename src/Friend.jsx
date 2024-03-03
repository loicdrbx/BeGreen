import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
// import profilepic from './assets/profilepic.jpeg'


function Friend({username, profilepic}) {
    // let directory = './assets/' + username + 'pfp' + '.jpeg';
    // const profilePic = React.useMemo(() => import(`${directory}`), [directory]);    // import profilepic from directory; 
  return (
    <>
        <div className='flex flex-row justify-start items-center ml-5 my-5'>
            <img src={profilepic} alt='profile picture' className='rounded-full h-12 w-12' />
            <div className='text-lg pl-2'>
                <p className='font-medium'>{username}</p>
            </div>
        </div>
    </>
  )
}

export default Friend