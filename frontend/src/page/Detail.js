import React from 'react'
import { useParams } from 'react-router-dom'
import useEffect from '../hook/usefetch'
import useFetch from '../hook/usefetch'

function Detail() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/'+id)
    if (loading) return <p>loading</p>
    if(error) return <p>error</p>
  return (
    <div>
          <h1>{data['data'].attributes.title}</h1>
          <p>{data['data'].attributes.content}</p>
    </div>
  )
}

export default Detail
