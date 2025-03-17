import React, { Component } from 'react'
import './Home.css'
import { Box } from '@mui/material'
import Home_imge from './Images/Main_img_logo_1.jpg'
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Dedication_img from './Images/Dedication_Card.jpg';
import Smart_work_img from './Images/Smart_Work_Card.png';
import Card_side from './Images/Card_side.jpg';
import Collaboration_img from './Images/Collaboration_Card.jpg';
import Technology_img from './Images/Technology_Card.jpg';
import About_me_img from './Images/About_me_img_1.png';
import signture_main from './Images/SIgnture_main.png'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Typography from '@mui/material/Typography';
import Port_1 from './Images/Purple and White Modern Website Development Facebook Cover.png';
import Port_2 from './Images/Blue and Black Modern Product Development Presentation.png';
import Port_3 from './Images/port_3.png';
import Port_4 from './Images/port_4.png';
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';
import SkyyRider from './Images/Skyy rider Ins.png';
import Techno from './Images/Technoboot.png';
import Devocks from './Images/Devocks_1.jpg';
import Work_1 from './Images/Work_1.jpg';
import Work_main from './Images/Work_main.png';
import Work_5 from './Images/Work_5.jpg';
import Web_Devlopment from './Images/Web Devloper.png';
import Test_1 from './Images/1.png';
import Test_2 from './Images/2.png';
import Test_3 from './Images/3.png';
import Test_4 from './Images/4.png';
import Software_Development from './Images/Software Development.png';
import System_Development from './Images/System Development.png';
import UIUX_Designing from './Images/UIUX Designing.png';
import Location_img from './Images/Location_img.png';
import Phone_img from './Images/Phone_number.png';
import Email_img from './Images/Email_img.png';
import whatsapp_img from './Images/Whatsapp_img.png';
import MapComponent from '../Testimonial/Testimonial.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';



const Item = styled(Paper)(({ theme }) => ({
    boxShadow: 'none',
    ...theme.typography.body2, backgroundColor: '#e2ecf6'
}));

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






export default class Home extends Component {

