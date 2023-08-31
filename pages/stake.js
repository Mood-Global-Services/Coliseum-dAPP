import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from "../components/navbar";
import { Container } from '@mui/system';
import Boxchart from '../components/stakechart';
import Ns from "../public/images/ns.png";
import Is from '../public/images/l.png';
import Ta from '../public/images/ta.png';
import Er from '../public/images/er.png';
import Image from 'next/image';
import Details from "../components/table";
import Last from '../components/Lastfoot';
import Footer from '../components/Footer';
import Slider from '../components/slider';
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from 'react';
import StakingIn from '../components/stakinginfo.js';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { Button } from '@chakra-ui/react';

export default function SimplePaper() {
  const [amount, setAmount] = useState();

  const address = useAddress();

  
  const { contract: approveContract } = useContract("0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747");
  const { mutateAsync: approve, isLoading: isApproving } = useContractWrite(approveContract, "approve");

  const { contract: stakeContract } = useContract("0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9");
  const { mutateAsync: stakeCMAX, isLoading } = useContractWrite(stakeContract, "stakeCMAX")

  const handleStake = async () => {
    try {
      // First, execute the 'approve' action
      await executeApproveAction();

      // Then, if the 'approve' action is successful, proceed with the 'RequestToken' action
      if (!isApproving) {
        await executeStakeTokenAction();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const executeApproveAction = async () => {
    try {
      const approveAmount = amount; // Use the 'amount' state value
      const spenderAddress = "0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9";

      // Execute the 'approve' action
      await approve({ args: [spenderAddress, approveAmount] });
    } catch (error) {
      console.error("Error during 'approve' action:", error);
      throw error;
    }
  };

 

  const executeStakeTokenAction = async () => {
    try {
      // Execute the 'RequestToken' action
      await stakeCMAX({ args: [amount] });
    } catch (error) {
      console.error("Error during 'RequestToken' action:", error);
      throw error;
    }
  };

  



  return (
    <div>
        <Navbar />
        <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'70px' }}>
        <h1 id='stakinghead' style={{color:'#FFE500'}}>Staking Benefits</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400",fontFamily:'sans-serif',textAlign:'left',paddingLeft:'76px',paddingRight:'76px'}}>Immerse yourself in a dynamic visual tour showcasing the RWFA DApps transformative capabilities, from secure transactions to decentralized empowerment.</h1>
      </Box>
        </Container>
    <Box
        sx={{
        display: 'flex',
        marginTop:'80px',
        borderRadius:'25px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1295,
          height: 290,
        },
      }}
    >
      <Paper sx={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',display:'flex',alignItems:'center',justifyContent:'center'  }} >
      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
      }}
    >
    <Box> 
        <Image src={Er} alt={Ns} />
      </Box>

      <Box> 
        <Image src={Is} alt={Ns} />
      </Box>
      <Box> 
        <Image src={Ta} alt={Ns} />
      </Box>

      <Box> 
        <Image src={Ns} alt={Ns} />
      </Box>
</Box>
     
        </Paper>
    </Box>

   





    <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'150px'}}>
        <h1 style={{fontSize:"43px",color:'#FFE500',textAlign:'left',paddingLeft:'105px',marginBottom:'30px'}}>Staking Pool</h1>
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
          height: 668,
        },
      }}
    >
      <Paper sx={{background: 'linear-gradient(180deg, #282531 0%, rgba(40.32, 37.47, 48.87, 0) 100%)', borderRadius: '8px', border: '0.50px #595073 solid', backdropFilter: 'blur(164px)'}} > 
      <Boxchart />
      </Paper>
    </Box>




    <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'250px'}}>
       
      </Box>
   




    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '67px',
    background: 'linear-gradient(157deg, black,#393737)',
        marginBottom:'150px',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 640,
          height: 449,
        },
      }}
    >
      
     
      <Paper sx={{background: '#282531', borderRadius: '8px',display:'grid'}}>
      <h1 style={{fontSize:"45px",color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif'}}>Stake Tokens</h1>
      <input
        value={amount}
        placeholder="Just put Stake amount"
       style={{display: 'flex',
       fontFamily:'sans-serif',
       fontSize:'30px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '30px',
        borderRadius: '10px' }}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button style={{padding:'5px 30px 5px 30px',margin:'auto',background:'linear-gradient(178deg, yellow,white)',color:'black',fontFamily:'sans-serif',fontSize:'60px',borderRadius:'10px'}}  onClick={handleStake}>Stake Token</button>
      
    
        </Paper>
        <Paper sx={{background: '#282531', borderRadius: '8px',display:'grid'}}>
      <h1 style={{fontSize:"45px",color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif'}}> Tokens Staked</h1>
     
      <h1 style={{fontSize:"90px",fontFamily:"sans-serif",color:'black',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(356deg, #cfcfcf,#f1ea09)',margin:'auto',padding:'inherit',borderRadius:'10px'}}>
       
      <StakingIn />
      </h1>
      
     
        </Paper>
    </Box>






    <Container maxWidth={400}>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20,marginTop:'140px'}}>
        <h1 style={{fontSize:"43px",color:'yellow',textAlign:'left',paddingLeft:'76px',marginBottom:'30px'}}>Staking Stats</h1>
      </Box>
      </Container>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom:'150px',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 640,
          height: 449,
        },
      }}
    >
      
     
      <Paper sx={{background: '#282531', borderRadius: '8px',display:'grid'}}>
      <h1 style={{fontSize:"30px",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>Top Holders</h1>
        <Details />
        </Paper>
      <Paper sx={{ background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: '11px', border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',display:'grid'}} >
      <h1 style={{fontSize:"33px",color:'white',padding:'30px'}}>CMAX Price</h1>
        <Boxchart />
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