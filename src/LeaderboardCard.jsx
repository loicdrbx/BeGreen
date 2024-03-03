import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import Friend from './Friend.jsx'


function LeaderboardCard({username, profilepic, points}) {
  return (
    <>
        <div className='flex flex-row justify-start items-center ml-5'>
                <Friend username={username} profilepic={profilepic} />
                <p className='text-gray-500 font-thin ml-1'>: 60 Green points</p>
            </div>
    </>
  )
}

export default LeaderboardCard