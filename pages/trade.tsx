import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./trade.module.css";
import Frame from "../public/Frame.png";
import Image from "next/image";
import Fx from "../public/fifth.png";
import Fr from "../public/fourth.png";
import Ft from "../public/sec.png";
import Fa from "../public/sixth.png";
import Fe from "../public/sec.png";
import Fs from "../public/tita.png";
import Sear from "../public/Vector.svg";
import User from "../public/Ellipse 59.svg";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import Headlogo from "../public/logs.png";
import Circles from "../public/Group 6.png";
import Star from "../public/Union.png";
import Rectangle from "../public/Rectangle 349.png";
import Flower from "../public/Group 1000000920.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import localFont from "next/font/local";
import Link from "next/link";
import Stats from "../public/grk.png";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import Sliders from "../components/slider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Footer from "../components/aboutfooter";
import Navbar from "../components/simplenavbar";
import communityBg from "../public/back.png";

import Trademobile from "../components/trademobile";
import Ipadtrade from "../components/ipadtrade";
import { useTranslation } from "react-i18next";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Trendingp from "../public/tp.png";
import Joincom from "../public/jc.png";
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

import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
import { Stat } from "@chakra-ui/react";

const HomepageTrade: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIconClick = useCallback(() => {
    // Add your code here
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Add your code here
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Add your code here
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Add your code here
  }, []);

  // important for translation. import in every page or component
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
      <div className={styles.tade}>
        <Trademobile />
      </div>

      <div className={styles.ipadtrade}>
        <Ipadtrade />
      </div>

      <div className={styles.homepageTrade}>
        <GenericMobileNavbar />

        <Image className={styles.unionIcon3} alt="" src={Star} />

        <div className="w-screen h-fit absolute top-[260px] px-2 gap-4 flex flex-col items-center justify-center">
          <div className="w-10/12 h-fit flex flex-row items-center justify-center gap-4">
            <div className="w-1/3 flex flex-row items-center justify-end">
              <Link href="/mint">
                <div
                  className={styles.rectangleParent}
                  onClick={onGroupContainer2Click}
                >
                  <div
                    className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                  >
                    <h5
                      style={myFont.style}
                      className="text-2xl text-white mb-5"
                    >
                      TITA ETF
                    </h5>
                    <img src={Stats.src} className="h-3/5" alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-1/3 flex flex-row items-center justify-center">
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainer2Click}
              >
                <div
                  className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                >
                  <h5 style={myFont.style} className="text-2xl text-white mb-5">
                    Coming soon
                  </h5>
                  <img src={Frame.src} className="h-3/5" alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-row items-center justify-start">
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainer2Click}
              >
                <div
                  className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                >
                  <h5 style={myFont.style} className="text-2xl text-white mb-5">
                    Coming soon
                  </h5>
                  <img src={Frame.src} className="h-3/5" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-10/12 h-fit flex flex-row items-center justify-center gap-4">
            <div className="w-1/3 flex flex-row items-center justify-end">
              <Link href="/mint">
                <div
                  className={styles.rectangleParent}
                  onClick={onGroupContainer2Click}
                >
                  <div
                  className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                >
                  <h5 style={myFont.style} className="text-2xl text-white mb-5">
                    Coming soon
                  </h5>
                  <img src={Frame.src} className="h-3/5" alt="" />
                </div>
                </div>
              </Link>
            </div>
            <div className="w-1/3 flex flex-row items-center justify-center">
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainer2Click}
              >
                <div
                  className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                >
                  <h5 style={myFont.style} className="text-2xl text-white mb-5">
                    Coming soon
                  </h5>
                  <img src={Frame.src} className="h-3/5" alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-row items-center justify-start">
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainer2Click}
              >
                <div
                  className={`${styles.groupItem} flex flex-col items-start justify-start p-3`}
                >
                  <h5 style={myFont.style} className="text-2xl text-white mb-5">
                    Coming soon
                  </h5>
                  <img src={Frame.src} className="h-3/5" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div style={thirdFont.style} className={styles.trendingProducts}>
            <Image src={Trendingp} alt="" />
          </div>
          <div style={secondFont.style} className={styles.tita}>
            Tita
          </div>
          <div style={secondFont.style} className={styles.aptos}>
            {" "}
            {t("comingsoon")}{" "}
          </div>
          <div style={secondFont.style} className={styles.quant}>
            {t("comingsoon")}{" "}
          </div>
          <div style={secondFont.style} className={styles.pepe}>
            {t("comingsoon")}{" "}
          </div>
          <div style={secondFont.style} className={styles.shibaInu}>
            {t("comingsoon")}{" "}
          </div>
          <div style={secondFont.style} className={styles.worldcoin}>
            {t("comingsoon")}{" "}
          </div>

          <Image className={styles.groupChild8} alt="" src={Fs} />

          <div className={styles.polygonParent}>
            <img className={styles.frameChild} alt="" src="Polygon 3.svg" />
            <div style={thirdFont.style} className={styles.div9}>
              1,2%
            </div>
          </div>
        </div>
        <section className="h-fit w-screen mt bg-center bg-cover hidden landscape:lg:flex xl:flex flex-col items-center justify-center bg-no-repeat absolute bottom-[600px] landscape:lg:bottom-[400px] landscape:xl:bottom-[400px] z-50 opacity-100">
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

export default HomepageTrade;
