import { renderPaperCheckoutLink } from "@paperxyz/js-client-sdk"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import React, { useState } from 'react';

export default function Paymentusdc(){
  const openCheckout = () => renderPaperCheckoutLink({
    checkoutLinkUrl: "https://withpaper.com/checkout/f6a59b0d-4c21-4c29-a5c7-499b818f7a54",
  });
  const [numberOfNFTs, setNumberOfNFTs] = useState(1); // Default to 1 NFT
  const [userWalletAddress, setUserWalletAddress] = useState("");

  // Function to handle changes in the number of NFTs input field
  const handleNumberOfNFTsChange = (event) => {
      setNumberOfNFTs(event.target.value);
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

  return(
    <div>
<button style={{background:"blue",color:"white"}} onClick={openCheckout}>Buy with Cards</button>
<div>
        <label>
                Number of NFTs:
                <input
                    type="number"
                    value={numberOfNFTs}
                    onChange={handleNumberOfNFTsChange}
                />
            </label>
            <br />
            <label>
                User Wallet Address:
                <input
                    type="text"
                    value={userWalletAddress}
                    onChange={handleWalletAddressChange}
                />
            </label>
            <br />
            <button onClick={handleMintButtonClick}>Mint NFTs</button>
            <br />
            <CrossmintPayButton
                collectionId="b87c6167-e1ad-4e92-8c83-d8fe93ae197b"
                projectId="5e2e1af6-3897-42f9-9ae1-cf5696fd8e7f"
                mintConfig={{
                    type: "erc-721",
                    totalPrice: "1", // Replace with the actual price in Matic
                    _amount: "1999",
                    quantity: "1999"
                }}
                environment="staging"
                mintTo={userWalletAddress}
            />
        </div>
</div>
  )
}



