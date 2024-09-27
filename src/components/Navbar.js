import { AppBar, Toolbar, Typography, IconButton, Box, Button, Snackbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('dylan@example.com') // Replace with actual email address
            .then(() => {
                setOpen(true);
            })
            .catch(err => console.error('Failed to copy email: ', err));
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#fff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    <Button component={RouterLink} to="/" color="inherit">Modelling</Button>
                    <Button component={RouterLink} to="/music" color="inherit">Music</Button>
                    <Button component={RouterLink} to="/photography" color="inherit">35mm</Button>
                </Box>
                <Typography variant="h6" color="inherit" noWrap className="title" sx={{ flexGrow: 0, fontWeight: 'bold', textAlign: 'center', flexBasis: '100%' }}>
                    Dylan 
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <IconButton color="inherit" component="a" href="https://www.instagram.com/dyl4n.4c/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleCopyEmail}>
                        <EmailIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Email address copied to clipboard!"
                action={
                    <Button color="inherit" size="small" onClick={handleClose}>
                        Close
                    </Button>
                }
            />
        </AppBar>
    );
};

export default Navbar;
