import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from "../components/navbar";
import { Container } from '@mui/system';
import Boxchart from '../components/stakechart';
import Ns from "../public/usdc.png";
import Is from '../public/images/l.png';
import Ta from '../public/images/ta.png';
import Er from '../public/images/er.png';
import Image from 'next/image';
import Details from "../components/table";
import Last from '../components/Lastfoot';
import Footer from '../components/Footer';
import Usdc from '../components/usdc';
import { useTokenBalance, useContract,useAddress } from "@thirdweb-dev/react";
import Arb from '../components/arb';
import Arblogo from '../public/arb.png';
import Ava from '../public/ava.png';
import Pol from '../public/pol.png';
import Fan from '../public/fan.png';
import Eth from '../public/eth.png';
import Op from '../public/op.png';
import Bnb from '../public/bnb.png';

export default function SimplePaper() {
  const address = useAddress();
  return (
    <div>
        <Navbar />
        <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'70px' }}>
        <h1 style={{fontSize:"76px",color:'#FFE500',textAlign:'left',paddingLeft:'76px'}}>Sebastian Mathew</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif',textAlign:'left',paddingLeft:'76px',paddingRight:'76px'}}>1234 NW Bobcat Lane, St. Robert, MO 65584-5678.  </h1>
        <p style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif',textAlign:'left',paddingLeft:'76px',paddingRight:'76px'}}  >Wallet address: {address}</p>
      </Box>
        </Container>
    
   





    <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'150px'}}>
       
      </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1295,
          height: 738,
        },
      }}
    >
        
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)' }} > 
      <h1 style={{fontSize:"43px",color:'#FFE500',textAlign:'left',paddingLeft:'105px',marginBottom:'30px',paddingTop:'30px'}}>P&L</h1>
      <Boxchart />
      </Paper>
    </Box>







    <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'140px'}}>
        <h1 style={{fontSize:"43px",color:'yellow',textAlign:'left',paddingLeft:'76px',marginBottom:'30px',fontFamily:'sans-serif'}}>Holdings</h1>
      </Box>
      </Container>

   


      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'30px'}}>
       
       </Box>
     <Box
       sx={{
         display: 'flex',
         alignItems: 'center',
         marginBottom:'286px',
         justifyContent: 'center',
         flexWrap: 'wrap',
         '& > :not(style)': {
           m: 1,
           width: 1295,
           height: 738,
         },
       }}
     >
         
       <Paper sx={{background: '#282531', borderRadius: '8px', border: '0.50px #595073 solid', backdropFilter: 'blur(164px)',display:'flex',alignItems:'center',justifyContent:'center'}} > 
      
       


       <Box
      sx={{
        display: 'flex',
     
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 325,
          height: 186,
        },
      }}
    >
     
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>USDC</h1>
      <Image style={{width:'4vw'}} src={Ns} alt={Ns} />
        <Usdc />
        </Paper>
      
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>ARB</h1>
      <Image style={{width:'4vw'}} src={Arblogo} alt={Arblogo} />
     <Arb />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>OP</h1>
      <Image style={{width:'4vw'}} src={Op} alt={Op} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Fantom</h1>
      <Image style={{width:'9vw'}} src={Fan} alt={Fan} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>MATIC</h1>
      <Image style={{width:'4vw'}} src={Pol} alt={Pol} />
        </Paper>

        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>ETH</h1>
      <Image style={{width:'4vw'}} src={Eth} alt={Eth} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>AVALANCHE</h1>
      <Image style={{width:'4vw'}} src={Ava} alt={Ava} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>BNB</h1>
      <Image style={{width:'4vw'}} src={Bnb} alt={Bnb} />
        </Paper>
    </Box>
       </Paper>
     </Box>
<Last />
    </div>
  );
}