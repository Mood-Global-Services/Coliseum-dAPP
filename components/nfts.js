import { ThirdwebNftMedia, useContract, useOwnedNFTs,useAddress } from "@thirdweb-dev/react";
import React from "react";

export default function Home() {
  // Replace with the actual address you want to fetch NFTs for
  const address = useAddress(); // Replace with the actual Ethereum address

  // Connect to your NFT contract
  const { contract } = useContract("0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9");

  // Load the NFT data from the contract using a hook
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  // Render the NFTs on the UI
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && data.length > 0 ? (
        <div>
          {data.map((nft) => (
            <div key={nft.tokenId}>
              <h2>Receipt</h2>
              <ThirdwebNftMedia metadata={nft.metadata} />
            </div>
          ))}
        </div>
      ) : (
        <div>No NFTs found for this address.</div>
      )}
    </div>
  );
}
