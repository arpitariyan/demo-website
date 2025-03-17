import { Box } from '@mui/material'
import React, { Component } from 'react'
import '../Home page/Home.css';
import './Service.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import Dedication_img from '../Home page/Images/Dedication_Card.jpg';
import Smart_work_img from '../Home page/Images/Smart_Work_Card.png';
import Card_side from '../Home page/Images/Card_side.jpg';
import Collaboration_img from '../Home page/Images/Collaboration_Card.jpg';
import Technology_img from '../Home page/Images/Technology_Card.jpg';
import Typography from '@mui/material/Typography';
import webdesiging from './images/1.jpg';
import UIUX_Designing from './images/2.jpg';
import Graphic_designing from './images/3.jpg';
import Word_press from './images/4.jpg'


const Cardeatils = [

    {
        src: Dedication_img,
        headingmain: "Smart Work",
        paragraphmain: "Smart work means achieving goals efficiently by prioritizing tasks, leveraging resources, and optimizing efforts. It focuses on quality over quantity, using strategy and innovation to maximize productivity and results."
    },
    {
        src: Smart_work_img,
        headingmain: "Dedication",
        paragraphmain: "Dedication is steadfast commitment to a goal, driven by passion and perseverance. It means prioritizing long-term success over short-term ease, overcoming challenges, and consistently striving for excellence."
    },
    {
        src: Collaboration_img,
        headingmain: "Collaboration",
        paragraphmain: "Collaboration in a company unites teams, combining skills and ideas to achieve common goals. It enhances innovation, efficiency, and morale, driving better results and fostering a culture of shared success."
    },
    {
        src: Technology_img,
        headingmain: "Technology",
        paragraphmain: "Technology in an IT company drives innovation, efficiency, and growth. It enables advanced solutions, automation, and seamless operations, empowering businesses to adapt, compete, and deliver value in a rapidly evolving digital landscape."
    },

];

const Serviceprovide = [

    {
        src: webdesiging,
        headingmain: "Website Designing",
        paragraphmain: "Builds and maintains websites using modern technologies, ensuring responsive design, functionality, and seamless user experiences."
    },

    {
        src: UIUX_Designing,
        headingmain: "Ui/UX Designing",
        paragraphmain: "Crafts intuitive, user-centric interfaces, enhancing user satisfaction through research-driven design and engaging visual elements."
    },

    {
        src: Graphic_designing,
        headingmain: "Graphic Designing",
        paragraphmain: "Creates compelling visual content, including logos, banners, and marketing materials, to effectively communicate brand messages."
    },

    {
        src: Word_press,
        headingmain: "Word Press Designing",
        paragraphmain: "Designs and customizes WordPress websites, ensuring performance, SEO compatibility, and user-friendly content management solutions."
    },

]



export default class Service extends Component {

    render() {

        return (

            <>

                <Box>

                    {/* Arry start Card */}

                    <Grid container spacing={2} className='about_please' >

                        {Cardeatils.map((item, index) => {

                            return (

                                <Grid size={{ lg: 3, md: 6, sm: 12 }}>

                                    <Card sx={{ maxWidth: '100%', borderRadius: '1rem', boxShadow: '0px 2px 35px 2px rgb(187, 205, 255)' }} className='animation_body' key={index} >

                                        <img src={item.src} alt='Dedication_img' className='Card_modify' />

                                        <img src={Card_side} alt='Dedication_img' className='Card_modify' />

                                        <p className='Card_modify_1'>{item.headingmain}</p>
                                        <p className='Card_modify_2'>{item.paragraphmain}</p>

                                        <Box sx={{ paddingLeft: '20px', paddingBottom: '20px' }}>

                                            <Button variant="outlined" className='Card_modify_3' >

                                                <Link to="https://wa.me/qr/PKVRGO5BEECWN1" className='Card_modify_4' >

                                                    Contact Us

                                                </Link>

                                            </Button>

                                        </Box>

                                    </Card>

                                </Grid>
                            )
                        })}

                    </Grid>

                    {/* Arry End Card*/}

                    {/* scroll view start */}

                    <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }} >

                        <Grid size={{ lg: 12, md: 12, sm: 12 }} className='animation_body'>

                            <Box className='Page animation_body' >

                                <Box className='loop' >

                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                                </Box>

                            </Box>

                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12 }} className='animation_body'>

                            <Box className='Page_2 animation_body' >

                                <Box className='loop_2' >

                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                    {/* scroll view End */}

                    {/* I want service Provide start */}

                    <Box sx={{ backgroundColor: '#e2ecf6' }} >

                        <Typography variant='h5' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            color: '#4070f4',
                            fontSize: '130%',
                            className: 'animation_body'
                        }} >Service</Typography>

                    </Box>

                    <Box sx={{ backgroundColor: '#e2ecf6', paddingTop: '10px' }} >

                        <Typography variant='h2' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            fontSize: '150%',
                            className: 'animation_body part_Set',
                            paddingBottom: '20px'
                        }} >What I offer</Typography>

                    </Box>

                    <Grid container spacing={2} className='about_please' >

                        {Serviceprovide.map((item, index) => {

                            return (

                                <Grid size={{ lg: 3, md: 6, sm: 12 }}>

                                    <Card sx={{ maxWidth: '100%', borderRadius: '1rem', boxShadow: '0px 2px 35px 2px rgb(187, 205, 255)' }} className='animation_body service_save' key={index} >

                                        <img src={item.src} alt='Dedication_img' className='Card_modify' />

                                        {/* <img src={Card_side} alt='Dedication_img' className='Card_modify' /> */}

                                        <p className='Card_modify_1'>{item.headingmain}</p>
                                        <p className='Card_modify_2'>{item.paragraphmain}</p>

                                        <Box sx={{ paddingLeft: '20px', paddingBottom: '20px' }}>

                                            <Button variant="outlined" className='Card_modify_3' >

                                                <Link to="https://wa.me/qr/PKVRGO5BEECWN1" className='Card_modify_4' >

                                                    Contact Us

                                                </Link>

                                            </Button>

                                        </Box>

                                    </Card>

                                </Grid>
                            )
                        })}

                    </Grid>

                    {/* I want service Provide start */}

                    {/* scroll view start */}

                    <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }} >

                        <Grid size={{ lg: 12, md: 12, sm: 12 }} className='animation_body'>

                            <Box className='Page animation_body' >

                                <Box className='loop' >

                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                                </Box>

                            </Box>

                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12 }} className='animation_body'>

                            <Box className='Page_2 animation_body' >

                                <Box className='loop_2' >

                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                    <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                    {/* scroll view End */}

                </Box>

            </>

        )

    }

}
