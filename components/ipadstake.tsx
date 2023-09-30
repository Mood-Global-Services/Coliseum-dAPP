import type { NextPage } from "next";
import { useState, useCallback } from "react";
import ToolTip from "../components/tool-tip";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./ipadstake.module.css";

import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Headlogo from "../public/logs.png";
import Image from "next/image";
import Circles from "../public/Group 6.png";
import Star from "../public/Union.png";
import Rectangle from "../public/Rectangle 349.png";
import One from "../public/one.png";
import Two from "../public/Group.svg";
import Three from "../public/thrs.svg";
import Fourth from "../public/cc.png";
import Mask from "../public/bacu.png";
import Dollar from "../public/ant-design_dollar-outlined.svg";
import Right from "../public/ep_arrow-right-bold.svg";
import Left from "../public/ep_arrow-right-bold (1).svg";
import Flower from "../public/back.png";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import localFont from "next/font/local";
import Sliders from "../components/slider";
import Green from "../public/grk.png";
import Chart from "../components/stakechart";
import { ConnectWallet } from "@thirdweb-dev/react";
import PriceView from "../pages/test";
import Cmax from "../components/mintcmax";
import Navbar from "../components/tradenav";
import Footer from "../components/ipadfooter";
import StakeMobile from "../components/stakemobile";
import IpadStake from "../components/ipadstake";
import Homer from "../public/hsss.png";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";

import Stakingstats from "../public/Staking Stats.png";
import Totalrewards from "../public/Top Holders.png";

import StakingBene from "../public/sbp.png";
import Stakingpoo from "../public/Staking pool.png";
import Joins from "../public/jocs.png";
import Cmaxs from "../public/cmax price.png";
import Totalamo from "../public/Total amount stake.png";
import Claimre from "../public/claim rewards.png";
import Usos from "../public/uso.png";
import Languageswitch from "../components/desktop";

const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

import { useTranslation } from "react-i18next";

import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
import communityBg from "../public/back.png";

import GenericMobileNavbar from "./mobileGenericNavbar";

