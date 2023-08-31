import { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function App() {
  const [mintAmount, setMintAmount] = useState(1);
  const [useraddress, setAddress] = useState();
  const nftCost = 1;
  const projectId = '5e2e1af6-3897-42f9-9ae1-cf5696fd8e7f';
  const collectionId = 'b87c6167-e1ad-4e92-8c83-d8fe93ae197b';

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 1000) return;
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

      <br>
      </br>
      <input
        value={useraddress}
        placeholder="Just put address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <CrossmintPayButton
        projectId={projectId}
        collectionId={collectionId}
        environment="staging"
        mintConfig={{
          type: "erc-721",
          totalPrice: (nftCost * mintAmount).toString(),
          _userAddress: useraddress,
          _amount: mintAmount // the `_quantity` property should match what is in your mint function
          // your custom minting arguments...
        }}
      />
    </div>
  );
}

export default App;
