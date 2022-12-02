import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Login from './login';
import SignUp from './signup';

const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A8A8',
    }
})

function Switch() {

    const [toggle, setToggle] = useState(false)

    const listenTologin1 = () => {
        setToggle(true)
    }
    const listenTosignup1 = () => {
        setToggle(false)
    }
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <div>
                {
                    toggle ? <SignUp listenTosignup1={listenTosignup1} /> : <Login listenTologin1={listenTologin1} />
                }
            </div>
        </Box>
    )
}

export default Switch