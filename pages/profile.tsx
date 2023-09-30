import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./profile.module.css";
import User from "../public/rrr.jpg";
import Location from "../public/mdi_location.svg";
import Headlogo from "../public/logs.png";
import Users from "../public/man.png";
import Eth from "../public/eth.47c40f70.svg";
import Mantle from "../public/mantle.61752091.svg";
import Polygon from "../public/polygon.31b1e7a0.svg";
import Bnb from "../public/bsc.67e32b4c.svg";
import Wallet from "../public/eth.47c40f70 (1).svg";
import Pool from "../public/pool.svg";
import Wallets from "../public/mingcute_wallet-4-fill.svg";
import Circles from "../public/Group 6.png";
import Social from "../public/Group 2.png";
import Star from "../public/Union.png";
import Footer from "../components/aboutfooter";

import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { ST } from "next/dist/shared/lib/utils";
import localFont from "next/font/local";
import Chart from "../components/profilechart";
import Navbar from "../components/navbar";
import Aboutmobile from "../components/aboutmobile";
import IpadProfile from "../components/ipadprofile";
import { useTranslation } from "react-i18next";

import Languageswitch from "../components/desktop";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";

import Networth from "../public/nwh.png";
import Holdings from "../public/hls.png";
import Pls from "../public/pls.png";

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

import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import communityBg from "../public/back.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsChevronDown } from 'react-icons/bs'

const HomepageProfile: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
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
        <Aboutmobile />
      </div>

      <div className={styles.ipadprofile}>
        <IpadProfile />
      </div>

      <div className={`${styles.homepageProfile} h-[2700px]`}>
        <div className={styles.homepageProfileChild} />
        <GenericMobileNavbar />
        <div className="absolute w-screen h-[fit] top-[5%]">
          <div className="w-full h-fit flex flex-row items-center justify-center gap-10">
            <div className="w-5/12 h-full flex flex-row items-center justify-end">
              <img
                src={User.src}
                className="w-6/12 aspect-square rounded-full"
                alt=""
              />
            </div>
            <div className="w-7/12 h-fit flex flex-col items-start justify-between">
              <h5 className="text-[#FFE500] text-5xl mb-5" style={myFont.style}>
                Hi,
              </h5>
              <h5 className="text-white text-5xl mb-3" style={myFont.style}>
                Test User
              </h5>
              <div className="flex flex-row items-center justify-start mb-3">
                <MdOutlineLocationOn color="#FFE500" size={40} />
                <h5
                  className="text-white text-3xl mb-0 ml-2"
                  style={secondFont.style}
                >
                  Test
                </h5>
              </div>
              <div className="flex flex-row items-center justify-start">
                <h5
                  className="text-[#FFE500] text-2xl my-0"
                  style={fourthFont.style}
                >
                  Net Worth:
                </h5>
                <h5
                  className="text-white text-2xl my-0 ml-2"
                  style={secondFont.style}
                >
                  $0
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div style={thirdFont.style} className={styles.holdings}>
          <Image src={Holdings} alt="" />
        </div>

        <div className={styles.rectangleDiv} />
        <div style={{ fontFamily: "Inter" }} className={styles.pl}>
          <Image src={Pls} alt="" />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
          <div style={thirdFont.style} className={styles.trade}>
            +24%
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              1G
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              1M
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              3M
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              6M
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              1A
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              3A
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              5A
            </div>
          </div>
          <div className={styles.gWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              YTD
            </div>
          </div>
          <div className={styles.maxWrapper}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              MAX
            </div>
          </div>
        </div>
        <div className={styles.frame}>
          <Chart />
        </div>
        <div className={`${styles.homepageProfileChild3} h-fit flex flex-col items-center justify-center px-20 py-10`}>
          <div className="flex flex-row items-center justify-between w-11/12 h-fit gap-1">
            <div className="h-fit w-1/4 flex flex-row items-start justify-around py-3 rounded-xl border border-white">
              <img src={Eth.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">Ethereum</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$83 <span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
            <div className="h-fit w-1/4 flex flex-row items-start justify-around py-3 rounded-xl border border-white">
              <img src={Mantle.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">Mantle</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$83 <span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
            <div className="h-fit w-1/4 flex flex-row items-start justify-around py-3 rounded-xl border border-white">
              <img src={Polygon.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">Polygon</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$83 <span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
            <div className="h-fit w-1/4 flex flex-row items-start justify-around py-3 rounded-xl border border-white">
              <img src={Bnb.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">BNB COIN</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$83 <span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
          </div>
          <h5 style={thirdFont.style} className="text-xl text-[#FFE500] mt-10">
            {t('more')}
          </h5>
          <BsChevronDown color="#FFE500" size={30} className="mb-10"></BsChevronDown>
          <div className="flex flex-row items-center justify-center w-10/12 h-fit gap-5">
            <div className="h-fit gradGrey w-1/4 flex flex-row items-start justify-between py-3 px-10 rounded-xl border border-white">
              <img src={Wallet.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">Wallet</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$183 <span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
            <div className="h-fit gradGrey w-1/4 flex flex-row items-start justify-between py-3 px-10 rounded-xl border border-white">
              <img src={Pool.src} alt="" />
              <div>
                <h5 style={secondFont.style} className="text-white text-xl mb-0">Pool Together</h5>
                <h5 style={thirdFont.style} className="text-white text-xl mb-0">$0<span className="text-base" style={secondFont.style}>4%</span></h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <section className="h-fit w-screen mt bg-center bg-cover hidden landscape:lg:flex xl:flex flex-col items-center justify-center bg-no-repeat absolute bottom-[600px] landscape:lg:bottom-[400px] landscape:xl:bottom-[450px] z-50 opacity-100">
        <img
          src={communityBg.src}
          className=" absolute mt-[10%] w-6/12 landscape:lg:w-8/12 landscape:xl:w-6/12 mx-auto aspect-square"
          alt=""
        />
        <div>
          <h5
            className="block text-[#FFE925] text-center text-3xl landscape:lg:text-4xl landscape:lg:my-16 mx-auto my-10"
            style={thirdFont.style}
          >
            {t("communityhead")}
          </h5>
          <h5
            className="block text-white leading-relaxed landscape:lg:text-2xl text-xl w-8/12 text-center mx-auto mt-3 mb-5"
            style={secondFont.style}
          >
            {t("communityparagraph")}
          </h5>
          <div className="flex flex-row items-center justify-center gap-5 my-10 landscape:lg:mt-16 px-10">
            <BsGithub color="#ffffff" size={35} />
            <FaXTwitter color="#ffffff" size={35} />
            <TiSocialLinkedinCircular color="#ffffff" size={45} />
            <SiNotion color="#ffffff" size={35} />
          </div>
        </div>
      </section>
      <section className="bg-[#141315] h-fit w-screen hidden md:flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
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
            <h5 className="text-white montreal text-2xl md:text-xl">Profile</h5>
          </a>
        </div>
        <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
          All Rights Reserved - © 2023 CMax
        </h5>
      </section>
    </div>
  );
};

export default HomepageProfile;
