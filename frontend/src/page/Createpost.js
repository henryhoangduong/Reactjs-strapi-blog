import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './Createpost.css'

function Createpost() {
  const [reviews, setreiviews] = useState({'title':'','rating':0,'content':''})

  function handleChange(event) {
    setreiviews((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    console.log(reviews)
  }

  function handleSubmit(event) {
    event.preventDefault()
      console.log(reviews)
  }
    
  return (
    <div className='createpost'>
      <form>
        <div className='title-rating-wrapper'>
          <div className='title'>
            <label>title</label>
            <input onChange={handleChange} name='title'></input>
          </div>
          <div className='rating'>
            <label>rating</label>
            <input onChange={handleChange} type='number' name='rating'></input>
          </div>
        </div>
        <div className='content'>
          <label>content</label>
          <textarea onChange={handleChange}></textarea>
        </div>
        <button  onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Createpost
