import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./mint.module.css";
import Image from "next/image";
import Logo from "../public/Group 7.svg";
import CommitLogo from "../public/Group 1000000931.svg";
import Tokens from "../public/Ellipse 74.svg";
import Arrow from "../public/ri_arrow-up-s-line.svg";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Headlogo from "../public/logs.png";
import Circles from "../public/Group 6.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import Minting from "../components/minting";
import Chart from "../components/chart";
import { ConnectKitButton } from "connectkit";
import Mintmobile from "../components/mintmobile";

import localFont from "next/font/local";
import Navbar from "../components/mintnav";
import IpadMint from "../components/ipadmint";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Languageswitch from "../components/desktop";

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

import { useTranslation } from "react-i18next";

import communityBg from "../public/back.png";
import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const HomepageTradeSubpage: NextPage = () => {
  const onBackToTradeBtnClick = useCallback(() => {
    // Add your code here
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIcon1Click = useCallback(() => {
    // Add your code here
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    /* to implement this functions globally and keep the same language when u go to another page, 
		you can store the language code (en, fr, es, it, ar, ru) in localStorage, 
		and run this function in a useEffect on top of every page, 
		with the language code that is in the local storage as a parameter */
  };

  useEffect(() => {
    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " "
    )
      localStorage.setItem("lang", "en");
  }, []);

  const handleLanguageChange = () => {
    i18n.changeLanguage(localStorage.getItem("lang")?.toString());
  };

  useEffect(() => {
    handleLanguageChange();
  }, []);

  return (
    <div>
      <div className={styles.mobile}>
        <Mintmobile />
      </div>

      <div className={styles.ipadmint}>
        <IpadMint />
      </div>

      <div className={styles.homepageTradeSubpage}>
        <GenericMobileNavbar />
        <div className="h-full w-screen bg-red-50/10 mt-36 relative">
          <div className={styles.homepageTradeSubpageInner} />

          <div style={myFont.style} className={styles.titaEtf}>
            Tita ETF
          </div>
          <div className={styles.wrapper}>
            <div style={secondFont.style} className={styles.div}>
              128.68
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                1G
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                1M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                3M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                6M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                1A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                3A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                5A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                YTD
              </div>
            </div>
            <div className={styles.maxWrapper}>
              <div style={thirdFont.style} className={styles.g}>
                MAX
              </div>
            </div>
          </div>
          <div style={secondFont.style} className={styles.ter033}>
            TER → 0.33%
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
            <div className={styles.div}>
              <span style={secondFont.style}>{`+1,03  `}</span>
              <span className={styles.span}>|</span>
              <span style={secondFont.style}> +0,83%</span>
            </div>
          </div>
          <div className={styles.frame1}>

            <div className=" bg-none">
            <Chart />
            </div>
          </div>
          <div className={styles.rectangleDiv} />
          <div
            className={styles.backToTradeBtn1}
            onClick={onBackToTradeBtnClick}
          >
            <Image className={styles.pharrowDownBoldIcon1} alt="" src="" />
            <div className={styles.g}>Back to trade</div>
          </div>
          <div className={styles.swapMintburn}>
            <Minting />
          </div>
        </div>

        <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
          <a href="/">
            <img
              src={Headlogo.src}
              className=" aspect-square w-20 mb-10"
              alt=""
            />
          </a>
          <div className="flex flex-row items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full">
            <a href="/">
              <h5 className="text-white montreal text-2xl md:text-xl">Home</h5>
            </a>
            <a href="/trade">
              <h5 className="text-white montreal text-2xl md:text-xl">Trade</h5>
            </a>
            <a href="/stake">
              <h5 className="text-white montreal text-2xl md:text-xl">Stake</h5>
            </a>
            <a href="/about">
              <h5 className="text-white montreal text-2xl md:text-xl">About</h5>
            </a>
            <a href="/profile">
              <h5 className="text-white montreal text-2xl md:text-xl">
                Profile
              </h5>
            </a>
          </div>
          <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
            All Rights Reserved - © 2023 CMax
          </h5>
        </section>
      </div>
    </div>
  );
};

export default HomepageTradeSubpage;
