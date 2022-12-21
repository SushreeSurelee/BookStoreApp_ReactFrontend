import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../pageHeader';
import { getCart, getOrder, removeCart } from '../../services/dataService';
import CustomerDetails from '../customerDetails/customerDetails';
import { useReducer } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const useStyle = makeStyles({
    headercart: {
        width: '79vw',
        height: '10vh',
        border: '0px solid red',
        display: 'flex',
        position: 'relative',
        top: '6px',
        left: '153px',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: '500',
    },
    homeheader: {
        color: '#9D9D9D',
        fontSize: '13px',
    },
    cartheader: {
        color: '#0A0102',
        fontSize: '13px',
    },
    containercart: {
        width: '61vw',
        height: 'auto',
        border: '0px solid black',
        position: 'relative',
        left: '153px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    maincart: {
        width: '100%',
        height: 'auto',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailscart: {
        width: '92%',
        height: 'auto',
        margin: '20px 0px 20px 0px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
    },
    mycartloc: {
        width: '100%',
        height: '6vh',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'space-between',
    },
    textcart: {
        width: '38%',
        height: '19vh',
        border: '0px solid pink',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '25px',
    },
    bookimagecart: {
        width: '25%',
        height: '75%',
        marginTop: '5px',
        border: '0px solid orange',
    },
    contentcart: {
        width: '69%',
        height: '100%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        left: '20px',
    },
    pricecart: {
        width: '53%',
        height: '17%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountcart: {
        color: '#0A0102',
        fontWeight: '500',
        fontSize: '16px',
    },
    costcart: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '10px',
    },


    countercart: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '0px solid red',
        position: 'relative',
        left: '-25px',
    },
    box: {
        height: '22px',
        width: '20px',
        display: 'flex',
        border: '1px solid gray',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: '15px',
    },
    decre: {
        position: 'relative',
        left: '5px',
    },
    incr: {
        position: 'relative',
        right: '35px',
    },

    addressdetailscart: {
        width: '100%',
        height: '7vh',
        border: '0px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '10px',
    },
    textmycart: {
        width: '92%',
        textAlign: 'left',
        fontSize: '20px',
        fontWeight: '500',
    },
    addressdetailscart1: {
        width: '100%',
        height: 'auto',
        border: '0px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '20px',
    },
    contentOD: {
        width: '92%',
        height: 'auto',
        margin: '20px 0px 20px 0px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontWeight: '500',
        position: 'relative',
    },
    addressorder: {
        width: '100%',
        height: '10vh',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookorder: {
        width: '38%',
        height: '14vh',
        marginBottom: '20px',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'relative',
        top: '20px',
    },
    bookImgOD: {
        width: '20%',
        height: '90%',
        marginTop: '5px',
        border: '0px solid orange',
    },
    dataOD: {
        width: '69%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    priceOD: {
        width: '53%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountOD: {
        color: '#0A0102',
        fontWeight: '500',
        fontSize: '16px',
    },
    costOD: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '10px',
    },
    btnOD: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    }

})

const initialState = 1
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

