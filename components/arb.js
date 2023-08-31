import React from "react";
import { useTokenBalance, useContract,useAddress } from "@thirdweb-dev/react";




// Your smart contract address


export default function Arb() {
    
const contractAddress = "0x912CE59144191C1204E64559FE8253a0e49E6548";
const address = useAddress();


  // Initialize the contract and retrieve its instance
  const { contract } = useContract(contractAddress);

  // Use the useTokenBalance hook to get the token balance
  const { data: balance, isLoading, error } = useTokenBalance(contract, address);

  // Render the token balance or loading/error messages
  return (
    <div className="App">
      <h1 style={{color:'white'}}>Token Balance</h1>
      {isLoading && <p style={{color:'white'}} >Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
        <p style={{color:'white'}} >
         
          {balance?.displayValue} {/* Assuming data is a BigNumber */}
        </p>
    
    </div>
  );
}

