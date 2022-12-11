import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import PageHeader from '../../components/pageHeader';
import Books from '../../components/books';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBookList } from '../../services/dataService';


const useStyles = makeStyles({
    container2: {
        width: '85vw',
        height: 'auto',
        border: '0px solid red',
        position: 'relative',
        left: '100px',
    },
    header2: {
        width: '100%',
        height: '12vh',
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '700px',
    },
    booktextitem: {
        width: '14%',
        display: 'flex',
        border: '0px solid blue',
        alignItems: 'center',
        position: 'relative',
        left: '70px',
    },
    bookstxt: {
        fontSize: '24px',
        fontWeight: '550',
        letterSpacing: '0px',
        position: 'relative',
        bottom: '3px',
        border: '0px solid green',
    },
    totalitems: {
        fontSize: '14px',
        opacity: '0.7',
        position: 'relative',
        left: '5px',
        border: '0px solid yellow',
    },
    header2btn: {
        position: 'relative',
        left: '100px',
    }
})

function Dashboard() {
    const classes = useStyles()
    const [bookList, setBookList] = useState([])

    const getBooks = () => {
        getBookList().then((response) => {
            console.log(response)
            setBookList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getBooks()
    },[])

    return(
        <div>
            <Box>
                <PageHeader/>
                <Box className={classes.container2}>
                    <Box className={classes.header2}>
                        <Box className={classes.booktextitem}>
                            <Box className={classes.bookstxt}>Books</Box>
                            <Box className={classes.totalitems}>({bookList.length} items)</Box>
                        </Box>
                        <Box className={classes.header2btn}>
                        </Box>
                    </Box>
                    <Box  sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                        { 
                         bookList.map((book) => (<Books key={book.bookId} book={book} />))
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard;