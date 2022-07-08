import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Clock from "../extra/Clock";

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding : "0.8rem 2rem",
        borderBottom : "1px solid #e0e0e0",
        // boxShadow : "1px 0px 5px -1px rgba(0,0,0,0.2)"
        // backgroundColor : "grey",
    },
    navRight: {
        display: 'flex',
        width: '360px',
        justifyContent: 'space-between',
        // backgroundColor: '#fff323',
    },
    LoginBtn: {
        backgroundColor : "#007FFF",
        padding : '0',
        margin : "3px 0"
    },
    logo : {
        fontSize : '1.5rem',
        fontWeight : 'bold',
        color : 'grey',
        // backgroundColor : '#007FFF',
        margin : '0 0 0 0.5rem',
        paddingTop : "7px"

    },
    clock : {
        paddingTop : "10px",
        // backgroundColor : "blue",

    }
})

const Navbar : React.FC = () => {
    const classes : any = useStyles();


  return (
    <nav className={classes.nav}>
        <div className={classes.logo}>meet up!</div>
        <div className={classes.navRight}>
        <div className={classes.clock}><Clock/></div>
        <IconButton aria-label="information"><InfoIcon/></IconButton>
        <IconButton aria-label="dark mode"><DarkModeIcon/></IconButton>
        <Button disableRipple className={classes.LoginBtn} variant="contained">Login</Button>
        </div>
    </nav>
  )
}

export default Navbar