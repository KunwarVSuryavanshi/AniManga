import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import logo from '../Assets/logo.PNG'
import { useAuth0 } from '@auth0/auth0-react'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Permanent Marker',
        fontSize: '24px',
        margin: '0vh 0vw 0vh 5vw'
    },
    linkDiv: {
        float: 'right',
        width: '10vw',
        //paddingLeft: '12.5vw'
    },
    outerDiv: {
        paddingLeft: '30vw',
        float: 'right'
    }
}) 
function NavBar() {
    const classes = useStyles();
    const { logout } = useAuth0()
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" color="white" component="div" sx={{ mr: 2 }} style={{width: '100%'}}>
                        <img src={logo} style={{maxHeight: '39px'}} alt="animanga_logo"/>
                        <div className={classes.outerDiv}>
                            <div className={classes.linkDiv}>
                                <span className={classes.link} onClick={logout} style={{cursor: 'pointer'}}>
                                    Logout
                                </span>
                            </div>
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/manga'>Manga</Link>
                            </div>
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/anime'>Anime</Link>
                            </div>          
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/home'>Home</Link>                        
                            </div> 
                        </div>             
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
