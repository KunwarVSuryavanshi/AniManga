import './App.css';
import NavBar from './Components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import { Button, LinearProgress } from '@mui/material';
import { makeStyles, StylesProvider } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
//import { StylesProvider } from '@mui/core'

const useStyles = makeStyles({
  heading: {
      textAlign: 'center',
      fontFamily: 'Fredoka One',
      paddingTop: '24vh'
  }
})

function App() {
  const classes = useStyles()

  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading
  } = useAuth0()

  const navigate = useNavigate()

  const someFunc = () => {
    navigate('/home');
  }
  useEffect(() => {
    console.log("Auth", isAuthenticated)
    console.log("Loading", isLoading)
    if(isAuthenticated && !isLoading)
    {
      navigate('/home')
    }
  }, [isAuthenticated, isLoading])
  return (
    <div>
    {(!isAuthenticated) &&
      <>
        {isLoading ?
        <div style={{paddingTop: '50%', paddingLeft: '50%'}}>
          <h1 className='headingFont'>Almost there ... </h1>
          <LinearProgress style={{width: '50%', marginLeft: '25%'}}/>
        </div> 
        :
          <div className={classes.heading}>
            <h1>Ayye yo fam !<br/>You gotta login man.</h1>
            <Button variant="contained" onClick={() => loginWithRedirect()}>Login</Button>
          </div>
        }
      </>
    }
    {(isAuthenticated && !isLoading) && 
          <NavBar/>
    }
    </div>
  );
}

export default App;
