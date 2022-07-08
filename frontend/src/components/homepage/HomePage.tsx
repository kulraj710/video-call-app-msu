import React from 'react'
import LeftSection from './LeftSection'
import Navbar from './Navbar'
import RightSection from './RightSection'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    body : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '85vh'
    }
})

const HomePage : React.FC = () => {
    const classes = useStyles()
  return (
    <>
        <Navbar/>
    
        <div className={classes.body}>
            <LeftSection/>
            <RightSection/>
        </div>
    </>
  )
}

export default HomePage