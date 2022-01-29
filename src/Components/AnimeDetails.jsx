import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getAnimeDetails from '../Services/GetAnimeDetails.service'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import Chip from '@mui/material/Chip';
import '../App.css'
import getEpisode from '../Services/GetEpisode.service';
import { useRef } from 'react';
import Hls from 'hls.js';
import { Modal, Box } from '@mui/material';

const useStyles = makeStyles({
  heading: {
      fontFamily: 'Fredoka One'
  },
  quotes: {
      fontFamily: 'Sansita Swashed',
  }
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
};

function AnimeDetails() {
  const {id} = useParams()
  const [animeDetails, setAnimeDetails] = useState()
  const [desc, setDesc] = useState(false)
  const [playbackDetails, setPlaybackDetails] = useState()
  const [open, setOpen] = useState(false)
  const videoPlayer = useRef()

  const classes = useStyles()

  const handleDescription = () => {
    setDesc(!desc)
  }
  
  const handleEpisodeFetch = (id, anime) => {
    getEpisode(id, anime)
    .then(res => { 
      if(res.status_code !== 404)
        setPlaybackDetails(res.data.documents[id-1])
    })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const displayEpisodes = (range) => {
    const epArr = new Array(range).fill(1)

    return epArr.map((_, key) => {
      return (
        <>
         <div style={{display: 'inline-block', padding: '0.7vh 0.4vh'}}><Chip label={key+1} color="primary" variant="outlined" onClick={() => handleEpisodeFetch(key, animeDetails.id)}/></div> 
        </>
      )
    })
  }

  useEffect(() => { 
    getAnimeDetails({id: id})
    .then(res => setAnimeDetails(res))
  },[])

  useEffect(() => {
    if(playbackDetails)
    {
      if(Hls.isSupported())
      {

        const hls = new Hls()
        const url = playbackDetails.video
        
        hls.loadSource(url)
        hls.attachMedia(videoPlayer.current)
        hls.on(Hls.Events.MANIFEST_PARSED, function() { videoPlayer.current.play(); });
      }
      else{
        alert("Please use modern web browser to play video")
      }

    }
  },[playbackDetails])

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
                <div className = {`${classes.heading} pdT2`}>
                  Description: 
                  <div onClick={handleDescription} className = {classes.quotes} style={{cursor: 'pointer'}}>
                    {animeDetails?.descriptions?.en?.length > 0 ? !desc ?  animeDetails?.descriptions?.en?.substring(0,430)+ '...' : animeDetails?.descriptions?.en : 'NA' }
                  </div>
                </div>
                <div className={`${classes.heading} pdT2`}>
                  Genre:
                  <div style={{alignItems: 'center'}}>
                    {animeDetails?.genres.map(item => <div style={{display: 'inline-block', padding: '0.7vh 0.4vh', alignItems: 'center'}}><Chip label={item} color="success" /></div> )}
                  </div>
                </div>
                <div className={classes.heading}>
                  Episodes:
                  <div className='pdT2'>
                    {displayEpisodes(parseInt(animeDetails?.episodes_count))}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4}>

            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-video"
            >
              <Box id="keep-mounted-modal-video" sx={style}>
                <video
                  id="keep-mounted-modal-video"
                  ref={videoPlayer}
                  autoPlay={true}
                  controls={true}
                />
              </Box>
            </Modal>
          </Grid>
          <Grid item xs={8}>
            
          </Grid>
        </Grid>
      </div>
      : 
      <div style={{alignItems:'center'}}>
        <h1>Hmmmm.... This shouldn't have happened :/</h1>
        <h3>PLease report about this in our channel</h3>
      </div>
      }  
    </>
  )
}

export default AnimeDetails
