import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0x3b428CfA6c8720A8390e4433add5c2661Fb0EaA9");
  
  // Generate a random Ethereum wallet address
  const address = useAddress();
  const { data, isLoading } = useContractRead(contract, "stakingInfo", [address]);
  
  const stakedAmount = data ? data.toString() : "N/A";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       {stakedAmount}
    </div>
  );
}