const StakeIPadPro1292: NextPage = () => {
  const [isToolTipOpen, setToolTipOpen] = useState(false);
  const [isToolTip1Open, setToolTip1Open] = useState(false);
  const [isToolTip2Open, setToolTip2Open] = useState(false);
  const [isToolTip3Open, setToolTip3Open] = useState(false);
  const router = useRouter();

  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIconClick = useCallback(() => {
    // Add your code here
  }, []);

  const openToolTip = useCallback(() => {
    setToolTipOpen(true);
  }, []);

  const closeToolTip = useCallback(() => {
    setToolTipOpen(false);
  }, []);

  const openToolTip1 = useCallback(() => {
    setToolTip1Open(true);
  }, []);

  const closeToolTip1 = useCallback(() => {
    setToolTip1Open(false);
  }, []);

  const openToolTip2 = useCallback(() => {
    setToolTip2Open(true);
  }, []);

  const closeToolTip2 = useCallback(() => {
    setToolTip2Open(false);
  }, []);

  const openToolTip3 = useCallback(() => {
    setToolTip3Open(true);
  }, []);

  const closeToolTip3 = useCallback(() => {
    setToolTip3Open(false);
  }, []);

  const onGroupContainer5Click = useCallback(() => {
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
    <>
      <div className={styles.stakeIpadPro1292}>
        <GenericMobileNavbar />
        <div className={styles.stakeIpadPro1292Child} />
        <section id="comm" className="h-fit w-screen bg-center bg-cover flex flex-col items-center justify-center bg-no-repeat absolute bottom-[9%] landscape:bottom-[9%] landscape:lg:bottom-0 landscape:lg:absolute z-50 opacity-100">
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
        
        <Image className={styles.circleBgIcon} alt="" src={Circles} />

        <img className={styles.unionIcon2} alt="" src="Union.png" />
        <img className={styles.unionIcon3} alt="" src="Union.png" />

        <div className={styles.mintcmax} style={{ width: "98% !importnat" }}>
          <Cmax />
        </div>

        <div style={myFont.style} className={styles.stakingBenefits}>
          <Image src={StakingBene} alt="" />
        </div>
        <div style={secondFont.style} className={styles.stakingInBlockchain1}>
          {" "}
          {t("stakebenefitparagraph")}{" "}
        </div>

        <div className={styles.rectangleDiv} />
        <div className={styles.frameParent}>
          <div className={styles.groupParent} onClick={openToolTip}>
            <Image className={styles.frameChild} alt="" src={One} />
            <div style={secondFont.style} className={styles.home}>
              {" "}
              {t("earningreward")}{" "}
            </div>
          </div>
          <div className={styles.frameGroup} onClick={openToolTip1}>
            <div className={styles.frame4}>
              <Image className={styles.groupIcon} alt="" src={Two} />
              <div style={secondFont.style} className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sagittis dolor mauris, at luctus turpis hendrerit
                non. Praesent sit amet ligula id orci venenatis auctor.
                Phasellus porttitor, metus non tincidunt dapibus, orci pede
                pretium neque, sit amet adipiscing ipsum lectus et libero.
                Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui.
                Donec nonummy lacinia lorem. Cras risus arcu, sodales ac,
                ultrices ac, mollis quis, justo. Sed a libero. Quisque risus
                erat, posuere at, tristique non,
              </div>
            </div>
            <div style={secondFont.style} className={styles.networkSecurity}>
              {" "}
              {t("network")}{" "}
            </div>
          </div>
          <div className={styles.groupParent} onClick={openToolTip2}>
            <Image className={styles.frameIcon2} alt="" src={Three} />
            <div style={secondFont.style} className={styles.home}>
              {" "}
              {t("token")}{" "}
            </div>
          </div>
          <div className={styles.groupParent} onClick={openToolTip3}>
            <Image className={styles.groupIcon1} alt="" src={Fourth} />
            <div style={secondFont.style} className={styles.home}>
              {" "}
              {t("liquidity")}{" "}
            </div>
          </div>
        </div>
        <img
          className={styles.eparrowRightBoldIcon2}
          alt=""
          src="ep:arrow-right-bold.png"
        />
        <img
          className={styles.eparrowRightBoldIcon3}
          alt=""
          src="ep:arrow-right-bold.png"
        />
        <div className={styles.stakeIpadPro1292Child1} />
        <div style={thirdFont.style} className={styles.stakingPool}>
          <Image src={Stakingpoo} alt="" />
        </div>
        <div className={styles.frameParent1}>
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
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>

        <div className={styles.groupDiv}>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <div style={secondFont.style} className={styles.home}>
              unstake
            </div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameChild7} />
            <div style={secondFont.style} className={styles.home}>
              stake
            </div>
          </div>
        </div>
        <div className={styles.vectorGroup}>
          <Image className={styles.groupInner} alt="" src={Mask} />
          <div style={thirdFont.style} className={styles.claimRewards}>
            <Image src={Claimre} alt="" />
          </div>
          <div style={secondFont.style} className={styles.totalAmountStake1}>
            <Image src={Totalamo} alt="" />
          </div>
          <div className={styles.aprWrapper}>
            <div style={secondFont.style} className={styles.apr}>
              4 APR%
            </div>
          </div>
          <div style={thirdFont.style} className={styles.cmax}>
            {t("cmax")}
          </div>
          <div className={styles.antDesigndollarOutlinedParent}>
            <div style={thirdFont.style} className={styles.connectWallet}>
              <Image src={Usos} alt="" />
            </div>
          </div>
          <img className={styles.groupChild1} alt="" src="Vector 15.png" />
        </div>
        <div className={styles.text14}>{` `}</div>
        <div className={styles.stakingStatsParent}>
          <div style={thirdFont.style} className={styles.stakingStats}>
            <Image src={Stakingstats} alt="" />
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameChild8} />
              <img className={styles.frameChild9} alt="" src="Vector 16.png" />
              <img className={styles.frameChild10} alt="" src="Vector 17.png" />
              <img className={styles.frameChild11} alt="" src="Vector 18.png" />
              <div style={thirdFont.style} className={styles.topHolders}>
                <Image src={Totalrewards} alt="" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.wrapper}>
                  <b className={styles.home}>1</b>
                </div>
                <div style={secondFont.style} className={styles.div}>
                  09324414
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.container}>
                  <b className={styles.home}>2</b>
                </div>
                <div style={secondFont.style} className={styles.div1}>
                  09324414
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.container}>
                  <b className={styles.home}>3</b>
                </div>
                <div style={secondFont.style} className={styles.div1}>
                  09324414
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.container}>
                  <b className={styles.home}>4</b>
                </div>
                <div style={secondFont.style} className={styles.div1}>
                  09324414
                </div>
              </div>
              <div style={secondFont.style} className={styles.div4}>
                2,337,786
              </div>
              <div style={secondFont.style} className={styles.div5}>
                2,337,786
              </div>
              <div style={secondFont.style} className={styles.div6}>
                2,337,786
              </div>
              <div style={secondFont.style} className={styles.div7}>
                2,337,786
              </div>
              <img className={styles.frameChild12} alt="" src="Arrow 1.png" />
            </div>
            <div
              className={styles.rectangleContainer}
              onClick={onGroupContainer5Click}
            >
              <div className={styles.groupChild2} />
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon3} alt="" src="Vector.png" />
                <div className={styles.g}>8%</div>
              </div>
              <Image className={styles.frameIcon3} alt="" src={Green} />
              <div style={thirdFont.style} className={styles.cmaxPrice}>
                <Image src={Cmaxs} alt="" />
              </div>
            </div>
          </div>
        </div>
        <section className="bg-[#141315] hidden h-fit w-screen md:flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
          <a href="/">
            <img
              src={Headlogo.src}
              className=" aspect-square w-20 mb-10"
              alt=""
            />
          </a>
          <div className="flex flex-row items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full">
            <a href="/">
              <h5
                className="text-white montreal text-2xl md:text-xl"
                style={secondFont.style}
              >
                Home
              </h5>
            </a>
            <a href="/trade">
              <h5 className="text-white montreal text-2xl md:text-xl" style={secondFont.style}>Trade</h5>
            </a>
            <a href="/stake">
              <h5 className="text-white montreal text-2xl md:text-xl" style={secondFont.style}>Stake</h5>
            </a>
            <a href="/about">
              <h5 className="text-white montreal text-2xl md:text-xl" style={secondFont.style}>About</h5>
            </a>
            <a href="/profile">
              <h5 className="text-white montreal text-2xl md:text-xl" style={secondFont.style}>
                Profile
              </h5>
            </a>
          </div>
          <h5 className="montreal text-gray-500 text-sm absolute bottom-8" style={thirdFont.style}>
            All Rights Reserved - © 2023 CMax
          </h5>
        </section>
      </div>
      {isToolTipOpen && <h1></h1>}
      {isToolTip1Open && <h1></h1>}
      {isToolTip2Open && <h1></h1>}
      {isToolTip3Open && <h1></h1>}
    </>
  );
};

export default StakeIPadPro1292;
