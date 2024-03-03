import { useState } from 'react'
import './App.css'
import friendsIcon from './assets/friendsIcon.png'
import leaderIcon from './assets/leaderIcon.png'
import './index.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
        <nav className="fixed w-full z-10 top-0 flex flex-row justify-between items-center p-3 bg-gradient-to-b from-lime-800">
          <Link to='/friends'>
              <button>
                  <img src={friendsIcon} alt='friends' className='h-8 w-8'/>
              </button>
          </Link>

            <h1 className='font-black text-xl'>BeGreen</h1>

            <Link to='/leaderboard'>
              <button>
                <img src={leaderIcon} alt='leaderboard' className='h-8 w-8'/>
              </button>
            </Link>

        </nav>
    </>
  )
}

export default Navbar