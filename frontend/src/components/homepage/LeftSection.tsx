import React from 'react'
import {makeStyles} from "@mui/styles";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
    container: {
        // backgroundColor: '#f5f5f5',
        width: '50%',
        padding : "5rem"
    },
    wrapper: {
        "& > div" : {
            fontSize : "2.15rem",
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "3.25rem",
            // paddingBottom: "0.5em",
        }
    },
    supportingText: {
        fontSize: "15px",
        padding : "1rem 0 1rem 0",
        color : "grey",
        "& > span" : {
            color : "#007FFF",
            fontWeight : "bold"
        },
    },
    buttonWrapper : {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems : "center",
        // backgroundColor : "#007FFF",
        padding : "4rem 20px 2rem 0"
    }
})

const LeftSection : React.FC = () => {
    const classes : any = useStyles();
  return (
    <section className={classes.container}>
        <div className={classes.wrapper}>
            <div>Take control of your meetings. </div>
            <div>Share screen & audio hassle free.</div>
            <p className={classes.supportingText}>Click <span>New meeting</span> to start your meeting, get a link to share or paste <br></br> any meeting link given to you and join the meet.</p>
        </div>

    
        <Box className={classes.buttonWrapper}>

        <Button disableRipple style={{paddingTop : "6px", paddingBottom : "8px", marginRight: "25px", marginTop : "20px"}} variant="contained" startIcon={<VideoCallIcon />}>Start new meeting</Button>


        <TextField
          sx={{ width: '25ch', paddingTop : "20px" }} size="small" placeholder="Paste the link to join"
          InputProps={{
            startAdornment: <InputAdornment position="start"><KeyboardIcon/></InputAdornment>
          }}
        />
        </Box>
    </section>

  )
}

export default LeftSection