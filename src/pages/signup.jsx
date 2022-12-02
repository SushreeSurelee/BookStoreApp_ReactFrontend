import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { register } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const fnameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
const useremailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userpasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

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
    main: {
        width: '90%',
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainbuttons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        position: "relative",
        bottom: '10px',
    },
    loginbuttons: {
        fontSize: "25px !important",
        fontWeight: 'bold',
        color: 'gray !important',
        width: '40%',
        position: 'relative',
        left: '14px',
    },
    signupbuttons: {
        fontSize: "25px !important",
        fontWeight: 'bold !important ',
        color: 'black !important',
        width: '40%',
        position: 'relative',
        right: '24px',
    },
    forms: {
        width: '75%',
        height: '90%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    nametexts: {
        width: '100%',
    },
    emailtexts: {
        width: '100%',
    },
    passwordtexts: {
        width: '100%',
    },
    numbertexts: {
        width: '100%',
    },
    texttitles: {
        textAlign: 'left !important',
        fontSize: '10px',
    },
    signuptexts: {
        width: '100%',
        position: 'relative',
        top: '5px',
        backgroundColor: '#A03037 !important',
    }

})

function SignUp(props) {

    const classes = useStyles()
    const navigate = useNavigate()

    const [signupObj, setSignUpObj] = useState({ fullName: "", emailId: "", password: "", mobileNumber: ""})
    const [regexObj, setRegexObj] = useState({ fullnameBorder: false, fullnameHelper: "", usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: "", phoneBorder: false, phoneHelper: "" })
    
    const openLoginpage = () => {
        navigate('/')
    }

    const takeFullname = (event) => {
        setSignUpObj((prevState) => ({
            ...prevState,fullName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUsername = (event) => {
        setSignUpObj((prevState) => ({
            ...prevState,emailId: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({
            ...prevState,password: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeMobilenumber = (event) => {
        setSignUpObj((prevState) => ({
            ...prevState,mobileNumber: event.target.value
        }))
        console.log(event.target.value)
    }
     
    const submit=()=>{
        console.log(signupObj,"submit")
        let fullnameTest = fnameRegex.test(signupObj.fullName)
        let usernameTest = useremailRegex.test(signupObj.emailId)
        let passwordTest = userpasswordRegex.test(signupObj.password)
        let mobilenoTest = phoneRegex.test(signupObj.mobileNumber)

        if (fullnameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                fullnameBorder: true,
                fullnameHelper: "Enter valid name"
            }))
        }
        else if (fullnameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                fullnameBorder: false,
                fullnameHelper: ""
            }))
        }

        if (usernameTest === false) {
            setRegexObj((previousState) => ({
                ...previousState,
                usernameBorder: true,
                usernameHelper: "Enter valid email"
            }))
        }
        else if (usernameTest === true) {
            setRegexObj((previousState) => ({
                ...previousState,
                usernameBorder: false,
                usernameHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObj((previousState) => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj((previousState) => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (mobilenoTest === false) {
            setRegexObj((previousState) => ({
                ...previousState,
                phoneBorder: true,
                phoneHelper: "Enter valid number"
            }))
        }
        else if (mobilenoTest === true) {
            setRegexObj((previousState) => ({
                ...previousState,
                phoneBorder: false,
                phoneHelper: ""
            }))
        }
        console.log(signupObj)

        if (fullnameTest === true && usernameTest === true && passwordTest === true && mobilenoTest === true){
            register(signupObj)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            console.log("created")
        }
    }


    return (
        <Box sx={{display:'flex',flexDirection:'row'}}>
            <img className={classes.image} src="../download.png" alt="image"></img>
            <Paper elevation={3} className={classes.maincontainer}>
                <Box className={classes.main}>
                    <Box className={classes.mainbuttons}>
                        <Button className={classes.loginbuttons} onClick={openLoginpage}>LOGIN</Button>
                        <Button className={classes.signupbuttons}>SIGNUP</Button>
                    </Box>
                    <Box className={classes.forms}>
                        <Box className={classes.texttitles}><span>Full Name</span>
                            <TextField className={classes.nametexts} onChange={takeFullname} error={regexObj.fullnameBorder} helperText={regexObj.fullnameHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Email Id</span>
                            <TextField className={classes.emailtexts} onChange={takeUsername} error={regexObj.usernameBorder} helperText={regexObj.usernameHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Password</span>
                            <TextField className={classes.passwordtexts} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Mobile Number</span>
                            <TextField className={classes.numbertexts} onChange={takeMobilenumber} error={regexObj.phoneBorder} helperText={regexObj.phoneHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}>
                            <Button className={classes.signuptexts} onClick={submit} variant="contained" >Signup</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default SignUp