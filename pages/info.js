import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from "../components/navbar";
import { Container } from '@mui/system';
import Last from '../components/Lastfoot';
import About from '../public/images/about.png';
import Image from 'next/image';



export default function SimplePaper() {
  return (
    <div>
        <Navbar />
        <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'70px' }}>
        <h1 style={{fontSize:"76px",color:'#FFE500',textAlign:'left',paddingLeft:'76px'}}>About Us</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif',textAlign:'left',paddingLeft:'76px',paddingRight:'76px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.
        <br></br>
        <br></br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. </h1>
      </Box>
        </Container>
        <h1 style={{fontSize:"56px",fontFamily:'sans-serif',color:'#FFE500',textAlign:'left',paddingLeft:'106px',marginTop:'200px',marginBottom:'30px'}}>License</h1>
    <Box
        sx={{
        display: 'flex',
        margin:'0 110px 110px 110px',
        borderRadius:'25px',
        padding:'40px',

        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1295,
          height: 290,
        },
      }}
    >
   
     <Image src={About} alt={About} style={{width:"80vw",height:'100vh'}} />
      
    </Box>
     

<Last />


    </div>
  );
}