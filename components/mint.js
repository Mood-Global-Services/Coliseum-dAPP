import { Web3Button } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useState } from "react";


export default function Component() {
    
    const address = useAddress();
    const [ amount, setAmount] = useState();

  return (
    <div>
    <input
    value={amount}
    placeholder="Just put Mint amount"
   
    onChange={(e) => setAmount(e.target.value)}
  />
    <Web3Button
      contractAddress="0xb4a3602d50B16Efd15E4253733BB1e66B2c3BB68"
      action={(contract) => {
        contract.call("requestToken", [address], [amount])
      }}
    >
      requestToken
    </Web3Button>
    </div>
  )
}