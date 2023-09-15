import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function NavBar(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="a"> minReddit </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;