import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getAniApi, resetAniApi} from '../Services/GetAniApi.service'
import { makeStyles } from '@mui/styles'
import { ImageList, ImageListItem, ImageListItemBar, LinearProgress, Pagination  } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        fontFamily: 'Fredoka One'
    },
    quotes: {
        fontFamily: 'Sansita Swashed',
    },
    imgList: {
        borderRadius: '12px',
        cursor: 'pointer'
    },
    pagination: {
        paddingLeft: '35%',
    }
})

function AnimePage(props) {
    const [animeDetails, setAnimeDetails] = useState([])
    const [value, setValue] = useState(1)
    const [searchParam, setSearchParam] = useSearchParams()

    const classes = useStyles()
    const { animeList, animeListPending, animeListSuccess } = useSelector(state => { 
        return { 
            animeList: state.GetAniApiReducer.GetAniApiData,
            animeListPending: state.GetAniApiReducer.GetAniApiPending,
            animeListSuccess: state.GetAniApiReducer.GetAniApiSuccess,
        }
    })
    const dispatch = useDispatch()
    const history = useNavigate()

    const handleChange = (_, value) => {
        // history(`/anime?pg=${value}`)
        setSearchParam({pg: value})
        resetAniApi(dispatch)
        setValue(value)
        setAnimeDetails([])
        getAniApi(dispatch, {page: value})
    }

    const handleClick = (id) => {
        history(`/anime/${id}`)
    }

    useEffect(() => {
        if(searchParam.get('pg') && !animeListPending && animeList?.length < 1)
        {
            getAniApi(dispatch, {page: searchParam?.get('pg')})
            setSearchParam({pg: searchParam?.get('pg')})
            setValue(parseInt(searchParam?.get('pg')))
        }
        else if(!searchParam.get('pg'))
        {
            getAniApi(dispatch, {page: 1})
            setSearchParam({pg: 1})
            setValue(1)
        }// eslint-disable-next-line
    },[])

    useEffect(() => {
        if(!animeListPending && searchParam.get('pg'))
        {
            getAniApi(dispatch, {page: searchParam?.get('pg')})
            setSearchParam({pg: searchParam?.get('pg')})
            setValue(parseInt(searchParam?.get('pg')))
        }
        else if(!searchParam.get('pg'))
        {
            getAniApi(dispatch, {page: 1})
            setSearchParam({pg: 1})
            setValue(1)
        }// eslint-disable-next-line
    },[searchParam.get('pg')])
    
    useEffect(() => {
        if(animeList){
            setAnimeDetails(animeList)
        }
    }, [animeList])

    return (
        <div>
            {animeListPending && !animeListSuccess
                ? <LinearProgress style={{width: '50%', marginLeft: '25%', marginTop: '20%'}}/>
                :<> 
                    <ImageList sx={{width: 'auto', height: 'auto'}} cols={5} gap={18}>
                        {animeDetails?.documents?.map((item, key) => {
                            return(
                                <ImageListItem key={key} onClick={() => {handleClick(item.id)}}>
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
                    <div className={classes.pagination} >
                        <Pagination count={144} variant='outlined' size="large" page={value} color='secondary' onChange={handleChange}/>
                    </div>
                </>
            }
        </div>
    )
}

export default AnimePage
