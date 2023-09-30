import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styles from "./mintcmax.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Arrow from "../public/ri_arrow-up-s-line.svg";
import CommitLogo from "../public/Group 1000000931.svg";
import Image from "next/image";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Paycredit from "../components/cmaxpayment";

import Commib from "../public/cm.png";

import localFont from "next/font/local";
import { color } from "framer-motion";

const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

export default function Minting() {
  const [amount, setAmount] = useState("");
  const [burnamount, setBurnamount] = useState("");
  const address = useAddress();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [numberOfNFTs, setNumberOfNFTs] = useState(1); // Default to 1 NFT
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // Initialize total amount to 0
  const [totalBurnAmount, setTotalBurnAmount] = useState(0);
  // ... other state variables ...

  const { contract: approveContract } = useContract(
    "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747"
  );
  const { mutateAsync: approve, isLoading: isApproving } = useContractWrite(
    approveContract,
    "approve"
  );

  const { contract: titaTokenContract } = useContract(
    "0x00f35860FA16166B0A83E4424807CAe4AFC69Faf"
  ); // Replace with your TitaToken address
  const { mutateAsync: titaTokenApprove, isLoading: isTitaTokenApproving } =
    useContractWrite(titaTokenContract, "approve");

  const { contract: requestTokenContract } = useContract(
    "0xcee91e93E147553563A74fb8aD6BECefF227C948"
  );
  const { mutateAsync: requestCmaxToken, isLoading: isCmaxTokenLoading } =
    useContractWrite(requestTokenContract, "requestCmaxToken");

  const handleMint = async () => {
    try {
      // First, execute the 'approve' action
      await executeApproveAction();

      // Then, if the 'approve' action is successful, proceed with the 'RequestToken' action
      if (!isApproving) {
        await executeRequestTokenAction();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const executeApproveAction = async () => {
    try {
      const allAmount = amount;

      const spenderAddress = "0xcee91e93E147553563A74fb8aD6BECefF227C948";

      // Execute the 'approve' action
      await approve({ args: [spenderAddress, allAmount] });
    } catch (error) {
      console.error("Error during 'approve' action:", error);
      throw error;
    }
  };

  const executeRequestTokenAction = async () => {
    try {
      // Execute the 'RequestToken' action
      await requestCmaxToken({ args: [address, amount] });
    } catch (error) {
      console.error("Error during 'RequestToken' action:", error);
      throw error;
    }
  };

  useEffect(() => {
    // Calculate the total amount whenever the input amount changes
    if (amount) {
      const amountNumber = parseFloat(amount);
      const fee = (amountNumber * 0.3) / 100; // 0.3% fee
      const calculatedTotal = amountNumber + fee;
      setTotalAmount(calculatedTotal);
    } else {
      setTotalAmount(0);
    }
  }, [amount]);

  useEffect(() => {
    // Calculate the total amount whenever the input amount changes
    if (burnamount) {
      const burnNumber = parseFloat(burnamount);
      const fees = (burnNumber * 0.3) / 100; // 0.3% fee
      const calculatedTotals = burnNumber + fees;
      setTotalBurnAmount(calculatedTotals);
    } else {
      setTotalBurnAmount(0);
    }
  }, [burnamount]);

  return (
    <Tabs className={styles.swapMintburnChild} variant="unstyled">
      <TabList
        className={styles.swapMintburnItem}
        sx={{ padding: "10px 20px 10px 20px" }}
      >
        <Tab
          style={thirdFont.style}
          sx={{
            height: "54px",
            padding: "10px 50px 10px 50px",
            borderRadius: "7px",
            margin: "auto",
            fontSize: "1.1rem",
            background: "linear-gradient(180deg, #ffe500, #fff492)"
          }}
          _selected={{ color: "black", bg: "linear-gradient(180deg, #ffe500, #fff492)" }}
        >
          Buy CMAX
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className={styles.swapMintburnInner} />
          <div className={styles.swapMintburnChild1} />
          <div className={styles.antDesignswapOutlined}>
            <div
              style={{ fontFamily: "__fourthFont_9c16a8" }}
              className={styles.max1}
            >
              max
            </div>
          </div>

          <div className={styles.credit}>
            <Image
              className={styles.frameChild11}
              src={CommitLogo}
              alt={CommitLogo}
            />
            <Button
              style={{
                textTransform: "none",
                fontSize: "21px",
              }}
              sx={{ color: "black" }}
              onClick={handleClickOpen}
            >
              <h5 className="mb-0" style={thirdFont.style}>BUY USING CARDS</h5>
            </Button>

            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <Paycredit />
              </DialogContent>
            </Dialog>
          </div>

		  <div className={styles.credit} style={{
			marginTop: "20px"
		  }}>
            <Image
              className={styles.frameChild11}
              src={CommitLogo}
              alt={CommitLogo}
            />
            <Button
              style={{
                textTransform: "none",
                fontSize: "21px",
              }}
              sx={{ color: "black" }}
              onClick={handleClickOpen}
            >
              <h5 className="mb-0" style={thirdFont.style}>COMMIT MINT</h5>
            </Button>

            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <Paycredit />
              </DialogContent>
            </Dialog>
          </div>

        

          <div className={styles.swapMintburnChild2} />

          <div
            style={{ fontFamily: "__secondFont_72e69f" }}
            className={styles.youPay}
          >
            you pay
          </div>

          <div className={styles.frameDiv} />
          <div
            style={{ fontFamily: "__secondFont_72e69f" }}
            className={styles.balance323400}
          >
            balance: $0
          </div>
          <div
            style={{ fontFamily: "__secondFont_72e69f" }}
            className={styles.expectedPrice124681}
          >
            Expected Price: $124.68
          </div>
          <img
            className={styles.swapMintburnChild3}
            alt=""
            src="Vector 12.svg"
          />
          <img
            className={styles.swapMintburnChild4}
            alt=""
            src="Vector 13.svg"
          />
          <div
            style={{ fontFamily: "__secondFont_72e69f" }}
            className={styles.div5}
          >
            <input
              value={amount}
              placeholder=""
              className={styles.span1}
              style={{
                background: "none",
                width: "100%",
                borderRadius: "15px",
                border: "solid 1px #ffffff",
                fontSize: "18px",
                padding: "3% 3%",
              }}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div
                style={{ fontFamily: "__secondFont_72e69f",  }}
                className={styles.g}
              >
                <h5 className="mb-0">USDC</h5>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
