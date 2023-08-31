import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stats from '../public/stats.png';
import Image from 'next/image';
import Yell from '../public/yel.png';
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
     
      <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1  style={{fontSize:"53px",fontFamily:'sans-serif',fontWeight:'500',color:'yellow'}}>Discover Our Benefits</h1>
        <h1 id='discover' style={{fontSize: "27px",fontWeight: "400",fontFamily:'sans-serif'}}>Elevate your financial experience with RWFA DApp – where decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future-forward journey. </h1>
      </Box>
        
          



        <Box
        
      sx={{
        display: 'flex',
        margin:'50px 50px 180px 50px',
        background: 'linear-gradient(180deg, #2B2A26 0%, rgba(42.50, 42.38, 38.43, 0) 100%)', borderRadius: '11px', border: '0.50px #9E9E9E solid', backdropFilter: 'blur(46px)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width: 625,
          height: 400,
        },
      }}
    >
     
   
       
        
        <Paper sx={{background: 'rgba(23.38, 23.38, 23.38, 0.30)', borderRadius: '11px', border: '1px #FFDE2E solid', backdropFilter: 'blur(46px)'  ,padding:'30px'}}>
      <h1 style={{fontSize:"40px",color:'white',fontFamily:'sans-serif'}}>Treasury</h1>
      <div style={{margin:'50px auto'}}>
      <h1 style={{fontSize:"50px",color:'white',fontFamily:'sans-serif'}} >59.000.000,00$</h1>
    <h1 style={{fontSize:"33px",color:'yellow'}} >=</h1>
      <h1 style={{fontSize:"50px",color:'white',fontFamily:'sans-serif'}} >11.111.111 RSC</h1>
       </div>
        </Paper>
        <Paper sx={{background: 'none', borderRadius: '11px', backdropFilter: 'blur(46px)'}}>
      
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',paddingBottom:'20px'}}    >
        <h1 style={{fontSize:"30px",color:'white',fontFamily:'sans-serif',  display:'flex',alignItems:'center',justifyContent:'center'}}  >
         Total Trading Volume 
        </h1>
        <h1 style={{fontSize:'43px',color:'#0CE770',display:'flex',alignItems:'center',justifyContent:'space-around',fontFamily:'sans-serif'}}  >
         CMAX xx%
         <Image style={{width:'10vw'}} src={Stats} alt={Stats} />
        </h1>
      
      </Paper>
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',paddingBottom:'20px',marginTop:'20px'}}   >
      <h1 style={{fontSize:"30px",fontFamily:'sans-serif',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
         Total Trading Volume 
        </h1>
        <h1 style={{fontSize:'43px',color:'#FFE500',display:'flex',alignItems:'center',justifyContent:'space-around',fontFamily:'sans-serif'}}  >
         TITA xx%
         <Image style={{width:'10vw'}} src={Yell} alt={Yell} />
        </h1>
      </Paper>
      
        </Paper>

    </Box>












       
      </Container>
    </React.Fragment>
  );
}