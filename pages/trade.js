import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from "../components/navbar";
import { Container } from '@mui/system';
import Boxchart from '../components/boxchart';
import First from '../public/images/Frame.png';
import Image from 'next/image';
import {
  Stat,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
import Tita from '../public/images/tita.png';
import Sec from "../public/images/sec.png";
import Fourth from "../public/images/fourth.png";
import Fifth from "../public/images/fifth.png";
import Sixth from "../public/images/sixth.png";
import Third from '../public/images/third.png';
import Back from "../public/images/back.png";
import Footer from '../components/Footer';
import Last from '../components/Lastfoot';
import Slider from '../components/slider';

export default function SimplePaper() {
  return (
    <div>
        <Navbar />
    <Box
      sx={{
        display: 'flex',
        marginTop:'140px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 425,
          height: 386,
        },
      }}
    >
     
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Tita ETF</h1>
        <Boxchart />
        </Paper>
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Coming Soon</h1>
        <Image src={First} alt={First} width={500} height={500} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Coming Soon</h1>
        <Image src={First} alt={First} width={500} height={500} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Coming Soon</h1>
        <Image src={First} alt={First} width={500} height={500} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Coming Soon</h1>
        <Image src={First} alt={First} width={500} height={500} />
        </Paper>
        <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <h1 style={{fontSize:"33px",color:'white'}}>Coming Soon</h1>
        <Image src={First} alt={First} width={500} height={500} />
        </Paper>

    </Box>

    <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'140px',marginBottom:'40px' }}>
        <h1 style={{fontSize:"43px",color:'yellow'}}>Trending products</h1>
      </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 647,
          height: 88,
        },
      }}
    >
    
      <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>1</h1>
      <Image style={{margin:'0 20px'}} src={Tita} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >Tita</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'#09f309',marginLeft:'336px'}}>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>
        <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>2</h1>
      <Image style={{margin:'0 20px'}} src={Sec} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >Pepe</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'#09f309',marginLeft:'320px'}}>
      <StatArrow type='increase' />
      29.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>

     

        <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>3</h1>
      <Image style={{margin:'0 20px'}} src={Fourth} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >Aptos</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'#09f309',marginLeft:'316px'}}>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>


        <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>4</h1>
      <Image style={{margin:'0 20px'}} src={Third} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >Shiba Inu</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'red',marginLeft:'276px'}}>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>


        <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>5</h1>
      <Image style={{margin:'0 20px'}} src={Sixth} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >Qunat</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'red',marginLeft:'316px'}}>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>


        <Paper sx={{background: '#282531',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'white'}}>6</h1>
      <Image style={{margin:'0 20px'}} src={Fifth} alt={First} width={50} height={50} />
      <h1 style={{color:'white'}} >WorldCoin</h1>
      <StatGroup>
  <Stat>
    <StatHelpText sx={{color:'red',marginLeft:'266px'}}>
      <StatArrow type='decrease' />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
        </Paper>
    </Box>

    <Container  maxWidth={400}>
      <Box  sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'150px' }}>
        
        <div>
         
          <h1 style={{fontSize:"43px",color:'yellow',fontFamily:'sans-serif'}}>Our Partners</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif'}}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through RWFA DApp. Your participation drives our collective journey toward decentralized excellence. </h1>
        <br></br>
        <Slider />
         
       
        </div>
      </Box>   
      </Container>


    <Container  maxWidth={400}>
      <Box  sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'150px',borderTop:'2px solid black' }}>
        
        <div className='Items'>
          <div className='content'>
          <h1 style={{fontSize:"43px",color:'yellow',fontFamily:'sans-serif'}}>Join Our Community</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif'}}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through RWFA DApp. Your participation drives our collective journey toward decentralized excellence. </h1>
        <br></br>
        <Footer />
          </div>
       
        </div>
      </Box>   
      </Container>

<Last />
    
    </div>
  );
}