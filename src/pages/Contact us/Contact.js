import React, { Component } from 'react'
import '../Home page/Home.css'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Location_img from '../Home page/Images/Location_img.png';
import Phone_img from '../Home page/Images/Phone_number.png';
import Email_img from '../Home page/Images/Email_img.png';
import whatsapp_img from '../Home page/Images/Whatsapp_img.png';
import MapComponent from '../Testimonial/Testimonial.js';
import 'swiper/css';
import 'swiper/css/pagination';



export default class Contact extends Component {

    render() {

        return (

            <>

                <Box sx={{ paddingTop: '20px', marginTop: '80px' }} >

                    <Typography variant='h5' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: '600',
                        color: '#4070f4',
                        fontSize: '130%',
                        className: 'animation_body'
                    }} >Contact Me</Typography>

                </Box>

                <Box sx={{ paddingTop: '10px' }} >

                    <Typography variant='h2' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: '600',
                        fontSize: '150%',
                        className: 'animation_body part_Set',
                        paddingBottom: '20px'
                    }} >Let’s Start A New Project</Typography>

                </Box>

                <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                    <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>

                        <Box sx={{ display: 'flex', gap: '2%' }} className='Contact_us'>

                            <img src={Location_img} alt='Location_img' />

                            <Box className='Contact_us'>

                                <h6>Location</h6>
                                <p>Rasulgarh, Bhubaneswar,Odisha 751010</p>

                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', gap: '2%', marginTop: '20px' }} className='Contact_us'>

                            <img src={Phone_img} alt='Phone_img' />

                            <Box className='Contact_us'>

                                <h6>Phone Number</h6>
                                <p>+91 9348297217</p>

                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', gap: '2%', marginTop: '20px' }} className='Contact_us'>

                            <img src={Email_img} alt='Email' />

                            <Box className='Contact_us'>

                                <h6>Email</h6>
                                <p>arpitariyanm@gmail.com</p>

                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', gap: '2%', marginTop: '20px' }} className='Contact_us'>

                            <img src={whatsapp_img} alt='whatsapp_img' />

                            <Box className='Contact_us'>

                                <h6>Whatsapp Number</h6>
                                <p>+91 9348297217</p>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>

                        <MapComponent />

                    </Grid>

                </Grid>

            </>

        )

    }

}