function Cart(props) {
    const classes = useStyle()
    const navigate = useNavigate()
    const [cartList, setCartList] = useState([])
    const [details, setDetails] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [order, setOrder] = useState(false)
    const [orderObj, setOrderObj] = useState([])

    const [count, dispatch] = useReducer(reducer, initialState)
    useReducer(reducer, initialState)

    const openCustomerDetails = () => {
        setDetails(true)
        setToggle(true)
    }

    const openBookDetails = () => {
        setOrder(true)
    }

    const removeBook = (id) => {
        removeCart(id).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const getcartList = () => {
        getCart().then((response) => {
            console.log(response)
            setCartList(response.data.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getcartList()
    }, [])

    const orderPlacedSuccess = () => {
        getOrder().then((response) => {
            console.log(response)
            setOrderObj(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
        navigate('/orderSucessful')
    }

    const openBook = () => {
        navigate('/dashboard')
    }


    return (
        <div>
            <Box>
                <PageHeader />
                <Box className={classes.headercart}>
                    <Box className={classes.homeheader} onClick={() => openBook()} >Home /</Box>
                    <Box className={classes.cartheader}> My cart</Box>
                </Box>
                <Box className={classes.containercart}>
                    <Card className={classes.maincart} variant="outlined">
                        <Box className={classes.detailscart}>
                            <Box className={classes.mycartloc}>
                                <Box sx={{ fontSize: '18px', fontWeight: '500' }}>My cart({cartList.length})</Box>
                                <Button startIcon={<LocationOnIcon sx={{ color: '#A03037' }} />} endIcon={<ArrowDropDownIcon sx={{ width: '30px', height: 'auto', color: '#DCDCDC' }} />}
                                    variant="outlined" sx={{
                                        width: '30%', textTransform: 'none', color: '#0A0102', borderColor: '#DCDCDC', display: 'flex', justifyContent: 'space-around'
                                    }}>Use current location
                                </Button>
                            </Box>

                            <Box sx={{ height: '2vh' }}></Box>
                            {
                                cartList.map((book) => (
                                    <Box className={classes.textcart}>
                                        <Box className={classes.bookimagecart}>
                                            <img width='100%' height='100%' src={book.bookImage} />
                                        </Box>
                                        <Box className={classes.contentcart}>
                                            <Box sx={{ height: '22%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>
                                                {book.bookName}
                                            </Box>
                                            <Box sx={{ height: '17%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>
                                                {book.author}
                                            </Box>
                                            <Box className={classes.pricecart}>
                                                <Box className={classes.discountcart}>Rs. {book.discountPrice} </Box>
                                                <Box className={classes.costcart}>Rs. {book.actualPrice}</Box>
                                            </Box>
                                            <Box sx={{ height: '15%' }}></Box>
                                            <Box className={classes.countercart}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', width: '45%', justifyContent: 'space-between', border: '0px solid orange' }}>
                                                    <Button className={classes.decre} onClick={() => dispatch('decrement')}><RemoveCircleOutlineIcon color="action" /></Button>
                                                    <div className={classes.box}> {count}</div>
                                                    <Button className={classes.incr} onClick={() => dispatch('increment')}><AddCircleOutlineIcon color="action" /></Button>
                                                </Box>
                                                <Box sx={{ width: '30%' }}>
                                                    <Box
                                                        onClick={() => removeBook(book.cartId)}
                                                        style={{ fontSize: '14px', color: '#0A0102', fontWeight: '500', position: 'relative', left: '10px' }} >Remove</Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                {
                                    details ? null :
                                        <Button sx={{ backgroundColor: '#3371B5', width: '20%' }} variant="contained" onClick={openCustomerDetails} >Place Order</Button>
                                }
                            </Box>
                        </Box>
                    </Card>
                    {toggle ?
                        <CustomerDetails openBookDetails={openBookDetails} /> :
                        <Card className={classes.addressdetailscart} variant="outlined">
                            <span className={classes.textmycart}>Address Details</span>
                        </Card>
                    }
                    {/* {
                        order ?

                            <Card className={classes.addressdetailscart1} variant="outlined">
                                <Box className={classes.contentOD}>
                                    <Box><span className={classes.textmycart}>Order summery</span></Box>
                                    {orderObj.map((order) => (
                                        <Box className={classes.bookorder}>
                                            <Box className={classes.bookImgOD}>
                                                <img width='100%' height='100%' src={order.bookImage} />
                                            </Box>
                                            <Box className={classes.dataOD}>
                                                <Box sx={{ height: '30%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>{order.bookName}</Box>
                                                <Box sx={{ height: '24%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>By {order.author}</Box>
                                                <Box className={classes.priceOD}>
                                                    <Box className={classes.discountOD}>Rs. {order.discountPrice}</Box><Box className={classes.costOD}>Rs. {order.actualPrice}</Box></Box>
                                                <Box sx={{ height: '15%' }}></Box>
                                            </Box>
                                        </Box>))
                                    }
                                    <Box className={classes.btnOD}>
                                        <Button variant='contained' sx={{ width: '23%' }} onClick={orderPlacedSuccess}>Checkout</Button>
                                    </Box>
                                </Box>
                            </Card>
                            :
                            <Card className={classes.addressdetailscart} variant="outlined">
                                <span className={classes.textmycart}>Order summery</span>
                            </Card>
                    } */}

                </Box>
            </Box>
        </div>
    )
}

export default Cart
