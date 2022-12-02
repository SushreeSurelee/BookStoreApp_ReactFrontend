import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { login } from '../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyles = makeStyles({
  maincontainer: {
    width: '28vw',
    height: '64vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    top: '84px',
  },
  image:{
    width: '24vw',
    height: '54vh',
    marginLeft:'300px',
    marginTop:'118px',
    borderRadius:'7px',
  },
  main1: {
    width: '90%',
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainbutton: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    position: "relative",
    bottom: '10px',
  },
  loginbutton: {
    fontSize: "25px !important",
    fontWeight: 'bold !important',
    color: 'black !important',
    width: '40%',
    position: 'relative',
    left: '14px',
  },
  signupbutton: {
    fontSize: "25px !important",
    fontWeight: 'bold',
    color: 'gray !important',
    width: '40%',
    position: 'relative',
    right: '24px',
  },
  form: {
    width: '75%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  emailtext: {
    width: '100%',
  },
  passwordtext: {
    width: '100%',
  },
  texttitle: {
    textAlign: 'left',
    fontSize: '10px',
  },
  texttitle1: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    color: 'gray !important',
    fontSize: '8px !important',
    position: "relative",
    left: '85px',
  },

  loginbutton1: {
    width: '100%',
    backgroundColor: '#A03037 !important'
  },
  ortext: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'relative',
    top: '10px',
  },
  fbgoogle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    top: '20px',
  },
  facebook: {
    width: '48%',
  },
  facebookb: {
    fontWeight: '500 !important',
    textTransform: 'capitalize !important',
    width: '100%'
  },
  google: {
    width: '48%',
  },
  googleb: {
    color: 'black !important',
    fontWeight: '500 !important',
    textTransform: 'capitalize !important',
  },

})
function Login(props){
    const classes = useStyles()

  const [loginObj, setLoginObj] = useState({ emailId: '', password: '' })
  const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

  const openSignup = () => {
    props.listenTologin1()
  }

  const takeEmail = (event) => {
    setLoginObj(prevState => ({
      ...prevState,
      emailId: event.target.value
    }))
    console.log(event.target.value)
  }

  const takePassword = (event) => {
    setLoginObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    console.log(event.target.value)
  }

  const submit = () => {
    let emailTest = emailRegex.test(loginObj.emailId)
    let passwordTest = passwordRegex.test(loginObj.password)

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

    if (passwordTest===false){
      setRegexObj(prevState=> ({
        ...prevState,
        passwordBorder:'true',
        passwordHelper:'Enter valid password'
      }))
    }
    else if(passwordTest===true){
      setRegexObj(prevState=> ({
        ...prevState,
        passwordBorder:'false',
        passwordHelper:""
      }))
    }
    console.log(loginObj)
    if(emailTest===true && passwordTest===true){
      login(loginObj).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
      console.log("login Success")
    }
  }
    return(
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <img className={classes.image} src="../download.png" alt="image"></img>
        <Paper elevation={3} className={classes.maincontainer}>
        <Box className={classes.main1}>
          <Box className={classes.mainbutton}>
            <Button className={classes.loginbutton} >LOGIN</Button>
            <Button className={classes.signupbutton} onClick={openSignup}>SIGNUP</Button>
          </Box>
          <Box className={classes.form}>
            <Box className={classes.texttitle}><span>Email Id</span>
              <TextField className={classes.emailtext}  onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" size="small" />
            </Box>
            <Box className={classes.texttitle}><span>Password</span>
              <TextField className={classes.passwordtext} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant="outlined" size="small" />
              <Button className={classes.texttitle1} size="x-small" variant='text'>Forget Password?</Button>
            </Box>
            <Box >
              <Button className={classes.loginbutton1} onClick={submit} variant="contained">Login</Button>
            </Box>
            <Box className={classes.ortext}><Divider sx={{ borderBottomWidth: 3, width: '30%' }} />OR <Divider sx={{ borderBottomWidth: 3, width: '30%' }} /></Box>
            <Box className={classes.fbgoogle}>
              <Box className={classes.facebook}>
                <Button className={classes.facebookb} variant="contained" >Facebook</Button>
              </Box>
              <Box className={classes.google}>
                <Button className={classes.googleb} variant="outlined" disabled sx={{ width: '100%', color: 'black' }}>Google</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
 </Box>
    )
}

export default Login;