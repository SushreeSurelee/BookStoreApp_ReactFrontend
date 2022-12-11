import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import InputBase from '@mui/material/InputBase';
import { addToCart, addToWishList, getBookById, getFeedback } from '../../services/dataService';
import PageHeader from '../pageHeader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
    book: {
        color: '#0A0102',
        fontSize: '12px',
        position: 'relative',
        left: '4px',
    },
    container3: {
        width: '70vw',
        height: '80vh',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'relative',
        left: '140px',
    },
    container4: {
        width: '96%',
        height: '100%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    buttons: {
        width: '36%',
        height: '70%',
        border: '1px solid #D1D1D1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookdetails: {
        width: '65%',
        height: '100%',
        border: '0px solid purple',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    bookimg: {
        width: '80%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookbtn: {
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    bookbtns: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addbag: {
        width: '45%',
        backgroundColor: '#A03037 !important',
        borderRadius: '0px',
    },
    addfav: {
        width: '45%',
        backgroundColor: '#333333 !important',
    },
    bookdetails1: {
        width: '93%',
        height: '95%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    booktitle1: {
        fontSize: '25px',
        fontWeight: '500',
    },
    bookauthor1: {
        fontSize: '18px',
        color: '#878787',
    },
    bookpoints1: {
        width: '12%',
        height: '4%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookratings1: {
        width: '60%',
        height: '90%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    bookquantity1: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '15px',
    },
    bookprice1: {
        width: '26%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookdiscount1: {
        fontWeight: '500',
        fontSize: '20px',
    },
    bookcost1: {
        position: 'relative',
        right: '35px',
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
    },
    bookparagraph: {
        width: '80%',
        height: '23%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    para1: {
        width: '100%',
        height: '55%',
        border: '0px solid blue',
        overflow: 'hidden',
        textAlign: 'justify',
    },
    paratext: {
        opacity: '0.7'
    },
    customerfeedback: {
        height: '5%',
        border: '0px solid blue',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        color: '#0A0102',
    },
    feedbackrating: {
        width: '80%',
        height: '25%',
        border: '0px solid red',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedbackrate: {
        width: '95%',
        height: '86%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    stars: {
        width: '10%',
        height: '22%',
    },
    inputbase: {
        width: '100%',
        height: '37%',
        backgroundColor: 'white',
        textAlign: 'left',
    },
    feedbackbutton: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'relative',
    },

})

