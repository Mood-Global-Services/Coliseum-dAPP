import React from "react";
import { useTokenBalance, useContract,useAddress } from "@thirdweb-dev/react";




// Your smart contract address


export default function Tmm() {
    
const contractAddress = "0x00f35860FA16166B0A83E4424807CAe4AFC69Faf";
const address = useAddress();


  // Initialize the contract and retrieve its instance
  const { contract } = useContract(contractAddress);

  // Use the useTokenBalance hook to get the token balance
  const { data: balance, isLoading, error } = useTokenBalance(contract, address);

   // Define a variable to hold the message
   let message;

   if (isLoading) {
     message = "Loading...";
   } else if (error) {
     message = `Error: ${error.message}`;
   } else if (balance?.displayValue > 0) {
  message = "Paid";
} else {
  message = "Unpaid";
}
   

  // Render the token balance or loading/error messages
  return (
    <div className="tita">
      <h1>Tita Token Balance</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
        <p>
         
          {balance?.displayValue} 
        </p>
        <p>{message}</p>
    
    </div>
  );
}

