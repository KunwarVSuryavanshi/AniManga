import './App.css';
import NavBar from './Components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
  heading: {
      textAlign: 'center',
      fontFamily: 'Fredoka One',
      paddingTop: '24vh'
  }
})

function App() {
  const classes = useStyles()
  const [tempFix, setTempFix] = useState(false)
  const {
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated
  } = useAuth0()

  const navigate = useNavigate()
  const someFunc = () => {
    navigate('/home'); setTempFix(true) 
  }
  useEffect(() => {
    console.log(isAuthenticated)
    if(isAuthenticated)
    {
      navigate('/home')
    }
    else{
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <div>
      {/* {(!isAuthenticated || !tempFix) &&
        <div className={classes.heading}>
          <h1>Ayye yo fam !<br/>You gotta login man.</h1>
          <Button variant="contained" onClick={() => { //loginWithRedirect(); 
            someFunc()}}>Login</Button>
        </div>
      }
      {(isAuthenticated || tempFix )&& } */}
      <NavBar/>
    </div>
  );
}

export default App;
