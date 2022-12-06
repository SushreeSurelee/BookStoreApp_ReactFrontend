import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    main1:{
        display:'flex',
        flexDirection:'row',
        border: '0px solid red',
        justifyContent:'space-around',
        marginLeft:'50px',
        marginTop:'10px',
        flexWrap:'wrap'
    },
    main2: {
        width: '15vw',
        height: '40vh',
        border: '2px solid #D3D3D3',
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
    },
    bookimage: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookimg: {
        width: '100%',
        height: '100%',
    },
    bookimage2: {
        width: '45%',
        height: '80%',
        border: '0px solid red',

    },
    bookdetail: {
        width: '100%',
        height: '40%',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    booktext: {
        width: '85%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    booktitle: {
        height: '22%',
        fontWeight: '500',
        fontFamily: 'normal normal normal 14px/19px Roboto',
        color: '#0A0102',
    },
    bookauthor: {
        height: '22%',
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
    },
    bookdetail1: {
        width: '30%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookratings: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    mark: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
    },
    bookprice: {
        width: '50%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '15px',
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '12px',
    },
})

function Books(props) {
    const classes = useStyle()
    return (
        <Box className={classes.main1}>
            <Paper elevation={1} className={classes.main2}>
                <Box className={classes.bookimage}>
                    <Box className={classes.bookimage2}>
                        <img className={classes.bookimg} src={props.book.bookImage}/></Box>
                </Box>
                <Box className={classes.bookdetail}>
                    <Box className={classes.booktext}>
                        <Box className={classes.booktitle}>{props.book.bookName}</Box>
                        <Box className={classes.bookauthor}>{props.book.author}</Box>
                        <Box className={classes.bookdetail1}>
                            <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '12px' }}>{props.book.bookRating}</Box>
                                <StarIcon fontSize="16px" sx={{ color: 'white' }} />
                            </Box>
                            <Box className={classes.mark}>{props.book.ratingCount}</Box>
                        </Box>
                        <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>Rs. {props.book.discountPrice}</Box>
                            <Box className={classes.bookcost}>Rs.{props.book.actualPrice}</Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Books