function BookDetails (props) {
    const classes = useStyle()
    const navigate = useNavigate()
    const bookId = localStorage.getItem("bookid");
    const [bookObj,setBookObj] = useState ({bookName:'',author:'',bookImage:'',bookRating:0,ratingCount:0,discountPrice:0,actualPrice:0,bookDetail:'',quantity:''})
    const [feedObj, setFeedObj] = useState([])

    useEffect(() => {
        getBookById(bookId).then((response) => {
            console.log(response)
            setBookObj(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    },[bookId])
    
    const cartobj = {"cartQuantity":0,"bookid":0}

    const addToBag = () =>{
        cartobj.cartQuantity=1
        cartobj.bookid=Number(localStorage.getItem("bookid"))

        addToCart(cartobj).then((response) => {
            console.log(response)
            navigate('/cart')
        }).catch((error) => {
            console.log(error)
        })
    }

    const addToWishlist = () => {
        addToWishList(bookId).then((response) => {
            console.log(response)
            navigate('/wishlist')
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getFeedback(bookId).then((response) => {
                console.log(response)
                setFeedObj(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [bookId])

    const openBook = () => {
        navigate('/dashboard')
    }
 return(
            <Box>
                <PageHeader/>
                <Box className={classes.headerbsummary}>
                    <Box className={classes.homebook}>
                        <Box className={classes.home} onClick={()=>openBook()}>Home /</Box>
                        <Box className={classes.book}> Book {bookObj.bookId}</Box>
                    </Box>
                </Box>

                <Box className={classes.container3}>

                    <Box className={classes.container4}>


                        <Box className={classes.buttons}>
                            <Box className={classes.bookimg}><img src={bookObj.bookImage} alt='book' width='85%' height='85%' /></Box>
                            <Box className={classes.bookbtn}>
                                <Box className={classes.bookbtns}>
                                <Button onClick={addToBag} variant="contained" className={classes.addbag}>Add to Bag</Button>
                                <Button onClick={addToWishlist} variant="contained" className={classes.addfav} >Wishlist</Button>
                                </Box>
                            </Box>
                        </Box>


                        <Box className={classes.bookdetails}>
                            <Box className={classes.bookdetails1}>
                                <Box className={classes.booktitle1}>
                                 {bookObj.bookName}
                                </Box>
                                <Box sx={{ height: '1%' }}></Box>
                                <Box className={classes.bookauthor1}>{bookObj.author}</Box>
                                <Box sx={{ height: '0.6%' }}></Box>
                                <Box className={classes.bookpoints1}>
                                    <Box className={classes.bookratings1}>
                                        <Box sx={{ fontSize: '12px' }}>{bookObj.bookRating}</Box>
                                        <StarIcon fontSize="10px" sx={{ color: 'white' }} />
                                    </Box>
                                    <Box className={classes.bookquantity1}>{bookObj.quantity}</Box>
                                </Box>
                                <Box className={classes.bookprice1}>
                                    <Box className={classes.bookdiscount1}>Rs.{bookObj.discountPrice}</Box>
                                    <Box className={classes.bookcost1}>Rs. {bookObj.actualPrice}</Box>
                                </Box>

                                <Box sx={{ width: '80%', position: 'relative', top: '15px' }}><Divider sx={{ borderBottomWidth: 1, width: '100%' }} /></Box>


                                <Box className={classes.bookparagraph}>
                                    <Box className={classes.para1}>
                                        <span style={{ color: '#878787', display: 'flex', alignItems: 'center' }}> <Box style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#878787' }}></Box>&nbsp;Book Detail</span>
                                        <Box className={classes.paratext} sx={{ marginLeft: '9px', fontSize: '12px', opacity: '0.8' }}>
                                        {bookObj.bookDetail}

                                        </Box>
                                    </Box>
                                </Box>


                                <Box sx={{ width: '80%' }}><Divider sx={{ borderBottomWidth: 1, width: '100%' }} /></Box>
                                <Box className={classes.customerfeedback}>
                                    <span style={{ fontWeight: '500' }}>Customer Feedback</span>
                                </Box>


                                <Box className={classes.feedbackrating}>
                                    <Box className={classes.feedbackrate}>
                                        <Box sx={{ fontSize: '14px', height: '18%' }}>Overall rating</Box>
                                        <Box className={classes.stars}>
                                     <Rating
                                         name="simple-controlled"
                                         onChange={(event, newValue) => {
                                             console.log(newValue)
                                         }}
                                     />
                                        </Box>
                                        <Box className={classes.inputbase}><InputBase sx={{ marginLeft: '8px' }} placeholder='write your review' />
                                        </Box>
                                        <Box className={classes.feedbackbutton}><Button variant="contained" sx={{ width: '13%', height: '80%', textTransform: 'capitalize' }}>Submit</Button></Box>
                                    </Box>
                                </Box>
                                {
                                    feedObj.map(feed => 
                                    <Box className={classes.firstfeedback}>
                                    <Box sx={{ display: 'flex' }}>
                                        
                                        <Box sx={{ marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>{feed.fullName}</Box>
                                    </Box>
                                    <Box sx={{ height: '28%', }}>
                                        <Rating className={classes.stars1} defaultValue={feed.bookRating} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                                    </Box>
                                    <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '12px', textAlign: 'justify', color: '#707070' }}>
                                        <span >{feed.comment}</span>
                                    </Box>
                                </Box>)}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box> 
 )
}

export default BookDetails