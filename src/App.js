import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const [amount, setAmount] = useState("");

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

  return (
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
        Request Token
      </Web3Button>
    </div>
  );
}
