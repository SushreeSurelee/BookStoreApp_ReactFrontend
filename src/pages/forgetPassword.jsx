import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { forget } from '../services/userService';
import HeaderMUI from '../components/header';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const useStyles = makeStyles({
    maincontainer: {
      width: '98.8vw',
      height: '64vh',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      position: 'relative',
      top: '-8px',
    },
    forgot:{
        marginTop: '10px',
        left: '577px',
        textAlign: 'left',
        font: 'normal normal medium 25px/33px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1',
        fontSize:'25px',
        fontFamily:'Roboto',
        transform:'Titlecase',
        fontWeight: 'medium',
    },
    main1: {
      width: '27vw',
      height: '45vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #E4E4E4',
      borderRadius:'7px'
    },
    emailtext: {
      width: '100%',
    },
    texttitle: {
      textAlign: 'left',
      fontSize: '10px',
    },
    resetButton: {
      width: '100%',
      backgroundColor: '#A03037 !important',
      top:'30px'
    },
    enteremail: {
        top: '257px',
        left: '559px',
        width: '68%',
        height: '40px',
        textAlign: 'left',
        font: 'normal normal normal 14px/20px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1'
    },
    createABox:{
        marginTop:'40px',
        width: '27vw',
        height: '100px',
        background: '#F9F9F8 0% 0% no-repeat padding-box',
        border: '1px solid #E4E4E4',
        borderRadius: '0px 0px 6px 6px',
        opacity: '1',
    },
    createAccount:{
        left:'108px',
        top:'25px',
        font: 'normal normal medium 18px/24px Roboto',
        letterSpacing: '0px',
        color: '#0A0102 !important',
        fontWeight: 'bold !important',
        textTransform: 'uppercase',
        opacity: '1',
    }
  })


function ForgetPassword(props) {
    const classes = useStyles()
    const navigate = useNavigate()

  const [emailobj, setEmailObj] = useState({email: ''});
  const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: ''})

  const openSignup = () => {
    navigate('/signup')
  }

  const takeEmail = (event) => {
    setEmailObj(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    console.log(event.target.value)
  }

  const submit = () => {
    let emailTest = emailRegex.test(emailobj.email)

    if (emailTest===false){
      setRegexObj(prevState=> ({
        ...prevState,
        emailBorder:'true',
        emailHelper:'Enter valid e-mail or phone number'
      }))
    }
    else if(emailTest===true){
      setRegexObj(prevState=> ({
        ...prevState,
        emailBorder:'false',
        emailHelper:""
      }))
    }

    console.log(emailobj)

    if(emailTest===true){
    forget(emailobj).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  return (

    <div className={classes.maincontainer}>
        <HeaderMUI/>
        <p className={classes.forgot}>Forgot Your Password?</p>
        <Box className={classes.main1}>
            <p className={classes.enteremail}>Enter your email address and we'll send you a link to reset your password.</p>
            <Box >
                <Box className={classes.texttitle}><span>Email Id</span>
                    <TextField className={classes.emailtext}  onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" size="small" />
                </Box>
              <Button className={classes.resetButton} onClick={submit} variant="contained">Reset Password</Button>
            </Box>
            <Box className={classes.createABox} >
                <Button className={classes.createAccount} onClick={openSignup}>Create Account</Button>
            </Box>
        </Box>
    </div>
  )
}

	
export default ForgetPassword;