import { AppBar, Box, Toolbar, Button, Typography, IconButton} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                                < MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MAIN MENU
                        </Typography>
                        
                        <Link to="/log1">
                            <Button color="inherit">Signup</Button>
                        </Link>

                        <Link to="/log2">
                             <Button color="inherit">Signup2</Button>
                        </Link>

                        <Link to="/log3">
                             <Button color="inherit">Login</Button>
                        </Link>
                        <br/>
                        <Link to="/s">
                            <Button color="inherit">state</Button>
                        <br/>
                        </Link>
                        <Link to="/c">
                            <Button color="inherit">counter</Button>
                        </Link>
                        <br/>
                        <Link to="/f">
                            <Button color="inherit">file</Button>
                        </Link>
                        <br/>
                        <Link to="/a">
                            <Button color="inherit">api</Button>
                        </Link>
                        <br/>
                        <Link to="/p">
                            <Button color="inherit">pokemon</Button>
                        </Link>
                         <br/>
                        <Link to="/g">
                            <Button color="inherit">grid</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar
