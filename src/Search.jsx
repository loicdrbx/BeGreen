import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import search from './assets/search.png'

import frontface from './assets/frontfacetest.jpeg'
import backface from './assets/backfacetest.jpeg'



function Search() {
  return (
    <>
      <div className='flex flex-row items-center rounded-l bg-lime-900	opacity-20 w-5/6 object-cover py-2'>
        <img src={search} alt='search' className='h-5 w-5 ml-3'/>
        <p className='text-lime-50 ml-3'>Add or search friends</p>
      </div>

    </>
  )
}

export default Search