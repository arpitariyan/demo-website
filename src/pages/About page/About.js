import React, { Component } from 'react'
import './About.css';
import '../Home page/Home.css';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import About_me_img from '../Home page/Images/About_me_img_1.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import signture_main from '../Home page/Images/SIgnture_main.png';
import Typography from '@mui/material/Typography';
import Port_1 from './images/Attdance_and_payrolls.jpg';
import Port_2 from './images/Whats_app_bot.jpg';
import Port_3 from './images/Leraing_management_system.jpg';
import Port_4 from './images/Squal.jpg';
import Port_5 from './images/TMS.jpg';
import Port_6 from './images/Project_Developments.jpg';
import MapComponent from '../Testimonial/Testimonial.js';
import Location_img from '../Home page/Images/Location_img.png';
import Phone_img from '../Home page/Images/Phone_number.png';
import Email_img from '../Home page/Images/Email_img.png';
import whatsapp_img from '../Home page/Images/Whatsapp_img.png';




export default class About extends Component {

    render() {

        return (

            <>

                <Box className='About_page_me'>

                    {/* About me start */}

                    <Grid container spacing={0} className='About_me '>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} className='About_button animation_body' >

                            <Box className='About_me_1'>

                                <img src={About_me_img} alt='About_me_img' />

                            </Box>

                            <Link to="#"

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

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>web design</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Attendance and Payroll</Typography>

                            </Box>

                            <p >Attendance and Payroll: The Attendance and Payroll section allows you to track the attendance of the employee, hours worked, leave, etc. It automates salary calculations, which are calculated and deducted from their payroll systems and integrated with other systems for compliance. On the other hand, employees are able to also manage their own records to ensure that the data is correct Managers are able to manage the data, generate reports, approve timesheets, and even just view their own data to ensure that it matches what exists in the database, allowing for their payroll to be correct.</p>

                            <Link to="#" className='Mouse_select_2' >

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

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>web design</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Whatsapp bulk message sender</Typography>

                            </Box>

                            <p >The ability to send bulk messages via WhatsApp is a functionality provided to businesses and organizations through the WhatsApp Bulk Message Sender interface. Admins and marketing teams may be responsible for managing campaigns, uploading contact lists, and scheduling messages. Users have the ability to customize content with customizable templates, monitor delivery status, and compliance with WhatsApp policies, making the service fully suitable for promotions, alerts, and customer engagement.</p>

                            <Link to="#" className='Mouse_select_2' >

                                <Button variant="outlined" className='Mouse_select_3 animation_body' >

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

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>web design</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Learning Management System</Typography>

                            </Box>

                            <p >A Learning Management System (LMS) interface allows educators, instructors, and institutions to design, administer, and deliver online courses. This works by all admins uploading materials and tracking their progress through marking and by generating reports, while learners can access materials complete assignments and take assessments. Schools, services, and organizations can capitalize on this ideal, which enhances education/training efficiency.</p>

                            <Link to="#" className='Mouse_select_2' >

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

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%', marginRight: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Application design</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Social Media Application</Typography>

                            </Box>

                            <p >Social Media Application interface are used to create profiles, share contents and interact with other users through their posts, messages, and comments. You can control user activity, maintain your rules, and review engagement statistics. Along with supporting multimedia sharing, real-time interactions, and community building, it serves as a suitable platform for individuals, businesses, and influencers, allowing for seamless communication and content distribution across platforms.</p>

                            <Link to="#" className='Mouse_select_2' >

                                <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                    Explore My Work

                                </Button>

                            </Link>

                        </Grid>

                    </Grid>

                    <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                            <img src={Port_5} alt='Port-1' />

                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%', marginRight: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Web design</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>Team Management System</Typography>

                            </Box>

                            <p >The Team Management System interface organizes the collaboration of managers and team leaders by enabling them to effectively track progress and organize tasks. Responsibility allocation, deadline assignment, and performance monitoring can be done by all users through dashboards and reporting tools. The system is ideal for businesses, remote teams, and projects, as it enhances productivity, communication, and accountability which collectively streamline goal achievement and coordination amongst teams.</p>

                            <Link to="#" className='Mouse_select_2' >

                                <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                    Explore My Work

                                </Button>

                            </Link>

                        </Grid>

                    </Grid>

                    <Grid container spacing={0} sx={{ backgroundColor: '#e2ecf6' }}>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod animation_body'>

                            <img src={Port_6} alt='Port-1' />

                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }} className='Classic_mod_2 animation_body'>

                            <Box sx={{ marginBottom: '20px', marginTop: '5%', marginLeft: '10%', marginRight: '10%' }}>

                                <Typography component="span" variant='h6' sx={{ fontFamily: ' monospace ', fontWeight: 500 }}>Development</Typography>
                                <Typography component="span" variant='h5' sx={{ marginLeft: '5%', fontFamily: '"Courier New", Courier, monospace ' }}>All Project Development</Typography>

                            </Box>

                            <p >React's growth requires responsive and UI-driven user interfaces with the aid of reusable components. Developers build SPAs and manage state profficiently using Redux or Context API. It is also ideal for front end developers and teams due to its ease of integration with APIs, enhancement of business and start-up performance through the virtual DOM, and providing scalability and maintainability to web applications.</p>

                            <Link to="#" className='Mouse_select_2' >

                                <Button variant="outlined" className='Mouse_select_3 animation_body' >

                                    Explore My Work

                                </Button>

                            </Link>

                        </Grid>

                    </Grid>

                    {/* My Portfolio End */}

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

                    {/* Contact Us start */}

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

                      {/* Contact Us End */}

                </Box>

            </>

        )

    }

}



