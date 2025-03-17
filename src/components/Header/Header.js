import React, { Component } from 'react'
import './Header.css';
import Main_logo from './Image/PROJECT.png'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default class Header extends Component {

    render() {

        return (

            <>

                {/* desktop View start */}

                <nav class="fixed-top" >

                    <Toolbar sx={{ background: '#fff', display: 'flex', justifyContent: 'center', padding: '10px' }} className='Main_screen_size' >

                        <Link to="/" >

                            <img
                                src={Main_logo}
                                alt='Main_logo'
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { sm: 'block' } }}
                                className='Main_logo_craft'
                            />

                        </Link>

                        <Box sx={{ display: { sm: 'block' } }}  >

                            <Button sx={{ color: '#000' }} className='Item_name'  >

                                <Link to="/About" className='Item_name_link' >About</Link>

                            </Button>

                            <Button sx={{ color: '#000' }} className='Item_name' >

                                <Link to="/Service" className='Item_name_link' >Service</Link>

                            </Button>

                            <Button sx={{ color: '#000' }} className='Item_name' >

                                <Link to="/Contact" className='Item_name_link' >Contact</Link>

                            </Button>

                        </Box>

                    </Toolbar>

                </nav>

                {/* desktop View End */}

                <Box>

                </Box>

            </>

        )

    }

}
