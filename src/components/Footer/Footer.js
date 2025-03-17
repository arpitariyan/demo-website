import { Box } from '@mui/material';
import React, { Component } from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Main_logo from './images/PROJECT.png';
import BusinessIcon from '@mui/icons-material/Business';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';




export default class Footer extends Component {

  render() {

    return (

      <>

        <Box sx={{ backgroundColor: '#fbfbfb' }} className='Footer_set'>

          <Grid container spacing={2} sx={{ paddingTop: '25px' }}>

            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Icon_set_1'>

              <p>Get connected with us on social networks:</p>

            </Grid>

            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>

              <Link to="https://www.facebook.com/share/1HYT4jjAkx/?mibextid=qi2Omg" className='Icon_set'>

                <FacebookIcon />

              </Link>

              <Link to="https://www.instagram.com/ll._designer_.ll_.uiux_.1?igsh=amxzamd0OWxpaWhi" className='Icon_set'>

                <InstagramIcon />

              </Link>

              <Link to="https://www.linkedin.com/in/arpit-ariyan-maharana-21a62524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='Icon_set'>

                <LinkedInIcon />

              </Link>

              <Link to="https://github.com/arpitariyan" className='Icon_set'>

                <GitHubIcon />

              </Link>

              <Link to="https://wa.me/qr/PKVRGO5BEECWN1" className='Icon_set'>

                <WhatsAppIcon />

              </Link>

            </Grid>

          </Grid>

          <hr />

          <Grid container spacing={2} sx={{ paddingTop: '25px', display: 'flex', justifyContent: 'center' }}>

            <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} className='Main_logo_1'>

              <img src={Main_logo} alt='Main_logo' />

            </Grid>

            <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} className='pages_set'>

              <Box>

                <h5>PAGES</h5>

                <Link to="/" className='Icon_set_2'>

                  <HomeOutlinedIcon />
                  <p>Home</p>

                </Link>

                <Link to="/About" className='Icon_set_2'>

                  <AutoAwesomeMotionOutlinedIcon />
                  <p>About</p>

                </Link>

                <Link to="/Service" className='Icon_set_2'>

                  <MiscellaneousServicesOutlinedIcon />
                  <p>Service</p>

                </Link>

                <Link to="/Contact" className='Icon_set_2'>

                  <PermContactCalendarOutlinedIcon />
                  <p>Contact</p>

                </Link>

              </Box>

            </Grid>

            <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} >

              <Box >

                <h5>CONTACT</h5>

                <Box className='Icon_set_3' sx={{ display: 'flex', gap: '2%' }}>

                  <BusinessIcon />
                  <p>Rasulgarh,Bhubaneswar,Khordha 751010</p>

                </Box>

                <Box className='Icon_set_3' sx={{ display: 'flex', gap: '2%' }}>

                  <MarkunreadOutlinedIcon />
                  <p>arpitariyanm@gmail.com</p>

                </Box>

                <Box className='Icon_set_3' sx={{ display: 'flex', gap: '2%' }}>

                  <LocalPhoneOutlinedIcon />
                  <p>+91 9348297217</p>

                </Box>

              </Box>

            </Grid>

          </Grid>

          <hr />

          <Grid container spacing={0}>

            <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }} className='Copyright'>

              <p>© 2025 Copyright:</p>
              <h6>Project Creation</h6>

            </Grid>

          </Grid>

        </Box>

      </>

    )

  }

}
