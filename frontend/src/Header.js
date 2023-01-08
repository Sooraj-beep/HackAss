import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/*make hack and ass and display hackethon Assistant bold and bigger in typography*/}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box component="span" fontWeight='bold' color='orange'>Hack</Box>athon <Box component="span" fontWeight='bold' color='orange'>Ass</Box>istant
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }