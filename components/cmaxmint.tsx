import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import styles from './minting.module.css';
import { useState } from "react";
import React, { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Arrow from '../public/ri_arrow-up-s-line.svg';
import CommitLogo from '../public/Group 1000000931.svg';
import Image from 'next/image';
import Payment from './payment';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PriceView from "../pages/test"

import Commib from '../public/cm.png';


import localFont from 'next/font/local';
import { color } from 'framer-motion';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});






export default function Minting() {

	const [amount, setAmount] = useState("");
	const [burnamount, setBurnamount] =useState("");
	const  address  = useAddress();

	
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
  
	
	const [numberOfNFTs, setNumberOfNFTs] = useState(1); // Default to 1 NFT
	const [userWalletAddress, setUserWalletAddress] = useState("");
	const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount to 0
	const [totalBurnAmount, setTotalBurnAmount] = useState(0);
	// ... other state variables ...
	
	const { contract: approveContract } = useContract("0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747");
	const { mutateAsync: approve, isLoading: isApproving } = useContractWrite(approveContract, "approve");
  
	const { contract: titaTokenContract } = useContract("0x00f35860FA16166B0A83E4424807CAe4AFC69Faf"); // Replace with your TitaToken address
	const { mutateAsync: titaTokenApprove, isLoading: isTitaTokenApproving } = useContractWrite(titaTokenContract, "approve");
  
  
	const { contract: requestTokenContract } = useContract("0x1B9c0801BAabBFbDa9831C1B4bf74705aC9c4449");
    const { mutateAsync: requestCmaxToken, isLoading: isCmaxTokenLoading } = useContractWrite(requestTokenContract, "requestCmaxToken");

  
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
		await requestCmaxToken({ args: [address, amount] });
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

	useEffect(() => {
		// Calculate the total amount whenever the input amount changes
		if (burnamount) {
		  const burnNumber = parseFloat(burnamount);
		  const fees = (burnNumber * 0.3) / 100; // 0.3% fee
		  const calculatedTotals = burnNumber + fees;
		  setTotalBurnAmount(calculatedTotals);
		} else {
		  setTotalBurnAmount(0);
		}
	  }, [burnamount]);
  
	






    return(
       
        <Tabs className={styles.swapMintburnChild}   variant='unstyled'>
  <TabList className={styles.swapMintburnItem} sx={{padding:'10px 20px 10px 20px'}}   >
    <Tab style={thirdFont.style}   sx={{height:'54px',padding:'10px 50px 10px 50px',borderRadius:'7px'}}    _selected={{ color: 'black', bg: 'yellow' }}>Swap</Tab>
    <Tab style={thirdFont.style}  className={styles.swapMintburnChild2}   sx={{height:'54px',padding:'10px 54px 10px 54px',borderRadius:'7px'}}    _selected={{ color: 'black', bg: 'yellow' }}   >Mint/Burn</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    







<PriceView />









	
    </TabPanel>
    <TabPanel>





  
    <div className={styles.swapMintburnInner} />
        				<div className={styles.swapMintburnChild1} />
        				<div className={styles.antDesignswapOutlined}>
          					<div className={styles.max1}>max</div>
        				</div>


                        <Tabs variant='unstyled'>
  <TabList>
    <Tab style={thirdFont.style}    className={styles.mint} _selected={{ color: 'yellow', bg: 'none' }}>Mint</Tab>
    <Tab style={thirdFont.style}    className={styles.burn}    _selected={{ color: 'yellow', bg: 'none' }}>Burn</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    

	<div className='credit'>
	<Image className={styles.frameChild11} src={CommitLogo} alt={CommitLogo} />	
	<Button style={thirdFont.style} sx={{color:'black'}}  onClick={handleClickOpen}>
        Buy Using Cards
      </Button>
      <Dialog open={open} onClose={handleClose}>
        
        <DialogContent>
          <Payment />
         
        </DialogContent>

      </Dialog>

</div>





    <div className={styles.groupParent}>

  


	<Image className={styles.frameChild11} src={CommitLogo} alt={CommitLogo} />		
          					<button style={thirdFont.style} className={styles.g}  onClick={handleMint}  >
								<Image src={Commib} alt='' />
							</button>
							
						
  
							 
        				</div>

      <div className={styles.swapMintburnChild2} />
        				
        				<div style={{fontFamily:'Inter'}} className={styles.youPay}>you pay</div>
        				<div style={{fontFamily:'Inter'}}   className={styles.totalCost}>Total cost</div>
        				<div className={styles.div2}>{amount}</div>
        				<div style={{fontFamily:'Inter'}}  className={styles.expectedTokensMinted1}>Expected Tokens Minted</div>
        				<div className={styles.div3}>{totalAmount}</div>
        				<div style={{fontFamily:'Inter'}}   className={styles.expectedEquivalentExpousure1}>Expected Platform Fees</div>
        				<div className={styles.div4}>0.2%</div>
        				<div className={styles.frameDiv} />
        				<div style={{fontFamily:'Inter'}}   className={styles.balance323400}>balance: $3,234.00</div>
        				<div style={{fontFamily:'Inter'}}  className={styles.expectedPrice124681}>Expected Price: $124.68</div>
        				<img className={styles.swapMintburnChild3} alt="" src="Vector 12.svg" />
        				<img className={styles.swapMintburnChild4} alt="" src="Vector 13.svg" />
        				<div className={styles.div5}>$
          					
                              <input
        value={amount}
        placeholder=""
        className={styles.span1}
        style={{background: 'none',
            width: '30%',
            border: 'none'  }}
        onChange={(e) => setAmount(e.target.value)}
      />
        				</div>
					
        				<div className={styles.frameGroup}>
          					<div className={styles.ellipseParent}>
            						
            						<div className={styles.g}>usdc</div>
          					</div>
          					
        				</div>










    </TabPanel>
    <TabPanel>
     
     
 <div className={styles.groupParent}>
 <Image className={styles.frameChild11} src={CommitLogo} alt={CommitLogo} />	
          					<button style={{margin:'-4',fontFamily:'__thirdFont_3ea4f2',fontWeight:'900',display:'flex',alignItems:'center',justifyContent:'center'}} className={styles.g} >Commit Burn</button>
        				</div>

      <div className={styles.swapMintburnChild2} />
        				
        				<div style={{fontFamily:'Inter'}}   className={styles.youPay}>you pay</div>
        				<div style={{fontFamily:'Inter'}}   className={styles.totalCost}>Total cost</div>
        				<div className={styles.div2}>{burnamount}</div>
        				<div  style={{fontFamily:'Inter'}}  className={styles.expectedTokensMinted1}>Expected Tokens Minted</div>
        				<div className={styles.div3}>{totalBurnAmount}</div>
        				<div style={{fontFamily:'Inter'}}  className={styles.expectedEquivalentExpousure1}>Expected Platform Fees</div>
        				<div style={{fontFamily:'Inter'}}  className={styles.div4}>0.2%</div>
        				<div className={styles.frameDiv} />
        				<div style={{fontFamily:'Inter'}}  className={styles.balance323400}>balance: $3,234.00</div>
        				<div style={{fontFamily:'Inter'}}  className={styles.expectedPrice124681}>Expected Price: $124.68</div>
        				<img className={styles.swapMintburnChild3} alt="" src="Vector 12.svg" />
        				<img className={styles.swapMintburnChild4} alt="" src="Vector 13.svg" />
        				<div className={styles.div5}>$
          					
                              <input
        value={burnamount}
        placeholder=""
        className={styles.span1}
        style={{background: 'none',
            width: '30%',
            border: 'none'  }}
        onChange={(e) => setBurnamount(e.target.value)}
      />
        				</div>
					
        				<div className={styles.frameGroup}>
          					<div className={styles.ellipseParent}>
            						
            						<div className={styles.g}>tita</div>
          					</div>
          					
        				</div>











    </TabPanel>
  </TabPanels>
</Tabs>
        	


  









  
    </TabPanel>
  </TabPanels>
</Tabs>

    )
}