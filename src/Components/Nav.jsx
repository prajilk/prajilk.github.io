import * as React from 'react';
import {
    AppBar, Box, CssBaseline, Drawer, IconButton, List,
    ListItem, Toolbar,
    Typography, Container, ListItemText
} from '@mui/material';
import { Close, NotesRounded } from '@mui/icons-material';
import { Link } from 'react-scroll';


const drawerWidth = '100%';
const navItems = ['Home', 'About', 'Projects', 'Contact'];

function DrawerAppBar() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'right', padding: '1.4rem' }} >
            <Close sx={{ cursor: 'pointer', fontSize: '2rem', ':hover': { color: '#147efb' } }} />
            <List sx={{ textAlign: 'center' }}>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Link to={item} smooth={true} duration={500} className='sidenav-button'>{item}</Link>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 0 10px rgba(0,0,0,.09)',
                padding: '.5rem 0'
            }}>
                <Container maxWidth='lg'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, color: '#000', position: 'absolute', right: 0 }}
                        >
                            <NotesRounded sx={{ fontSize: '2rem', transform: 'scaleX(-1)' }} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'block', sm: 'block' },
                                fontFamily: 'Poppins',
                                fontWeight: 900,
                                color: '#000',
                                fontSize: '1.3rem'
                            }}
                        >
                            Prajil.K
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link to={item} smooth={true} duration={1000} key={item} className='nav-button'>{item}</Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}

export default DrawerAppBar;