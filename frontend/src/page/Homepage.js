import React, { useState, useEffect } from 'react';
import useFetch from '../hook/usefetch';
import BlogItem from '../components/BlogItem';
import Searchbar from '../components/Searchbar';
import './Homepage.css'
import { Link } from 'react-router-dom';

function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews');
  const [content, setcontent] = useState('');
  const [search, setsearch] = useState(false)
  const [contentsearch, setcontentsearch] = useState(null)
  

  if (loading) return <p>loading</p>;
  
  if (error) return <p>error</p>;

  function handlechange(event) {
    setcontent(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      // Filter the data and update dataProcess
      const filteredData = data.data.filter((review) => review.attributes.title.includes(content));
      setcontentsearch(filteredData)
      setsearch(true)
    }
  }
  
  return (
    <div className='Homepage'>
      <div className='header'>
        <Searchbar handlechange={handlechange} handleEnter={handleEnter}></Searchbar>
        <Link to='/createpost'>Create post</Link>
      </div>
      
      {search ? <BlogItem id={contentsearch[0].id} title={contentsearch[0].attributes.title}></BlogItem>:data.data.map((review) => (
        <BlogItem id={review.id} title={review.attributes.title}></BlogItem>
      ))}
      
      
    </div>
  );
}

export default Homepage;

