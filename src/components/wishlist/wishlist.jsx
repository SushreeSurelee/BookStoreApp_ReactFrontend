import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, IconButton } from '@mui/material';
import PageHeader from '../pageHeader';
import { deleteWishList, getWishList } from '../../services/dataService';
import { useNavigate } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

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
    wishlist: {
        color: '#0A0102',
        fontSize: '12px',
        position: 'relative',
        left: '4px',
    },
    Container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '',
        width: '75vw',
        height: '80vh',
        marginLeft: '11vw',
        marginTop: '-15px',
        border: '0px solid lightgray'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        width: '70vw',
        height: '5vh',
        fontSize: '20px',
        marginLeft: '40px',
        marginTop: '20px',
        backgroundColor: '#F5F5F5',
        border: '1px solid lightgray'
    },
    row2: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '40px',
        marginTop: '20px',
        border: ''
    },
    item2: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '30px',
        border: ' '
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
        marginTop: '10px',
        height: '30px'
    },
    trash: {
        left: '500px',
        top: '-50px'
    }

})


function Wishlist() {
    const classes = useStyle()
    const navigate = useNavigate()
    const [bookObj, setBookObj] = useState([])

    useEffect(() => {
        getWishList().then((response) => {
            console.log(response)
            setBookObj(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const Removewishlist = (wishlistId) => {
        console.log('wishlist ID', wishlistId)
        deleteWishList(wishlistId).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const openBook = () => {
        navigate('/dashboard')
    }
    return (
        <Box>
            <PageHeader />
            <Box className={classes.headerbsummary}>
                <Box className={classes.homebook}>
                    <Box className={classes.home} onClick={() => openBook()}>Home /</Box>
                    <Box className={classes.wishlist}> My Wishlist </Box>
                </Box>
            </Box>
            <Box className={classes.Container}>
                <div className={classes.row1}>
                    My Wishlist({bookObj.length})
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
                                    Rs. {book.discountPrice}
                                    <span className={classes.bookcost}>Rs. {book.actualPrice}</span>

                                </div>
                                <IconButton onClick={() => Removewishlist(book.wishListId)} className={classes.trash}>
                                    <DeleteOutlinedIcon sx={{ height: '18px' }} />
                                </IconButton>
                            </div>
                        </div>)
                }
            </Box>
        </Box>
    )
}

export default Wishlist