    render() {

        return (

            <>

                <Box sx={{ flexGrow: 1, marginTop: '80px' }} >

                    <Box sx={{ flexGrow: 1 }}>

                        <Grid container spacing={0}>

                            <Grid size={{ lg: 6, md: 6, sm: 12 }}>

                                {/* <Item> */}

                                <Box className='Home_first_design' >

                                    <Box sx={{ display: 'flex', gap: '2%' }} >
                                        <p className='Font_set' >WEB DESIGNER</p>
                                        <p className='Font_set_1' >AND</p>
                                        <p className='Font_set' >DEVLOPER</p>
                                    </Box>

                                    <Box>

                                        <Box sx={{ display: 'flex', gap: '5%' }}>

                                            <p className='Font_set_2' >Hello</p>
                                            <p className='Font_set_3' >I'm</p>

                                        </Box>

                                        <p className='Font_set_4' >Arpit</p>

                                        <p className='Font_set_5' >I believe that collaboration and creativity are the cornerstones of progress, and I am dedicated to bringing a fresh perspective to every project I undertake.</p>

                                    </Box>

                                    <Box sx={{ marginTop: '40px' }}>

                                        <Button variant="outlined" className='Mouse_select' >

                                            <Link to="/About" className='Mouse_select_1' >

                                                Explore My Work

                                            </Link>

                                        </Button>

                                    </Box>

                                </Box>

                                {/* </Item> */}

                            </Grid>

                            <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                                <Item><img src={Home_imge} alt='Home_img' className='Img_set' /></Item>

                            </Grid>

                        </Grid>

                    </Box>

                </Box>

                <Grid container spacing={2} className='about_please' >

                    {/* Arry start Card */}

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

                                            <Link to="/About" className='Card_modify_4' >

                                                Read More

                                            </Link>

                                        </Button>

                                    </Box>

                                </Card>

                            </Grid>
                        )
                    })}

                    {/* Arry End Card*/}

                </Grid>

                {/* About me start */}

                <Grid container spacing={0} className='About_me '>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='About_button animation_body' >

                        <Box className='About_me_1'>

                            <img src={About_me_img} alt='About_me_img' />

                        </Box>

                        <Link to="https://drive.google.com/file/d/1E4omdge4IK5-JvykL67xt9o5gdDeQTeh/view?usp=sharing"

                            className='Button_thik About_me_button'>

                            <Button variant="outlined" className='About_me_button' >

                                <FileDownloadOutlinedIcon className='input_ready' />

                                <p>Download cv</p>

                            </Button>

                        </Link>

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Details animation_body' >

                        <h5 className='Details_1' >ABOUT ME</h5>

                        <h1 className='Details_2' >I Develop System that Works</h1>

                        <p className='Details_3' >
                            Detail-oriented, analytical, and self-driven programmer with extensive experience building userfacing applications. Efficient and knowledgeable coder with skills in HTML, CSS, React-js, and
                            JavaScript, java programming languages. Coordinated and collaborative team player with attention
                            to detail, graphic design skills, and the ability to contribute to code base improvement initiatives
                            and UX improvement projects.
                        </p>

                        <hr />

                        <Box  >

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Name:</p>
                                <p className='About_font_design_1' >Arpit Ariyan Maharana</p>

                            </Box>

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Age:</p>
                                <p className='About_font_design_1' >22</p>

                            </Box>

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Occupation:</p>
                                <p className='About_font_design_1' >UI/UX Designer</p>

                            </Box>

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Phone:</p>
                                <p className='About_font_design_1' >+91 9348297217</p>

                            </Box>

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Email:</p>
                                <p className='About_font_design_1' >arpitariyanm@gmail.com</p>

                            </Box>

                            <Box sx={{ display: 'flex', gap: '3%', marginLeft: '10%', marginRight: '10%' }} >

                                <p className='About_font_design' >Nationality:</p>
                                <p className='About_font_design_1' >Indian</p>

                            </Box>

                        </Box>

                        <hr />

                        <Box className='About_font_design_2'>

                            <img src={signture_main} alt='signture_main' />

                        </Box>

                    </Grid>

                </Grid >

                {/* About me End */}

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

                {/* My Portfolio Start */}

                <Box sx={{ backgroundColor: '#e2ecf6', paddingTop: '40px' }} >

                    <Typography variant='h5' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: '600',
                        color: '#4070f4',
                        className: 'animation_body'
                    }} >Portfolio</Typography>

                </Box>

                <Box sx={{ backgroundColor: '#e2ecf6', paddingTop: '10px' }} >

                    <Typography variant='h2' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: '600',
                        fontSize: '200%',
                        className: 'animation_body'
                    }} >My Recent Works</Typography>

                </Box>


                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                        <img src={Port_1} alt='Port-1' />

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                        <Box sx={{ marginBottom: '20px', marginTop: '10%', marginLeft: '10%' }}>

                            <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>web design</Typography>
                            <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Software Design for DEVOCKS</Typography>

                        </Box>

                        <p > Website designing is the process of creating and structuring a website to ensure it is visually appealing, user-friendly, and functional. It involves a combination of graphic design, user experience (UX) design, and technical development to deliver a seamless online experience.........</p>

                        <Link to="/About" className='Mouse_select_2' >

                            <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                Explore My Work

                            </Button>

                        </Link>

                    </Grid>

                </Grid>

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                        <img src={Port_2} alt='Port-1' />

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                        <Box sx={{ marginBottom: '20px', marginTop: '10%', marginLeft: '10%' }}>

                            <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Development</Typography>
                            <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Website Development for DEVOCKS Corporation</Typography>

                        </Box>

                        <p >Development is the process of creating, building, and maintaining systems, applications, or structures to meet specific needs or solve problems. It spans various fields, including software development, web development, urban development, and economic development. At its core, development focuses on innovation, efficiency, and sustainability to improve functionality and quality of life........</p>

                        <Link to="/About" className='Mouse_select_2' >

                            <Button variant="outlined" className='Mouse_select_3 animation_body'  >

                                Explore My Work

                            </Button>

                        </Link>

                    </Grid>

                </Grid>

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                        <img src={Port_3} alt='Port-1' />

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                        <Box sx={{ marginBottom: '20px', marginTop: '10%', marginLeft: '10%' }}>

                            <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Branding</Typography>
                            <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Branding for Easy Computers</Typography>

                        </Box>

                        <p >Branding for an IT company is the process of creating a unique identity that differentiates it from competitors and resonates with its target audience. It goes beyond just a logo or tagline; it encompasses the company’s values, mission, culture, and the promise it delivers to clients.......</p>

                        <Link to="/About" className='Mouse_select_2' >

                            <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                Explore My Work

                            </Button>

                        </Link>

                    </Grid>

                </Grid>

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                        <img src={Port_4} alt='Port-1' />

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                        <Box sx={{ marginBottom: '20px', marginTop: '10%', marginLeft: '10%' }}>

                            <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Photography</Typography>
                            <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Security Analysis for DEVOCKS</Typography>

                        </Box>

                        <p >Photography for an IT company plays a crucial role in visually communicating its brand identity, values, and expertise. In a highly competitive industry, high-quality and purposeful photography can enhance credibility, engage audiences, and humanize the brand.......</p>

                        <Link to="/About" className='Mouse_select_2' >

                            <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                Explore My Work

                            </Button>

                        </Link>

                    </Grid>

                </Grid>


                {/* scroll view start */}

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }}>

                        <Box className='Page animation_body' >

                            <Box className='loop' >

                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }}>

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



                {/* Fun Fact Start  */}

                <Grid container spacing={2} className='Fun_effect ' >

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} className='animation_body'>

                        <Box sx={{ marginLeft: '10%', marginRight: '10%', marginTop: '20px' }} >

                            <Typography variant='h6' sx={{ fontFamily: 'Courier New', fontWeight: 600, marginBottom: '10px', color: '#4070f4' }} >Fun Facts</Typography>

                            <Typography variant='h3' sx={{ fontFamily: 'Courier New', fontWeight: 600, marginBottom: '10px' }} >I Develop System that Works</Typography>

                            <Typography variant='body2' sx={{ fontFamily: 'Courier New', fontWeight: 600 }} >This is a new poem, you are a dreamer, do not take notice, you are beautiful, you are my love, you have taken my pain away.</Typography>

                        </Box>

                    </Grid>

                    <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                        <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>

                            <Grid container spacing={2} className='animation_body'>

                                <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                                    <Box sx={{ Width: '200px' }}>

                                        <Card variant="outlined" sx={{ width: '80%', borderRadius: '20px' }}>

                                            <React.Fragment>

                                                <CardContent sx={{ display: 'flex', gap: '6%' }}>

                                                    <CountUp
                                                        start={0}
                                                        end={2}
                                                        duration={6}
                                                        separator=" "
                                                        decimals={0}
                                                        decimal=""
                                                        className='counter'
                                                    />

                                                    <Typography variant='h6' sx={{ marginTop: '3%', fontFamily: '"Courier New"', fontSize: '150%' }}>

                                                        Years of
                                                        Experience

                                                    </Typography>

                                                </CardContent>

                                            </React.Fragment>

                                        </Card>

                                    </Box>

                                </Grid>

                                <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                                    <Box sx={{ Width: '200px' }}>

                                        <Card variant="outlined" sx={{ width: '80%', borderRadius: '20px' }}>

                                            <React.Fragment>

                                                <CardContent sx={{ display: 'flex', gap: '6%' }}>

                                                    <CountUp
                                                        start={0}
                                                        end={12}
                                                        duration={15}
                                                        separator=" "
                                                        decimals={0}
                                                        decimal=""
                                                        className='counter'
                                                    />

                                                    <Typography variant='h6' sx={{ marginTop: '7%', fontFamily: '"Courier New"', fontSize: '150%' }}>

                                                        Total
                                                        clients

                                                    </Typography>

                                                </CardContent>

                                            </React.Fragment>

                                        </Card>

                                    </Box>

                                </Grid>

                            </Grid>

                        </Box>

                        <Box sx={{ marginLeft: '10%', marginRight: '10%', marginTop: '15px' }}>

                            <Grid container spacing={2} className='animation_body'>

                                <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                                    <Box sx={{ Width: '200px' }}>

                                        <Card variant="outlined" sx={{ width: '80%', borderRadius: '20px' }}>

                                            <React.Fragment>

                                                <CardContent sx={{ display: 'flex', gap: '6%' }}>

                                                    <CountUp
                                                        start={0}
                                                        end={10}
                                                        duration={15}
                                                        separator=" "
                                                        decimals={0}
                                                        decimal=""
                                                        className='counter'
                                                    />

                                                    <Typography variant='h6' sx={{ marginTop: '3%', fontFamily: '"Courier New"', fontSize: '150%' }}>

                                                        Projects
                                                        Completed

                                                    </Typography>

                                                </CardContent>

                                            </React.Fragment>

                                        </Card>

                                    </Box>

                                </Grid>

                                <Grid size={{ lg: 6, md: 6, sm: 12 }} >

                                    <Box sx={{ Width: '200px' }}>

                                        <Card variant="outlined" sx={{ width: '80%', borderRadius: '20px' }}>

                                            <React.Fragment>

                                                <CardContent sx={{ display: 'flex', gap: '6%' }}>

                                                    <CountUp
                                                        start={0}
                                                        end={16}
                                                        duration={15}
                                                        separator=" "
                                                        decimals={0}
                                                        decimal=""
                                                        className='counter'
                                                    />

                                                    <Typography variant='h6' sx={{ marginTop: '3%', fontFamily: '"Courier New"', fontSize: '150%' }}>

                                                        Digital
                                                        Products

                                                    </Typography>

                                                </CardContent>

                                            </React.Fragment>

                                        </Card>

                                    </Box>

                                </Grid>

                            </Grid>

                        </Box>

                    </Grid>

                </Grid>

                {/* Fun Fact End  */}


                {/* Success Stories Start */}

                <Box sx={{ backgroundColor: '#e2ecf6' }} >

                    <Typography variant='h5' sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: '"Courier New", Courier, monospace',
                        fontWeight: '600',
                        color: '#4070f4',
                        fontSize: '130%',
                        className: 'animation_body'
                    }} >Success Stories</Typography>

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
                    }} >Awards & Achivements</Typography>

                </Box>

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }} className='Success_1'>

                        <hr />

                        <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Box className='Success_2'>

                                    <img src={SkyyRider} alt='SkyyRider' />

                                </Box>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center', }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Best Developer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>(2022-2023)</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center' }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Full Stack Developer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>Bhubaneswar,Odisha</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }} className='Success_1'>

                        <hr />

                        <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Box className='Success_3'>

                                    <img src={Techno} alt='SkyyRider' />

                                </Box>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center', }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Frontend Developer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>(2023)</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center' }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Full Stack Developer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>Bhubaneswar,Odisha</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }} className='Success_1'>

                        <hr />

                        <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Box className='Success_3'>

                                    <img src={Techno} alt='SkyyRider' />

                                </Box>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center', }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Designer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>(2023)</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center' }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>UI/UX Designer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>Bhubaneswar,Odisha</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }} className='Success_1'>

                        <hr />

                        <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Box className='Success_4'>

                                    <img src={Devocks} alt='SkyyRider' />

                                </Box>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center', }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>Designer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>(2024)</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                            <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>

                                <Item className='Success_2'>

                                    <Box sx={{ textAlign: 'center' }}>

                                        <Typography variant='h6' sx={{ fontFamily: '"Courier New"', fontWeight: '600' }}>UI/UX Designer</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace' }}>Bhubaneswar,Odisha</Typography>

                                    </Box>

                                </Item>

                            </Grid>

                        </Grid>

                        <hr />

                    </Grid>

                </Grid>

                {/* Success Stories End */}


                {/* Work Experienece Start */}

                <Grid container spacing={0} sx={{ backgroundColor: "#e2ecf6", paddingTop: '50px' }} >

                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }} className='Work_1'>

                        <img src={Work_1} alt='Work_1' />

                    </Grid>

                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }} className='Work_2 '>

                        <Typography variant='h5' sx={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            color: '#4070f4',
                            fontSize: '130%',
                            className: 'animation_body',
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginTop: '25px'
                        }} >Work Experience</Typography>

                        <Typography variant='h3' sx={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            className: 'animation_body',
                            marginLeft: '10%',
                            marginRight: '10%'
                        }} >My Experience</Typography>

                        <Grid className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', marginTop: '2%' }}>FULL STACK DEVLOPMENT</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>SkyyRider ( 2022 )</Typography>

                            </Box>

                        </Grid>

                        <box className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', }}>FULL STACK DEVLOPMENT</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>Technoboot ( 2022-2023 )</Typography>

                            </Box>

                        </box>

                        <box className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', }}>UI/UX Designer</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>Technoboot ( 2022-2023 )</Typography>

                            </Box>

                        </box>

                    </Grid>

                </Grid>

                {/* Work Experienece End */}

                {/* Education Deatils Start */}

                <Grid container spacing={0} sx={{ backgroundColor: "#e2ecf6", paddingTop: '50px' }} >

                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }} className='Work_2 '>

                        <Typography variant='h5' sx={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            color: '#4070f4',
                            fontSize: '130%',
                            className: 'animation_body',
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginTop: '25px'
                        }} >Education</Typography>

                        <Typography variant='h3' sx={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontWeight: '600',
                            className: 'animation_body',
                            marginLeft: '10%',
                            marginRight: '10%'
                        }} >My Education</Typography>

                        <Grid className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', marginTop: '2%' }}>Saraswati shishu vidya mandir</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>10th ( 2019 )</Typography>

                            </Box>

                        </Grid>

                        <box className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', }}>Diploma Electrical Engineering</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>Nilachal Polytechnic ( 2019-2022 )</Typography>

                            </Box>

                        </box>

                        <box className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', }}>FULL STACK DEVLOPMENT</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>Skyy Rider Institutions ( 2022 )</Typography>

                            </Box>

                        </box>

                        <box className='Work_3 '>

                            <Card sx={{ width: '10%' }} className='Work_main_1'>

                                <img src={Work_main} alt='Work_main' />

                            </Card>

                            <Box>

                                <Typography variant='h5' sx={{ fontFamily: '"Courier New"', fontWeight: '600', }}>B.Tech Computer Science</Typography>
                                <Typography variant='body2' sx={{ fontFamily: '"Courier New", Courier, monospace', }}>Konark Institute of Science and Technology ( Continue )</Typography>

                            </Box>

                        </box>

                    </Grid>

                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }} className='Work_5'>

                        <img src={Work_5} alt='Work_5' />

                    </Grid>

                </Grid>

                {/* Education Deatils End */}

                {/* scroll view start */}

                <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }}>

                        <Box className='Page animation_body' >

                            <Box className='loop' >

                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>
                                <Typography variant='h1'><b>UI/UX</b><b><i> Designer</i></b><span> From Odisha*</span> </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid size={{ lg: 12, md: 12, sm: 12 }}>

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

                <Box sx={{ backgroundColor: '#e2ecf6' }}>

                    <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }}>

                            <Card sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '20px', boxShadow: 'none' }} >

                                <Grid container spacing={2}>

                                    <Grid size={{ lg: 2, md: 4, sm: 12 }} className='Service_1'>

                                        <img src={Web_Devlopment} alt='Web_Devlopment' />

                                    </Grid>

                                    <Grid size={{ lg: 10, md: 8, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Service_1'>

                                        <p>Web development involves creating and maintaining websites and applications using front-end (HTML, CSS, JavaScript) and back-end (server, databases) technologies. It ensures responsive, user-friendly, and secure digital experiences. Essential for businesses, it combines design and technical skills to build functional, scalable, and engaging online platforms that drive growth and innovation.</p>

                                    </Grid>

                                </Grid>

                            </Card>

                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }}>

                            <Card sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '20px', boxShadow: 'none' }} >

                                <Grid container spacing={2}>

                                    <Grid size={{ lg: 2, md: 4, sm: 12 }} className='Service_2'>

                                        <img src={Software_Development} alt='Software_Development' />

                                    </Grid>

                                    <Grid size={{ lg: 10, md: 8, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Service_2'>

                                        <p>Software development is the process of designing, coding, testing, and maintaining applications or systems to meet user needs. It involves programming languages, frameworks, and tools to create functional, scalable, and secure solutions. From mobile apps to enterprise software, it drives innovation, efficiency, and problem-solving across industries, transforming ideas into impactful digital products.</p>

                                    </Grid>

                                </Grid>

                            </Card>

                        </Grid>

                    </Grid>

                </Box>

                <Box sx={{ backgroundColor: '#e2ecf6', paddingTop: '20px', paddingBottom: '20px' }}>

                    <Grid container spacing={2} sx={{ marginLeft: '10%', marginRight: '10%' }}>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }}>

                            <Card sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '20px', boxShadow: 'none' }} >

                                <Grid container spacing={2}>

                                    <Grid size={{ lg: 2, md: 4, sm: 12 }} className='Service_1'>

                                        <img src={UIUX_Designing} alt='UIUX_Designing' />

                                    </Grid>

                                    <Grid size={{ lg: 10, md: 8, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Service_1'>

                                        <p>UI/UX designing focuses on creating intuitive, visually appealing, and user-friendly digital interfaces. UI (User Interface) deals with design aesthetics, while UX (User Experience) ensures seamless functionality and usability. Through research, prototyping, and testing, designers enhance user satisfaction, improve accessibility.</p>

                                    </Grid>

                                </Grid>

                            </Card>

                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }}>

                            <Card sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '20px', boxShadow: 'none' }} >

                                <Grid container spacing={2}>

                                    <Grid size={{ lg: 2, md: 4, sm: 12 }} className='Service_2'>

                                        <img src={System_Development} alt='System_Development' />

                                    </Grid>

                                    <Grid size={{ lg: 10, md: 8, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Service_3'>

                                        <p>System development involves designing, building, and implementing software or hardware systems to meet specific organizational needs. It includes planning, analysis, design, coding, testing, and maintenance. The process ensures efficient, scalable, and secure solutions, integrating technology to streamline operations, enhance productivity, and support business goals, delivering tailored systems for optimal performance and user satisfaction.</p>

                                    </Grid>

                                </Grid>

                            </Card>

                        </Grid>

                    </Grid>

                </Box>

                {/* I want service Provide End */}



                {/* Testimonial start */}
                <Box className='Swiper_best'>

                    <Grid container spacing={2} sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '40px', paddingBottom: '40px' }} >

                        <Grid size={{ lg: 6, md: 6, sm: 12}}>

                            <Box className='Swipe_1'>

                                <h6>Testimonials</h6>
                                <h1>What People Say</h1>

                            </Box>

                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='Swiper_mian'>

                            <Swiper
                                slidesPerView={'auto'}
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"

                            >

                                <SwiperSlide className='Main_test_img'>

                                    <img src={Test_1} alt='Mountain' />

                                </SwiperSlide>

                                <SwiperSlide className='Main_test_img'>

                                    <img src={Test_2} alt='Mountain' />

                                </SwiperSlide>

                                <SwiperSlide className='Main_test_img'>

                                    <img src={Test_3} alt='Mountain' />

                                </SwiperSlide>

                                <SwiperSlide className='Main_test_img'>

                                    <img src={Test_4} alt='Mountain' />

                                </SwiperSlide>


                            </Swiper >

                        </Grid>

                    </Grid>

                </Box>

                {/* Testimonial End */}


                <Box sx={{ paddingTop: '20px' }} >

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
