import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./ipadhome.module.css";

import Image from "next/image";
import Btn from "../public/Rectangle 334.svg";
import Home from "../public/shutterstock_2152297015-[Converted] 1.png";
import Video from "../public/carbon_play-filled.svg";
import Headlogo from "../public/logs.png";
import Frame from "../public/Frame.svg";
import Stats from "../public/shutterstock_1007444929-[Converted] 1.png";
import One from "../public/one.png";
import Two from "../public/two.png";
import Three from "../public/three.png";
import Fou from "../public/cc.png";
import Fif from "../public/bb.png";
import Six from "../public/aa.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Arrow from "../public/arrow.svg";
import Green from "../public/gr.svg";
import White from "../public/wh.svg";
import Circles from "../public/Circle BG.svg";
import Star from "../public/Union.png";
import Circ from "../public/Group 8.png";
import Leftcir from "../public/Group 1000000925.png";
import Rectangle from "../public/Rectangle 349.png";
import Partner from "../public/Partners-Logos.png";
import Flower from "../public/Group 1000000920.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import localFont from "next/font/local";
import React, { useEffect } from "react";
import Sliders from "../components/slider";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import Footer from "../components/ipadfooter";
import { useState } from "react";
import Navbar from "../components/navbar";
import Mobile from "../components/mobile";
import Ipad from "../components/ipadhome";
import Btx from "../public/btx.png";
import { graphql } from "msw";
import { Download } from "@mui/icons-material";
import Downloadd from "../public/download.png";

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

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";

import Whitepaper from "../public/whites.png";
import { useTranslation } from "react-i18next";

import Homd from "../public/h.png";
import Treasury from "../public/tte.png";
import Discoverb from "../public/dobs.png";
import Treasurysd from "../public/Treasury.png";
import Downloadwhite from "../public/Download Whitepaper.png";
import Starttrading from "../public/Start Trading.png";
import Seam from "../public/Seamless Financial Inclusion.png";
import Effort from "../public/Effortless Cross-Border Transactions.png";
import Watch from "../public/Watch Tutorial.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Downloadour from "../public/Download Our White Paper for In-Depth Insights.png";
import Joins from "../public/jocs.png";
import Languageswitch from "../components/desktop";

import Seamless from "../public/sfsd.png";
import Effortles from "../public/eftt.png";
import Reducedfe from "../public/rf3.png";
import Securi from "../public/esee.png";
import Homer from "../public/hsss.png";

