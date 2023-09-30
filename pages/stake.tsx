import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import ToolTip from "../components/tool-tip";
import PortalPopup from "../components/portal-popup";
import styles from "./stake.module.css";
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
import Footer from "../components/footer";
import StakeMobile from "../components/stakemobile";
import IpadStake from "../components/ipadstake";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";

import Stakingstats from "../public/Staking Stats.png";
import Totalrewards from "../public/Top Holders.png";
import Stakingben from "../public/sbbb.png";
import Stakingpol from "../public/sp.png";

import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Claimrewards from "../public/cr.png";
import Totalamount from "../public/ta.png";
import Dollarus from "../public/uso.png";
import Cmaxpr from "../public/cpp.png";
import Joincom from "../public/jc.png";
import Languageswitch from "../components/desktop";
import communityBg from "../public/back.png";
import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

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

const HomepageStake: NextPage = () => {
  const [isToolTipOpen, setToolTipOpen] = useState(false);
  const [isToolTip1Open, setToolTip1Open] = useState(false);
  const [isToolTip2Open, setToolTip2Open] = useState(false);

  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onTradeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutText1Click = useCallback(() => {
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

  const onGroupContainer4Click = useCallback(() => {
    // Add your code here
  }, []);

  const onGroupContainer6Click = useCallback(() => {
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
    <>
      <div>
        <div className={styles.mobile}>
          <StakeMobile />
        </div>

        <div className={styles.ipadstake}>
          <IpadStake />
        </div>

        <div className={styles.homepageStake}>
		<GenericMobileNavbar />
          <div className={styles.homepageStakeChild} />
          <div className={styles.homepageStakeInner} />
          <Image className={styles.rectangleIcon} alt="" src={Rectangle} />
         

          <div className={"absolute landscape:lg:top-[250px] landscape:xl:top-[50px] top-[150px]  w-screen "}>
            <Cmax />
          </div>

          

          <Image className={styles.unionIcon3} alt="" src={Star} />

          <div style={myFont.style} className={styles.stakingBenefits}>
            <Image src={Stakingben} alt="" />
          </div>
          <div className={styles.homepageStakeChild4} />

          <div className={styles.frameParent}>
            <div className={styles.groupParent} onClick={openToolTip}>
              <Image className={styles.frameChild} alt="" src={One} />
              <div style={secondFont.style} className={styles.search}>
                {t("earningrewards")}{" "}
              </div>
            </div>
            <div className={styles.frameGroup} onClick={openToolTip1}>
              <div className={styles.frame5}>
                <Image className={styles.groupIcon1} alt="" src={Two} />
                <div
                  style={secondFont.style}
                  className={styles.loremIpsumDolor1}
                >
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
                {t("network")}{" "}
              </div>
            </div>
            <div className={styles.frameDiv} onClick={openToolTip2}>
              <Image className={styles.frameIcon2} alt="" src={Three} />
              <div style={secondFont.style} className={styles.search}>
                {t("token")}{" "}
              </div>
            </div>
            <div className={styles.groupGroup}>
              <Image className={styles.groupIcon2} alt="" src={Fourth} />
              <div style={secondFont.style} className={styles.search}>
                {t("liquidity")}{" "}
              </div>
            </div>
          </div>

          <div style={thirdFont.style} className={styles.stakingPool}>
            <Image src={Stakingpol} alt="" />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                1G
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                1M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                3M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                6M
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                1A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                3A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                5A
              </div>
            </div>
            <div className={styles.gWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
                YTD
              </div>
            </div>
            <div className={styles.maxWrapper}>
              <div style={thirdFont.style} className={styles.trade}>
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
          <div className={styles.homepageStakeChild5}>
            <Chart />
          </div>
          <div style={secondFont.style} className={styles.stakingInBlockchain1}>
            {" "}
            {t("stakebenefitparagraph")}{" "}
          </div>
          <div className={styles.vectorGroup}>
            <Image className={styles.groupItem} alt="" src={Mask} />
            <Image className={styles.maskGroupIcon6} alt="" src={Mask} />
            <div style={thirdFont.style} className={styles.claimRewards}>
              <Image src={Claimrewards} alt="" />
            </div>
            <div style={secondFont.style} className={styles.totalAmountStake1}>
              <Image src={Totalamount} alt="" />
            </div>
            <div className={styles.aprWrapper}>
              <div style={secondFont.style} className={styles.apr}>
                4 APR%
              </div>
            </div>
            <div style={thirdFont.style} className={styles.cmax}>
              1000 cmax
            </div>
            <div className={styles.antDesigndollarOutlinedParent}>
              <div style={thirdFont.style} className={styles.connectWallet}>
                <Image src={Dollarus} alt="" />
              </div>
            </div>
            <img className={styles.groupInner} alt="" src="Vector 15.svg" />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div style={secondFont.style} className={styles.search}>
                un stake
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild7} />
              <div style={secondFont.style} className={styles.search}>
                stake
              </div>
            </div>
          </div>

          <div className={styles.stakingStatsParent}>
            <div className={styles.groupChild1} />
            <div style={thirdFont.style} className={styles.topHolders}>
              {t("topholders")}{" "}
            </div>
            <div className={styles.text28}>{` `}</div>
            <img className={styles.groupChild2} alt="" src="Vector 16.svg" />
            <img className={styles.groupChild3} alt="" src="Vector 17.svg" />
            <img className={styles.groupChild4} alt="" src="Vector 18.svg" />
            <div style={secondFont.style} className={styles.div}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div1}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div2}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div3}>
              2,337,786
            </div>
            <div
              className={styles.rectangleParent}
              onClick={onGroupContainer4Click}
            >
              <div className={styles.groupChild5} />
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
                <div className={styles.trade}>8%</div>
              </div>
              <Image className={styles.frameIcon3} alt="" src={Green} />
              <div className={styles.cmaxPrice}>
                <span className={styles.cmax1}>cmax</span>
                <span className={styles.price}> price</span>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.wrapper}>
                <b style={thirdFont.style} className={styles.search}>
                  1
                </b>
              </div>
              <div style={secondFont.style} className={styles.div5}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  2
                </b>
              </div>
              <div style={secondFont.style} className={styles.div6}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  3
                </b>
              </div>
              <div style={secondFont.style} className={styles.div6}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  4
                </b>
              </div>
              <div style={secondFont.style} className={styles.div6}>
                09324414
              </div>
            </div>
          </div>

          <div className={styles.stakingStatsParent}>
            <div style={thirdFont.style} className={styles.stakingStats}>
              <Image src={Stakingstats} alt="" />
            </div>
            <div className={styles.groupChild1} />
            <div style={thirdFont.style} className={styles.topHolders}>
              <h5 className="text-white text-2xl text-center" style={myFont.style}>Top Holders</h5>
            </div>
            <div className={styles.text28}>{` `}</div>
            <img className={styles.groupChild2} alt="" src="Vector 16.svg" />
            <img className={styles.groupChild3} alt="" src="Vector 17.svg" />
            <img className={styles.groupChild4} alt="" src="Vector 18.svg" />
            <div style={secondFont.style} className={styles.div9}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div1}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div11}>
              2,337,786
            </div>
            <div style={secondFont.style} className={styles.div3}>
              2,337,786
            </div>
            <div
              className={styles.rectangleParent}
              onClick={onGroupContainer6Click}
            >
              <div className={styles.groupChild5} />
              <div className={styles.vectorContainer}>
                <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
                <div className={styles.trade}>8%</div>
              </div>
              <Image className={styles.frameIcon3} alt="" src={Green} />
              <div style={thirdFont.style} className={styles.cmaxPrice1}>
                <h5 className="text-white text-2xl text-center" style={myFont.style}>CMAX PRICE</h5>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.wrapper}>
                <b style={thirdFont.style} className={styles.search}>
                  1
                </b>
              </div>
              <div style={secondFont.style} className={styles.div14}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  2
                </b>
              </div>
              <div style={secondFont.style} className={styles.div15}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  3
                </b>
              </div>
              <div style={secondFont.style} className={styles.div15}>
                09324414
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.container}>
                <b style={thirdFont.style} className={styles.search}>
                  4
                </b>
              </div>
              <div style={secondFont.style} className={styles.div15}>
                09324414
              </div>
            </div>
          </div>
        </div>
        <section className="h-fit w-screen mt bg-center bg-cover hidden landscape:lg:flex xl:flex flex-col items-center justify-center bg-no-repeat absolute bottom-[500px] landscape:lg:bottom-[400px] landscape:xl:bottom-[450px] z-50 opacity-100">
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
      {isToolTipOpen && <ToolTip onClose={closeToolTip} />}
      {isToolTip1Open && <ToolTip onClose={closeToolTip1} />}
      {isToolTip2Open && <ToolTip onClose={closeToolTip2} />}
    </>
  );
};

export default HomepageStake;
