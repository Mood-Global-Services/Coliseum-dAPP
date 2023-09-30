import React, { useState } from "react";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";
import { useAddress } from "@thirdweb-dev/react";

export default function Payment() {
  const address = useAddress();
  const [amount, setAmount] = useState(""); // State to store the user's input amount

  const handleAmountChange = (event) => {
    // Ensure the input is numeric and convert it to a string
    const numericAmount = parseFloat(event.target.value);
    if (!isNaN(numericAmount)) {
      setAmount(numericAmount.toString()); // Convert to string
    } else {
      setAmount(""); // Reset to empty string for invalid input
    }
  };

  const isAmountValid = parseFloat(amount) >= 15; // Set your desired threshold here

  return (
    <div>
      <input
        type="number"
        placeholder="Enter the amount to mint"
        value={amount}
        onChange={handleAmountChange}
      />
      {isAmountValid && (
        <CheckoutWithCard
          configs={{
            // Registered contract ID
            contractId: "326891ba-d08c-425e-a633-e4b2f12df7fe",
            // Buyer wallet address
            walletAddress: address,
            // Mint method (for custom contracts only)
            mintMethod: {
              name: "requestCmaxToken",
              args: {
                _userAddress: "$WALLET",
                _amount: amount, // Use the formatted amount
              },
              payment: {
                value: "0.1 * $QUANTITY",
                currency: "USDC",
              },
            },
          }}
          onPaymentSuccess={(result) => {
            console.log("Payment successful:", result);
          }}
        />
      )}
      {!isAmountValid && amount !== "" && <p>Please enter a valid amount (minimum 200).</p>}
    </div>
  );
}
