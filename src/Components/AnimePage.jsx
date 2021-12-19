import React, { useState, useEffect } from 'react'
import getAniApi from '../Services/GetAniApi.service'
import { makeStyles } from '@mui/styles'
import { ImageList, ImageListItem, ImageListItemBar, LinearProgress  } from '@mui/material'

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        fontFamily: 'Fredoka One'
    },
    quotes: {
        fontFamily: 'Sansita Swashed',
    },
    imgList: {
        borderRadius: '12px'
    }
})

function AnimePage() {
    const [animeDetails, setAnimeDetails] = useState([])
    const classes = useStyles()

    useEffect(() => {
        getAniApi()
        .then(res => setAnimeDetails(res.data))
    },[])

    return (
        <div>
            {animeDetails?.length < 1 
                ? <LinearProgress style={{width: '50%', marginLeft: '25%'}}/>
                : <ImageList sx={{width: 'auto', height: 'auto'}} cols={5} gap={18}>
                {animeDetails?.documents?.map((item, key) => {
                    return(
                        <ImageListItem key={key} >
                            <img
                                src={`${item.cover_image}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.cover_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading='lazy'
                                className={classes.imgList}
                            />
                            <ImageListItemBar
                                title={<span className={classes.heading}>{item.titles.en}</span>}
                                subtitle={<span className={classes.quotes}>Episodes: {item.episodes_count}</span>}
                                //position="below"
                                className={classes.imgList}
                            />
                        </ImageListItem>
                    )
                })}   
            </ImageList>
            }
        </div>
    )
}

export default AnimePage
