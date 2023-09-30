import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./about.module.css";
import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Circles from "../public/Group 6.png";
import Snake from "../public/Vector 19.png";
import Image from "next/image";
import Sidecircle from "../public/Group 8.png";
import Head from "next/head";
import Star from "../public/Union.png";
import Abouts from "../public/aboutbac.png";
import Sociallin from "../public/Group 87.svg";
import Brother from "../public/Mask Group.svg";
import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from "../components/navbar";
import Footer from "../components/lastfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import IpadAbout from "../components/ipadabout";
import { useTranslation } from "react-i18next";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Languageswitch from "../components/desktop";
import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Roadmap from "../public/Road Map.png";
import Aboutus from "../public/aust.png";

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

import communityBg from "../public/back.png";

import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const HomepageAbout: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onTradeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
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
      <div className={styles.ipadabout}>
        <IpadAbout />
      </div>

      <div className={styles.homepageAbout}>
        <GenericMobileNavbar />
        <div className={styles.homepageAboutChild} />
        <Image className={styles.homepageAboutItem} alt="" src={Circles} />
        <div className={styles.rwfa}>RWFA</div>

        <Image className={styles.unionIcon2} alt="" src={Star} />
        <img className={styles.unionIcon3} alt="" src="Union.svg" />
        <div className="w-screen h-fit absolute top-[260px] px-20">
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">{t('about')}</h5>
          <h5 style={secondFont.style} className="text-2xl le text-white w-10/12 leading-relaxed mb-5">{t('aboutparagraph')}</h5>
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">{t('roadmap')}</h5>
          <h5 style={secondFont.style} className="text-2xl le text-white w-10/12 leading-relaxed mb-5">{t('roadmapparagraph')}</h5>

        </div>

        <div className={styles.vectorParent} style={{top: "1100px"}}>
          <Image className={styles.groupItem} alt="" src={Snake} />

          <div className={styles.frameDiv} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild10} />
          <div style={myFont.style} className={styles.q1}>
            Q1
          </div>
          <div style={myFont.style} className={styles.q3}>
            Q3
          </div>
          <div style={myFont.style} className={styles.q2}>
            Q2
          </div>
          <div style={myFont.style} className={styles.q4}>
            Q4
          </div>
          <div className={styles.distributionTokenCbcContainer}>
            <p style={fourthFont.style} className={styles.blankLine}>
              {t("roadmapone")}{" "}
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer1}>
            <p style={fourthFont.style} className={styles.blankLine}>
              {" "}
              {t("roadmapthree")}{" "}
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer2}>
            <p style={fourthFont.style} className={styles.blankLine}>
              {" "}
              {t("roadmaptwo")}{" "}
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer3}>
            <p style={fourthFont.style} className={styles.blankLine}>
              {" "}
              {t("roadmapfour")}{" "}
            </p>
          </div>
        </div>

        <div className="w-screen h-fit absolute top-[2500px] px-20">
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">{t('audit')}</h5>
          <h5 style={secondFont.style} className="text-2xl le text-white w-10/12 leading-relaxed mb-5">{t('auditparagraph')}</h5>
          
        </div>

        
      </div>

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

export default HomepageAbout;