import GenericMobileNavbar from "./mobileGenericNavbar";
import one from "../public/one.png";
import two from "../public/two.png";
import three from "../public/three.png";
import four from "../public/cc.png";
import five from "../public/bb.png";
import six from "../public/aa.png";
import communityBg from "../public/back.png";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const HomeIPadPro1291: NextPage = () => {
  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIconClick = useCallback(() => {
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

  return (
    <div className={`${styles.homeIpadPro1291} h-[4200px] landscape:h-[4000px]`}>
      <GenericMobileNavbar />
      <div className={styles.homeIpadPro1291Child} />
      <div className="w-screen h-fit absolute top-[2200px] flex flex-col items-center justify-start pt-10">
        <h5 className="text-3xl text-[#FFE925] mb-3" style={thirdFont.style}>
          {t("discoverbenefit")}
        </h5>
        <h5
          className="text-xl text-center w-10/12 text-white leading-relaxed mb-5"
          style={secondFont.style}
        >
          {t("discoverparagraph")}
        </h5>
        <div className="flex landscape:md:h-fit flex-row items-center justify-start w-full discoverBoxContainer gap-2 px-20 mb-2">
          <div className="h-full w-1/2 rounded-2xl py-6 px-4 landscape:md:h-fit portrait:md:h-[40vh]  discoverBox">
            <img src={one.src} className="h-10 w-8 mb-3" alt="" />
            <h5
              className="text-2xl text-[#FFE925] text-left mb-4"
              style={myFont.style}
            >
              {t("benefithead")}
            </h5>
            <h5
              className="text-xl text-white text-left"
              style={secondFont.style}
            >
              {t("benefitparagraphone")}
            </h5>
          </div>
          <div className="h-full w-1/2 rounded-2xl py-6 px-4 landscape:md:h-fit portrait:md:h-[40vh] discoverBox">
            <img src={two.src} className="h-10 w-10 mb-3" alt="" />
            <h5
              className="text-2xl text-[#FFE925] text-left mb-4"
              style={myFont.style}
            >
              {t("benefitheadtwo")}
            </h5>
            <h5
              className="text-xl text-white text-left"
              style={secondFont.style}
            >
              {t("benefitparagraphtwo")}
            </h5>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full discoverBoxContainer gap-2 px-20">
          <div className="h-full w-1/2 rounded-2xl py-6 px-4 discoverBox landscape:md:h-fit portrait:md:h-[40vh]">
            <img src={three.src} className="h-10 w-10 mb-3" alt="" />
            <h5
              className="text-2xl text-[#FFE925] text-left mb-4"
              style={myFont.style}
            >
              {t("benefitheadthree")}
            </h5>
            <h5
              className="text-xl text-white text-left"
              style={secondFont.style}
            >
              {t("benefitparagraphthree")}
            </h5>
          </div>
          <div className="h-full w-1/2 rounded-2xl py-6 px-4 discoverBox landscape:md:h-fit portrait:md:h-[40vh]">
            <img src={four.src} className="h-10 w-10 mb-3" alt="" />
            <h5
              className="text-2xl text-[#FFE925] text-left mb-4"
              style={myFont.style}
            >
              {t("benefitheadfour")}
            </h5>
            <h5
              className="text-xl text-white text-left"
              style={secondFont.style}
            >
              {t("benefitparagraphfour")}
            </h5>
          </div>
        </div>
      </div>
      <div className={styles.homeIpadPro1291Inner} />
      <Image className={styles.frameIcon} alt="" src={Circ} />
      <Image className={styles.homeIpadPro1291Child1} alt="" src={Circ} />
      <Image className={styles.homeIpadPro1291Child2} alt="" src={Leftcir} />
      <img
        className={styles.shutterstock2152297015ConveIcon}
        alt=""
        src="shutterstock_2152297015-[Converted] 1.png"
      />
      <Image className={styles.circleBgIcon} alt="" src={Leftcir} />

      <div className={styles.btnParent}>
        <div className={styles.btn}>
          <div
            style={thirdFont.style}
            className={`flex flex-row items-center justify-center ${styles.startTrading}`}
          >
            <h5 className="text-black text-base w-full text-center my-0 mx-0">
              {t("tradingbutton")}
            </h5>
          </div>
        </div>
        <div className={styles.carbonplayFilledParent}>
          <Image className={styles.carbonplayFilledIcon1} alt="" src={Video} />
          <div style={thirdFont.style} className={styles.watchTutorial}>
            <h5 className="text-white text-lg mb-0">{t("watch")}</h5>
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.downloadOurWhitePaperForIParent}>
            <div style={thirdFont.style} className={styles.downloadOurWhite1}>
              <h5 className="text-2xl ">{t("downloadhead")}</h5>
            </div>
            <div style={secondFont.style} className={styles.diveIntoThe1}>
              📥{t("downloadparagraph")} 🚀
            </div>
          </div>
          <div className={styles.mingcutewallet4FillGroup}>
            <Image
              className={styles.carbonplayFilledIcon1}
              alt=""
              src={Downloadd}
            />
            <div style={thirdFont.style} className={styles.connectWallet}>
              <a href="https://moodglobalservices.notion.site/Coliseum-White-Paper-fa2c3eb3583b454a8a4d7ad8d4360391?pvs=4">
                <h5 className="text-black text-base mb-0">
                  {t("downloadbutton")}
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.frameGroup}>
            <Image className={styles.frameIcon1} alt="" src={Frame} />
            <div className={styles.rwfaParent}>
              <div style={myFont.style} className={styles.rwfa}></div>
              <div style={myFont.style} className={styles.whitepaper}>
                <Image src={Whitepaper} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeIpadPro1291Child4} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.groupChild1} />
      </div>
      <div style={thirdFont.style} className={styles.treasuryTokens1}>
        <h5 className="text-3xl">{t("treasuryhead")}</h5>
      </div>
      <div style={secondFont.style} className={styles.immerseYourselfIn1}>
        {" "}
        {t("treasuryparagraph")}{" "}
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <div className={styles.frameParent1}>
            <Image className={styles.frameIcon2} alt="" src={Green} />
            <div style={thirdFont.style} className={styles.totalTradingVolume2}>
              {t("totaltrading")}{" "}
            </div>
            <div style={thirdFont.style} className={styles.cmax24}>
              Cmax +24%
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild2} />
          <div className={styles.frameParent1}>
            <Image className={styles.frameIcon2} alt="" src={White} />
            <div style={thirdFont.style} className={styles.totalTradingVolume2}>
              {t("totaltrading")}{" "}
            </div>
            <div style={thirdFont.style} className={styles.tita24}>
              Tita +24%
            </div>
          </div>
        </div>
        <div className={styles.maskGroupParent}>
          <Image className={styles.maskGroupIcon1} alt="" src={Stats} />
          <div style={thirdFont.style} className={styles.div}>
            150.000.000,00 €
          </div>
          <div className={styles.div1}>=</div>
          <div style={thirdFont.style} className={styles.treasury}>
            {t("treasury")}
          </div>
          <div style={thirdFont.style} className={styles.rsc}>
            150.000.000 RSC
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefitsChild} />
        <div className={styles.benefitsItem} />
        <div className={styles.benefitsInner} />
      </div>

      <div style={thirdFont.style} className={styles.unveilingANew1}>
        {" "}
        {t("firsthead")}{" "}
      </div>
      <div style={myFont.style} className={styles.discoverTheRwfa}>
        {" "}
        {t("secondhead")}{" "}
      </div>

      <section id="comm" className="h-fit w-screen bg-center bg-cover flex flex-col items-center justify-center bg-no-repeat absolute bottom-[9%] landscape:bottom-[7%] landscape:lg:bottom-0 landscape:lg:absolute z-50 opacity-100">
        <img
          src={communityBg.src}
          className=" absolute mt-[10%] w-6/12 mx-auto aspect-square"
          alt=""
        />
        <div>
          <h5
            className="block text-[#FFE925] text-center text-3xl mx-auto my-10"
            style={thirdFont.style}
          >
            {t("communityhead")}
          </h5>
          <h5
            className="block text-white text-xl w-8/12 text-center mx-auto mt-3 mb-5"
            style={secondFont.style}
          >
            {t("communityparagraph")}
          </h5>
          <div className="flex flex-row items-center justify-center gap-5 my-10 px-10">
            <BsGithub color="#ffffff" size={35} />
            <FaXTwitter color="#ffffff" size={35} />
            <TiSocialLinkedinCircular color="#ffffff" size={45} />
            <SiNotion color="#ffffff" size={35} />
          </div>
        </div>
      </section>
      
    </div>

  );
};

export default HomeIPadPro1291;
