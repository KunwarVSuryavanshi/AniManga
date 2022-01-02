import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import getAniApi from '../Services/GetAniApi.service'
import { makeStyles } from '@mui/styles'
import { ImageList, ImageListItem, ImageListItemBar, LinearProgress, Pagination  } from '@mui/material'
import { useDispatch } from 'react-redux'

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
    },
})

function AnimePage() {
    const [animeDetails, setAnimeDetails] = useState([])
    const [value, setValue] = useState(1)
    const classes = useStyles()
    const { animeList, animeListPending, animeListSuccess } = useSelector(state => { 
        return { 
            animeList: state.GetAniApiReducer.GetAniApiData,
            animeListPending: state.GetAniApiReducer.GetAniApiPending,
            animeListSuccess: state.GetAniApiReducer.GetAniApiSuccess,
        }
    })
    const dispatch = useDispatch()

    const handleChange = (_, value) => {
        setValue(value)
        setAnimeDetails([])
        getAniApi(dispatch, {page: value})
    }

    useEffect(() => {
        getAniApi(dispatch, {page: 1})
    },[])

    useEffect(() => {
        if(animeList){
            setAnimeDetails(animeList)
        }
    }, [animeList])

    return (
        <div>
            {animeDetails?.length < 1 && animeListPending
                ? <LinearProgress style={{width: '50%', marginLeft: '25%'}}/>
                :<> 
                    <ImageList sx={{width: 'auto', height: 'auto'}} cols={5} gap={18}>
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
                    <div className={classes.pagination} style={{width: '100%'}}>
                        <Pagination count={144} variant='outlined' page={value} color='secondary' onChange={handleChange}/>
                    </div>
                </>
            }
        </div>
    )
}

export default AnimePage