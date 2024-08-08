import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Navbar.css';

const Navbar = () => {
    return (
        <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#fff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    <Button color="inherit">Modelling</Button>
                    <Button color="inherit">Music</Button>
                    <Button color="inherit">Info</Button>
                </Box>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 0, fontWeight: 'bold', textAlign: 'center', flexBasis: '100%' }}>
                    Dylan Cabezas
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <IconButton color="inherit">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
