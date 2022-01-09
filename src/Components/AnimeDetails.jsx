import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getAnimeDetails from '../Services/GetAnimeDetails.service'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import Chip from '@mui/material/Chip';

const useStyles = makeStyles({
  heading: {
      fontFamily: 'Fredoka One'
  },
  quotes: {
      fontFamily: 'Sansita Swashed',
  }
})

function AnimeDetails() {
  const {id} = useParams()
  const [animeDetails, setAnimeDetails] = useState()
  const [desc, setDesc] = useState(false)
  const classes = useStyles()

  const handleDescription = () => {
    setDesc(!desc)
  }
  
  useEffect(() => { 
    getAnimeDetails({id: id})
    .then(res => setAnimeDetails(res))
  },[])

  
  return (
    <>
      {animeDetails ? 
        <div>
        <Grid container>
          <Grid item xs={12}>
            <img
              src={animeDetails?.banner_image}
              alt={'Anime Banner'}
              style={{width: '100%'}}
            />
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <img
                src={animeDetails?.cover_image}
                alt={'Cover Image'}
                style={{width: '100%', paddingLeft: '0.5vw'}}
              />
            </Grid>
            <Grid item xs={10}>
              <div style={{paddingRight: '2vw', paddingLeft: '2vw'}}>
                <div className = {classes.heading}>
                  Description: 
                  <div onClick={handleDescription} className = {classes.quotes} style={{cursor: 'pointer'}}>
                    {animeDetails?.descriptions?.en?.length > 0 ? !desc ?  animeDetails?.descriptions?.en?.substring(0,430)+ '...' : animeDetails?.descriptions?.en : 'NA' }
                  </div>
                </div>
                <div className={classes.heading}>
                  Genre:
                  <div>
                    {animeDetails?.genres.map(item => <div style={{display: 'inline-block', padding: '0.7vh 0.4vh'}}><Chip label={item} color="success" /></div> )}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={8}>
            
          </Grid>
        </Grid>
      </div>
      : 
      <>
        <h1>Hmmmm.... This shouldn't have happened :/</h1>
        <h3>PLease report about this in our channel</h3>
      </>
      }  
    </>
  )
}

export default AnimeDetails
