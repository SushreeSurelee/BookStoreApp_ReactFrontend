
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FCFCFC',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '38vw',
        },
    },
}));

function PageHeader() {
    
    return (
        <Box sx={{ flexGrow: 1, marginTop:'-8px',marginLeft:'-8px',marginRight:'-8px' }}>
            <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
                <Toolbar>
                    <Box sx={{ width: '8%' }} />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <img src='../education.png' />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Bookstore
                    </Typography>
                    <Box sx={{ width: '2%' }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color='action' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…" sx={{color: 'black'}}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ width: '15%' }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="medium" color="inherit" sx={{ flexDirection: 'column', width: '100%', borderLeft: '1px solid #89292f', borderRadius: '0%' }}>
                            <div><PersonOutlineOutlinedIcon /></div>
                            <Box sx={{ fontSize: '10px' }}>Profile</Box>
                        </IconButton>
                        <IconButton
                            size="medium "
                            aria-label="show 17 new notifications"
                            color="inherit" sx={{ flexDirection: 'column', width: '100%', borderLeft: '1px solid #89292f', borderRight: '1px solid #89292f', borderRadius: '0%' }}
                        >
                            <div><ShoppingCartOutlinedIcon /></div>
                            <Box sx={{ fontSize: '10px' }}>Cart</Box>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PageHeader;