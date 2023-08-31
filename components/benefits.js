import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import One from "../public/one.png";
  import Paper from '@mui/material/Paper';
  import Second from '../public/two.png';
  import Third from '../public/three.png';
  import Fourth from '../public/fourth.png';
  import Fifth from '../public/fifth.png';
  import Sixth from '../public/sixth.png';
  import Footer from '../components/Footer';
  import { Container } from '@mui/system';
  import Slider from './slider';
  
  function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        h={700}
        shadow={'xl'}
        background={'#5C28AF85'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
      >
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <div>
        <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1 id='headiscover' style={{fontSize:"53px",fontFamily:'sans-serif',fontWeight:'500',color:'yellow'}}>Discover Our Benefits</h1>
        <h1 id='discover'   style={{fontSize: "27px",fontWeight: "400",fontFamily:'sans-serif'}}>Elevate your financial experience with RWFA DApp – where decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future-forward journey. </h1>
      </Box>
      <Box
      sx={{
        display: 'flex',
        marginTop:'80px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: 425,
          height: 700,
        },
      }}
    >
     
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px',display:'grid'}}>
      
        <Image src={One} alt={One} style={{width:'7vw'}} />
        <h1 style={{fontSize:"33px",color:'#FFF931'}}>SEAMLESS FINANCIAL INCLUSION</h1>
        <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white'}}>Join a platform designed to bridge the gap between traditional financial systems and the digital world, ensuring access to financial services for all.</h1>

        </Paper>
      <Paper sx={{display:'grid',background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
      <Image src={Second} alt={One} style={{width:'7vw'}} />
      <h1 style={{fontSize:"33px",color:'#FFF931'}}>EFFORTLESS CROSS-BORDER TRANSACTIONS</h1>
       <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white' }} >Send and receive funds globally without the complexities of traditional banking systems, making international transactions faster and more cost-effective  </h1>
        </Paper>
        <Paper sx={{display:'grid',background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
        <Image src={Third} alt={One} style={{width:'7vw'}} />
      <h1 style={{fontSize:"33px",color:'#FFF931'}}>SMART CONTRACT CAPABILITIES</h1>
       <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white'  }} >Leverage smart contracts to automate agreements and transactions, ensuring transparency and eliminating the need for intermediaries   </h1>
        </Paper>
        <Paper sx={{display:'grid',background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
        <Image src={Fourth} alt={One} style={{width:'7vw'}} />
      <h1 style={{fontSize:"33px",color:'#FFF931'}}>ENHANCED SECURITY</h1>
      <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white'  }} >Experience enhanced security through blockchain technology, providing tamper-resistant records and advanced encryption to protect your data and transactions </h1>
       
        </Paper>
        <Paper sx={{display:'grid',background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
        <Image src={Fifth} alt={One} style={{width:'7vw'}} />
      <h1 style={{fontSize:"33px",color:'#FFF931'  }}>REDUCED FEES</h1>
      <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white'  }} >Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions </h1>
        
        </Paper>
        <Paper sx={{display:'grid',background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:'30px'}}>
        <Image src={Sixth} alt={One} style={{width:'7vw'}} />
      <h1 style={{fontSize:"33px",color:'#FFF931'  }}>DECENTRALIZED CONTROL</h1>
      <h1 style={{fontFamily:'sans-serif',fontSize:'22px',color:'white'  }} >Enjoy the power of decentralization, where users have more control over their assets and transactions, reducing dependence on intermediaries  </h1>
        
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
    </div>

    );
  }
  