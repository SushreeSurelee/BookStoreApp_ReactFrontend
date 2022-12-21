import { makeStyles } from '@mui/styles'
import React from 'react'
import { Box, Button, Card, Paper } from '@mui/material'
import PageHeader from '../pageHeader'
import { useNavigate } from 'react-router-dom'



const useStyle = makeStyles({
    containeros: {
        width: '100vw',
        height: '80vh',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maincontainer: {
        width: '60%',
        height: '98%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '40%',
        height: '40%',
        border: '0px solid black',
    },
    orderplacedtxt: {
        width: '45%',
        fontSize: '16px',
        fontWeight: '500',
        color: '#333232',
    },
    table: {
        width: '100%',
        height: '24%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'column',
    },
    row1: {
        width: '100%',
        height: '30%',
        borderBottom: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        color: '#333232',
        fontWeight: '500',
        backgroundColor: '#FAFAFA',
    },
    txt1: {
        width: '30%',
    },
    txt2: {
        width: '30%',
    },
    txt3: {
        width: '40%',
    },
    row2: {
        width: '100%',
        height: '60%',
        display: 'flex',
        color: '#333232',
        fontSize: '14px',
        fontFamily: 'calibri'
    },
    row2txt1: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #DCDCDC',
    },
    row2txt2: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #DCDCDC',
    },
    row2txt3: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row2txt: {
        width: '90%',
        height: '75%',
        border: '0px solid red'
    },
    orderbutton: {
        width: '100%',
    }

})

function OrderSuccess() {
    const classes = useStyle()
    const navigate = useNavigate()

    const openDashBoard = () => {
        navigate('/orderSummery')
    }
    return (
        <div>
            <Box>
                <PageHeader />
                <Box className={classes.containeros}>
                    <Box className={classes.maincontainer}>
                        <Box className={classes.logo}>                         
                           <img src='../orderlogo.jpeg' style={{width: '65%'}} ></img>
                        </Box>
                        <Box className={classes.orderplacedtxt}>
                            <Box>hurray!!! your order is confirmed<br /> the order id is #123456 save the order id for <br /> further communication..</Box>
                        </Box>
                        <Paper elevation={1} className={classes.table}>
                            <Box className={classes.row1}>
                                <Box className={classes.txt1}>Email us</Box>
                                <Box className={classes.txt2}>Contact us</Box>
                                <Box className={classes.txt3}>Address</Box>
                            </Box>
                            <Box className={classes.row2}>
                                <Box className={classes.row2txt1}><Box className={classes.spaceOS}>admin@bookstore.com</Box></Box>
                                <Box className={classes.row2txt2}><Box className={classes.spaceOS}>+91 8163475881</Box></Box>
                                <Box className={classes.row2txt3}>
                                    <Box className={classes.row2txt} sx={{ textAlign: 'left' }}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                        near Kumarakom restaurant, HSR Layout, Bangalore 560034</Box>
                                </Box>
                            </Box>
                        </Paper>
                        <Box className={classes.orderbutton}>
                        <Button variant='contained' sx={{backgroundColor: '#3371B5', width: '24%'}}
                         onClick={openDashBoard}
                         >Order Summery</Button>
                    </Box>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default OrderSuccess