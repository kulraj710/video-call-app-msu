import React from 'react'
import svg1 from '../../images/undraw2.svg'
import svg2 from '../../images/undraw1.svg'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container : {
        display : 'flex',
        alignItems : 'center', 
        justifyContent : 'center',
        width : '50%',
        // backgroundColor : 'brown'
    },
    svg1 : {
        width : "60%",
        height : "auto",
        // backgroundColor : "blue",
    },
    svg2 : {
        width : "450px",
        height : "auto",
        position : "absolute",
        top : "300px",
        left : "300px",
        opacity : "0.1",
        pointerEvents  : "none",
        // backgroundColor : "blue",
    },


})


const RightSection = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <img className={classes.svg1} src={svg1} alt="homepage hero" />
        <img className={classes.svg2} src={svg2} alt="homepage hero" />
    </div>
  )
}

export default RightSection