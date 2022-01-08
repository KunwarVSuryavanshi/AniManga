import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getAnimeDetails from '../Services/GetAnimeDetails.service'

function AnimeDetails() {
  const {id} = useParams()
  const [animeDetails, setAnimeDetails] = useState()

  useEffect(() => { 
    getAnimeDetails({id: id})
    .then(res => setAnimeDetails(res))
  },[])

  console.log(animeDetails)
  return (
    <div>
      <h1>Hello animeDetails</h1>
    </div>
  )
}

export default AnimeDetails
