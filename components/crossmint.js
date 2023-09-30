import { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function App() {
  const [mintAmount, setMintAmount] = useState(1);
  const nftCost = 1;
  const projectId = 'c09eb65f-0d93-476b-aff2-d5b15301aac9';
  const collectionId = 'c4d31eb7-8ab8-4b53-bdaa-838b9f618a97';

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <input 
        readOnly
        type="number" 
        value={mintAmount} 
      />
      <button onClick={handleIncrement}> + </button>

      <CrossmintPayButton
        projectId={projectId}
        collectionId={collectionId}
        environment="staging"
        mintConfig={{
          type: "erc-721",
          totalPrice: (nftCost * mintAmount).toString(),
          _amount: mintAmount, // the `_quantity` property should match what is in your mint function
          _userAddress: "0x4f8B2785D7671730f07bF555D5cC9Ad3e858B7d3",
          // your custom minting arguments...
        }}
        
       
      />
    </div>
  );
}

export default App;
