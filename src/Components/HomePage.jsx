import { Typography, LinearProgress  } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState, useEffect } from 'react'
import getQuotes from '../Services/GetQuotes.service'
import AnimeFacts from './AnimeFacts'
import RoughSheet from './RoughSheet'
const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        fontFamily: 'Fredoka One'
    },
    quotes: {
        fontFamily: 'Sansita Swashed',
        width: '50%',
        textAlign: 'center',
        paddingLeft: '25%'
    }
})
function HomePage() {
    const [quotes, setQuotes] = useState()
    const classes = useStyles()

    const fetcher = () => {
        getQuotes()
        .then((data) => setQuotes(data))
    } 

    useEffect(() => {
        fetcher()
    },[])

    useEffect(() => {
        if(quotes?.quote?.length >= 200)
        {
            fetcher()
        }
    },[quotes])

    return (
        <div>
            <Typography variant='h5' mt={3}>
                <h1 className={classes.heading}>Konichiwa Senpai !!</h1>
            </Typography>
            {quotes?.quote && quotes?.quote.length <= 200 ? 
            <div>
                <Typography variant='h6' mt={2}>
                    <div className={classes.quotes}>
                        {`${quotes?.quote} - ${quotes?.character}, ${quotes?.anime}`}       
                    </div> 
                </Typography>   
            </div> 
                :
                <>
                    <h3 className={classes.quotes}>Wait lemme fetch some cool quotes for you...</h3>
                    <h5 className={classes.quotes}>Meanwhile you can explore other things ;)</h5>
                    <LinearProgress style={{width: '50%', marginLeft: '25%'}}/>
                </>
            }
            <div>
                <AnimeFacts/>
            </div>
            <div>
                <RoughSheet/>
            </div>
        </div>
    )
}

export default HomePage
