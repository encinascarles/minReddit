import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../theme/themeSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { selectTheme } from '../../theme/themeSlice';
import { useSelector } from 'react-redux';

function NavBar(){
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMode());
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="a"> minReddit </Typography>
                <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
                    {useSelector(selectTheme).palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;