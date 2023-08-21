import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import Paymentusdc from "./Payment";
import Navbar from "./components/navbar";
import Car from "./components/card";
import { Box } from "@mui/material";
import Video from "./components/video"
import Homes from "./components/home";
import About from "./components/about";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [bamount, setBamount] = useState("");
  

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBAmountChange = (event) => {
    setBamount(event.target.value);
  };

  return (
    <div className="all">
      <Navbar />
      <Homes />
      <About />
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1>a visual journey</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400"}}>Elevate your Financial experience with RWFA Dapp - Decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future forward journey</h1>
      </Box>
      <Video />
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1>Discover our Benefits</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400"}}>Elevate your Financial experience with RWFA Dapp - Decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future forward journey</h1>
      </Box>
      <Car />
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1>our partners</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400"}}>Elevate your Financial experience with RWFA Dapp - Decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future forward journey</h1>
      </Box>
      <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1>join our community</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400"}}>Elevate your Financial experience with RWFA Dapp - Decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future forward journey</h1>
      </Box>
    <div style={containerStyle}>
      <h1>Token Request</h1>
      <ConnectWallet />

      <input
        style={inputStyle}
        value={amount}
        placeholder="Enter Amount"
        onChange={handleAmountChange}
      />

 
      <Web3Button
        style={buttonStyle}
        contractAddress="0xe5b74B2ce28cf0FBb09bC611c5788001C99Df179"
        action={(contract) => {
          contract.call("requestToken", [amount])
            .then((result) => {
              // Handle success
              console.log("Transaction successful:", result);
            })
            .catch((error) => {
              // Handle error
              console.error("Transaction failed:", error);
            });
        }}
      >
        Buy with web3 wallet
      </Web3Button>

      <Paymentusdc />


    </div>
        <div style={containerStyle}>
        <h1>Burn Request</h1>
       
  
        <input
          style={inputStyle}
          value={bamount}
          placeholder="Enter Amount"
          onChange={handleBAmountChange}
        />
  
  <Web3Button
      style={buttonStyle}
      contractAddress="0xe5b74B2ce28cf0FBb09bC611c5788001C99Df179"
      action={(contract) => {
        contract.call("burnToken", [bamount])
      }}
    >
      Burn Token
    </Web3Button>
      </div>
      </div>
  );
}
