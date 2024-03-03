import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import friendsIcon from './assets/friendsIcon.png'
import leaderIcon from './assets/leaderIcon.png'
import './index.css'


function Navbar() {
  return (
    <>
      {/* <h1>begreen asf</h1> */}
        <nav className="fixed w-full z-10 top-0 flex flex-row justify-between items-center p-3">
            <button>
                <img src={friendsIcon} alt='friends' className='h-8 w-8'/>
            </button>

            <h1 className='font-black text-xl'>BeGreen</h1>

            <button>
              <img src={leaderIcon} alt='leaderboard' className='h-8 w-8'/>
            </button>

        </nav>
    </>
  )
}

export default Navbar