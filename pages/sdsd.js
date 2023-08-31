'use client'
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import { renderPaperCheckoutLink } from "@paperxyz/js-client-sdk";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box } from '@chakra-ui/react';
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import ChartLineChart  from '../components/charts'; // Adjust the path as needed
import Nft from '../components/nfts';
import { useAddress } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Swap from '../components/swap';
import Titabalance from '../components/tita';


export default function Component() {
  const [amount, setAmount] = useState('');
  const [burnamount, setBurnamount] =useState();
  const address = useAddress();

  const openCheckout = () => renderPaperCheckoutLink({
    checkoutLinkUrl: "https://withpaper.com/checkout/f6a59b0d-4c21-4c29-a5c7-499b818f7a54",
  });
  const [numberOfNFTs, setNumberOfNFTs] = useState(1); // Default to 1 NFT
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount to 0
  // ... other state variables ...
  
  const { contract: approveContract } = useContract("0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747");
  const { mutateAsync: approve, isLoading: isApproving } = useContractWrite(approveContract, "approve");

  const { contract: titaTokenContract } = useContract("0x00f35860FA16166B0A83E4424807CAe4AFC69Faf"); // Replace with your TitaToken address
  const { mutateAsync: titaTokenApprove, isLoading: isTitaTokenApproving } = useContractWrite(titaTokenContract, "approve");


  const { contract: requestTokenContract } = useContract("0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9");
  const { mutateAsync: requestToken, isLoading: isRequestingToken } = useContractWrite(requestTokenContract, "requestToken");
  const { mutateAsync: burnToken, isLoading: isBurningToken } = useContractWrite(requestTokenContract, "burnToken");

  const handleMint = async () => {
    try {
      // First, execute the 'approve' action
      await executeApproveAction();

      // Then, if the 'approve' action is successful, proceed with the 'RequestToken' action
      if (!isApproving) {
        await executeRequestTokenAction();
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

 

  const executeRequestTokenAction = async () => {
    try {
      // Execute the 'RequestToken' action
      await requestToken({ args: [address, amount] });
    } catch (error) {
      console.error("Error during 'RequestToken' action:", error);
      throw error;
    }
  };







  const handleBurn = async () => {
    try {
      // First, execute the 'approve' action
      await Titapprove();

      // Then, if the 'approve' action is successful, proceed with the 'RequestToken' action
      if (!isApproving) {
        await executeBurnTokenAction();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const Titapprove = async () => {
    try {
      const approveAmount = burnamount; // Use the 'amount' state value
      const spenderAddress = "0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9";

      // Execute the 'approve' action
      await titaTokenApprove({ args: [spenderAddress, approveAmount]});
    } catch (error) {
      console.error("Error during 'approve' action:", error);
      throw error;
    }
  };

  const executeBurnTokenAction = async () => {
    try {
      // Execute the 'RequestToken' action
      await burnToken({ args: [burnamount] });
    } catch (error) {
      console.error("Error during 'RequestToken' action:", error);
      throw error;
    }
  };



  useEffect(() => {
    // Calculate the total amount whenever the input amount changes
    if (amount) {
      const amountNumber = parseFloat(amount);
      const fee = (amountNumber * 0.3) / 100; // 0.3% fee
      const calculatedTotal = amountNumber + fee;
      setTotalAmount(calculatedTotal);
    } else {
      setTotalAmount(0);
    }
  }, [amount]);

  // Function to handle changes in the number of NFTs input field
  const handleNumberOfNFTsChange = (event) => {
      setNumberOfNFTs(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // Function to handle changes in the user wallet address input field
  const handleWalletAddressChange = (event) => {
      setUserWalletAddress(event.target.value);
  };
  // Function to handle the mint button click
  const handleMintButtonClick = () => {
      // You can use numberOfNFTs and userWalletAddress here to mint NFTs
      console.log("Number of NFTs:", numberOfNFTs);
      console.log("User Wallet Address:", userWalletAddress);
  };

   // Function to handle changes in the amount input field and update the total amount spent
  // Inline CSS styles
  const inputStyle = {
    padding: '10px',
    fontSize: '23px',
    color:"black",
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    fontFamily:'sans-serif'
  };

  return (
    <div>
      <Navbar />
      <h1 style={{fontSize:"43px",marginTop:'100px',paddingLeft:'100px'}}>Tita ETF</h1>
    <div className="box" style={{marginBottom:"140px",display:'flex',flexWrap:'wrap',alignItems:"center",justifyContent:'center'}}>

   





    <Box
    id="tradechart"
      sx={{
        display: 'flex',
        background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', backdropFilter: 'blur(46px)',flexShrink:'0',borderRadius:'11px', border: '0.50px #BFBFBF solid',padding:'10px',
        
        justifyContent: 'center',
        marginLeft:'100px',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 814,
          height: 692,
        },
      }}
    >
      
      <ChartLineChart />
     
    
    </Box>







      <Box  h='692px' p={4} color='white' style={{margin:"auto",borderRadius:"10px",width:"min-content",background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)',border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)'  }}  >
      <Tabs variant='unstyled' >
      
  <TabList style={{background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: 11, border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)',padding:"10px"}}>
    <Tab _selected={{ color: 'black',bg:'yellow' }} style={{borderRadius:"5px",padding:"10px 50px 10px 50px",fontFamily:'sans-serif',fontSize:'23px'}}>Swap</Tab>
    <Tab _selected={{ color: 'black', bg: 'yellow' }} style={{borderRadius:"5px",padding:"10px 50px 10px 50px",fontFamily:'sans-serif',fontSize:'23px'}}  >Mint/Burn</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <div id='swapstyle'>
      <Swap />
      </div>
     
    </TabPanel>
    <TabPanel>
    <Tabs variant='unstyled' style={{ background: 'linear-gradient(180deg, rgba(71.19, 71.19, 71.19, 0.52) 0%, rgba(39.85, 38.85, 41.44, 0.52) 100%)', borderRadius: 11, border: '0.50px #BFBFBF solid', backdropFilter: 'blur(46px)'  ,padding:"5px 5px 30px 5px",marginTop:"20px",borderRadius:"10px"}}>
  <TabList style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"20px"}}>
    <Tab _selected={{ color: 'white', borderBottom:'2px solid white' }} style={{padding:"10px 40px 10px 40px",fontFamily:'sans-serif',fontSize:'23px'  }} >Mint</Tab>
    <Tab _selected={{ color: 'white', borderBottom:'2px solid white' }} style={{padding:"10px 40px 10px 40px",fontFamily:'sans-serif',fontSize:'23px'  }}  >Burn</Tab>
  </TabList>
  <TabPanels>
    <TabPanel style={{display:'flex',flexDirection:"column"}}  >
    <input
        value={amount}
        placeholder="Just put Mint amount"
        style={inputStyle}
        onChange={(e) => setAmount(e.target.value)}
      />
   
      
       
                        <div style={{padding:'30px',margin:'auto'}}>
                          <p style={{fontFamily:'sans-serif',fontSize:'19px',color:'#b5aaaa'  }}  >User Mint Amount: {amount}</p>
                          <p style={{fontFamily:'sans-serif',fontSize:'19px',color:'#b5aaaa'  }} >Total Amount : {totalAmount}</p>
                          <p style={{fontFamily:'sans-serif',fontSize:'19px',color:'#b5aaaa'  }}   >Tax fees: 0.3%</p>
                        </div>


                
    

      <button style={{padding:'5px 50px 5px 50px',background:'linear-gradient(178deg, yellow,white)',color:'black',fontFamily:'sans-serif',fontSize:'20px',borderRadius:'10px'}} onClick={handleMint}>COMMIT MINT</button>
      
      <br></br>
      <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>Or</h1>
      <button style={{fontFamily:'sans-serif',fontSize:'20px',borderRadius:'10px',background:"linear-gradient(178deg, yellow,white)",color:"black",padding:"5px",display:"flex",alignItems:"baseline",justifyContent:"center",marginTop:"20px"}} onClick={openCheckout}>BUY WITH CARDS</button>
    </TabPanel>
    


    <TabPanel sx={{display:'grid'}}>
    <input
        value={burnamount}
        placeholder="Just put burn amount"
        style={inputStyle}
        onChange={(e) => setBurnamount(e.target.value)}
      />
      
      <button style={{padding:'5px 50px 5px 50px',background:'linear-gradient(178deg, yellow,white)',color:'black',fontFamily:'sans-serif',fontSize:'20px',borderRadius:'10px'}} onClick={handleBurn}>Burn</button>
    </TabPanel>
  </TabPanels>
  
</Tabs>




    </TabPanel>
  </TabPanels>
</Tabs>


 
     </Box>
    
     </div>
     
     <div id='nfts'>
      <Titabalance />
    <br></br>
     <Nft />
     </div>
    </div>
  );
}
