import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
// import Navbar from './Navbar.jsx'
import right from './assets/right-arrow.png'
import Search from './Search.jsx'
import { Link } from "react-router-dom";
import Friend from './Friend.jsx'
import exkellybur from './assets/exkellybur.jpeg'
import loic from './assets/loic.jpeg'
import seek from './assets/seek.jpeg'
import jamesyapper from './assets/jamesyapper.jpeg'
import uottahack6 from './assets/uottahack6.png'



function Friends() {
  return (
    <>
      <div>
        <nav className="fixed w-full z-10 top-0 flex flex-row justify-end p-3 bg-gradient-to-b from-lime-800">
            <h1 className='font-black text-xl mr-28'>BeGreen</h1>
            <Link to='/'>
                <button>
                    <img src={right} alt='right arrow' className='h-8 w-8'/>
                </button>
            </Link>
        </nav>

        <div className='mt-20 text-lg font-bold ml-5'>
            <Search />
            <p className='text-green-100 mt-3'>YOUR FRIENDS</p>
        </div>

        <div>
            <Friend username='uottahack6' profilepic={uottahack6}/>
            <Friend username='jamesyapper'profilepic={jamesyapper}/>
            <Friend username='exkellybur' profilepic={exkellybur}/>
            <Friend username='loic' profilepic={loic}/>
            <Friend username='seek'profilepic={seek}/>
        </div>


        
      </div>

    </>
  )
}

export default Friends