import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import PageHeader from '../pageHeader';
import { getCart } from '../../services/dataService';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const useStyle = makeStyles({
    headerbsummary: {
        width: '90vw',
        height: '8vh',
        border: '0px solid red',
        display: 'flex',
        alignItems: 'center',
    },
    homebook: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '140px',
    },
    home: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    cart: {
        color: '#0A0102',
        fontSize: '12px',
        position: 'relative',
        left: '4px',
    },
    Container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '',
        width: '60vw',
        height: '40vh',
        marginLeft: '10.5vw',
        border: '1px solid lightgray'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '20px',
        marginLeft: '40px',
        marginTop: '20px',
        backgroundColor: '',
        border: '0px solid lightgray'
    },
    row2: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: '60%',
        marginLeft: '40px',
        marginTop: '20px',
        border: '0px solid red'
    },
    item2: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '30px',
    },
    row3: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'flex-start'
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginLeft: '10px',
        marginTop: '1px'
    },
    row4: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '45vw',
        marginTop: '3px',
        height: '30px'
    },
    increamentBox :{
        border: '0px solid red',
        width: '30%',
        height: '10%',
        marginLeft:'150px',
        marginTop:'-40px'
    },
    box: {
        height: '22px',
        width: '38px',
        display: 'flex',
        border: '1px solid gray',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: '20px',
    },
    decre: {
        position: 'relative',
        left: '1px',
    },
    incr: {
        position: 'relative',
        right: '40px',
    },
    remove:{
        left:'-30px',
        color:'#0A0102 !important',
        textTransform: 'capitalize !important',
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
function Cart() {
    const classes = useStyle()
    const navigate = useNavigate()
    const [bookObj, setBookObj] = useState([])

    const [count, dispatch] = useReducer(reducer, initialState)
    useReducer(reducer, initialState)

    useEffect(() => {
        getCart().then((response) => {
            console.log(response)
            setBookObj(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const openBook = () => {
        navigate('/dashboard')
    }
    return (
        <Box>
            <PageHeader />
            <Box className={classes.headerbsummary}>
                <Box className={classes.homebook}>
                    <Box className={classes.home} onClick={() => openBook()}>Home /</Box>
                    <Box className={classes.cart}> My Cart</Box>
                </Box>
            </Box>
            <Box className={classes.Container}>
                <div className={classes.row1}>
                    MyCart({bookObj.length})
                </div>
                {
                    bookObj.map(book =>
                        <div className={classes.row2}>
                            <div>
                                <img src={book.bookImage} alt='book' width="100px" />
                            </div>
                            <div className={classes.item2}>
                                <b>{book.bookName}</b>
                                <div className={classes.row3}>
                                    by {book.author}
                                </div>
                                <div className={classes.row3}>
                                    <b>Rs. {book.discountPrice}</b>
                                    <span className={classes.bookcost}>Rs. {book.actualPrice}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                <Box className={classes.increamentBox}>
                    <div style={{ display: "flex", flexDirection: 'row', color: 'black', alignItems: 'center' }}>
                        <Button className={classes.decre} onClick={() => dispatch('decrement')}><RemoveCircleOutlineIcon color="action" /></Button>
                        <div className={classes.box}> {count}</div>
                        <Button className={classes.incr} onClick={() => dispatch('increment')}><AddCircleOutlineIcon color="action" /></Button>
                        <Button className={classes.remove} >Remove </Button>
                    </div>
                    
                </Box>
                <div className={classes.row4}>
                    <Button variant="contained" >Place Order</Button>
                </div>
            </Box>
        </Box>
    )
}

export default Cart