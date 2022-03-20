import './App.css';
import NavBar from './Components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import { Button, LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
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
  const url = useParams()
  const location = useLocation()

  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading
  } = useAuth0()

  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuthenticated && !isLoading)
    {
      navigate('/home')
    }
  }, [isAuthenticated, isLoading])

  return (
    <div>
    {(!isAuthenticated) &&
      <>
        {isLoading ?
          <div style={{ paddingTop: '10%'}}>
            <h1 className='headingFont' style={{ justifyContent: 'center', display: 'flex' }}>Almost there ... </h1>
            <div style={{display: 'flex', justifyContent: 'center',}}>
              <LinearProgress style={{ width: '50%', }} />
            </div>
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
