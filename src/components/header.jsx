import React from 'react';
import { makeStyles } from '@mui/styles'
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';

const useStyles = makeStyles({
    header:{
        width: '100vw',
        height: '10vh',
        background: '#A03037 0% 0% no-repeat padding-box',
    },
    bookIcon:{
        left:'200px',
        top:'5px',
        height:'50px',
        backgroundColor:'white'
    }
})

function HeaderMUI(props) {
    const classes = useStyles()
    
  return (
    <Box className={classes.header}>
        <IconButton className={classes.bookIcon}>
            <AutoStoriesTwoToneIcon  sx={{height:'80px'}}></AutoStoriesTwoToneIcon>
        </IconButton>
    </Box>
  );
}

export default HeaderMUI