import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import logo from '../Assets/logo.PNG'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Permanent Marker',
        fontSize: '24px'
    },
    linkDiv: {
        float: 'right',
        width: '10vw',
        //paddingLeft: '12.5vw'
    },
    outerDiv: {
        paddingLeft: '45vw',
        float: 'right'
    }
}) 
function NavBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" color="white" component="div" sx={{ mr: 2 }} style={{width: '100%'}}>
                        <img src={logo} style={{maxHeight: '39px'}} alt="animanga_logo"/>
                        <div className={classes.outerDiv}>
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/manga'>Manga</Link>
                            </div>
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/anime'>Anime</Link>
                            </div>          
                            <div className={classes.linkDiv}>
                                <Link className={classes.link} exact to='/'>Home</Link>                        
                            </div> 
                        </div>             
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
