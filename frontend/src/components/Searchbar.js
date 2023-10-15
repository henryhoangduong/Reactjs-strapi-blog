import React from 'react'
import './Searchbar.css'


function Searchbar({handlechange,handleEnter}) {
  
  return (
    <div className='Searchbar'>
      <input type='text' onChange={handlechange} onKeyDown={handleEnter}  ></input>
    </div>
  )
}

export default Searchbar
