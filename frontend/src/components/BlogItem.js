import React from 'react'
import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem(props) {
  return (
    <div className='BlogItem'>
        <h1>{props.title}</h1>
        <Link to={`/details/${props.id}`}>Readmore</Link>
    </div>
  )
}

export default BlogItem
