import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./ipadprofile.module.css";

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
import Footer from "../components/ipadfooter";
import Homer from "../public/hsss.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { ST } from "next/dist/shared/lib/utils";
import localFont from "next/font/local";
import Chart from "../components/profilechart";
import Navbar from "../components/navbar";
import Aboutmobile from "../components/aboutmobile";
import IpadProfile from "../components/ipadprofile";

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Netwo from "../public/Net-worth.png";
import Pl from "../public/P&L.png";

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

import Languageswitch from "../components/desktop";

import { useTranslation } from "react-i18next";

import Holdins from "../public/Holdings.png";
import GenericMobileNavbar from "./mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const ProfileIPadPro1294: NextPage = () => {
  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutTextClick = useCallback(() => {
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
    <div className={`${styles.profileIpadPro1294} h-[2900px] landscape:h-[2900px]`}>
		<GenericMobileNavbar />
      <div className={styles.profileIpadPro1294Child} />
      <Image className={styles.circleBgIcon} alt="" src={Circles} />
      

      

      
      <img className={styles.unionIcon2} alt="" src="Union.png" />
      <img className={styles.unionIcon3} alt="" src="Union.png" />
      
      <Image className={styles.profileIpadPro1294Inner} alt="" src={User} />
      <div style={myFont.style} className={styles.sebastianMathew}>
        Test User
      </div>
      <div style={thirdFont.style} className={styles.networth}>
        <Image src={Netwo} alt="" />
      </div>
      <div className={styles.div}>$0</div>
      <div style={thirdFont.style} className={styles.hi}>
        HI,
      </div>
      <div className={styles.mdilocationParent}>
        <Image className={styles.mdilocationIcon1} alt="" src={Location} />
        <div style={thirdFont.style} className={styles.nwBobcatLane}>
          Test
        </div>
      </div>
      <div className={styles.rectangleDiv} />
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
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
        </div>
        <img className={styles.groupIcon3} alt="" src="Group.png" />
        <img className={styles.groupIcon4} alt="" src="Group.png" />
        <img className={styles.groupIcon5} alt="" src="Group.png" />
        <img className={styles.groupIcon6} alt="" src="Group.png" />
      </div>
      <div style={thirdFont.style} className={styles.pl}>
        <Image src={Pl} alt="" />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon1} alt="" src="Vector.png" />
        <div style={thirdFont.style} className={styles.home}>
          +24%
        </div>
      </div>
      <div style={thirdFont.style} className={styles.holdings}>
        <Image src={Holdins} alt="" />
      </div>
      <div className={styles.profileIpadPro1294Child1} />
      <div className={styles.unfold11Coin1}>Unfold 11 Coin</div>
      <div className={styles.polygon31b1e7a0Parent}>
        <Image className={styles.polygon31b1e7a0Icon} alt="" src={Polygon} />
        <div className={styles.polygonParent}>
          <div style={thirdFont.style} className={styles.polygon}>
            Polygon
          </div>
          <div className={styles.div2}>
            <span>
              <b className={styles.b}>$05</b>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span}>
              <span>03%</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.mantle61752091Parent}>
        <Image className={styles.mantle61752091Icon} alt="" src={Mantle} />
        <div className={styles.polygonParent}>
          <div style={thirdFont.style} className={styles.polygon}>
            Mantie
          </div>
          <div className={styles.div2}>
            <span>
              <b className={styles.b}>$75</b>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span}>
              <span>37%</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.eth47c40f70Parent}>
        <Image className={styles.polygon31b1e7a0Icon} alt="" src={Eth} />
        <div className={styles.polygonParent}>
          <div style={thirdFont.style} className={styles.polygon}>
            Ethereum
          </div>
          <div className={styles.div2}>
            <span>
              <b className={styles.b}>$83</b>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span}>
              <span>43%</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.text8}>{` `}</div>
      <div className={styles.eth47c40f70Group}>
        <Image className={styles.polygon31b1e7a0Icon} alt="" src={Wallet} />
        <div className={styles.polygonParent}>
          <div className={styles.walletWrapper}>
            <div style={thirdFont.style} className={styles.polygon}>
              Wallet
            </div>
          </div>
          <b className={styles.b3}>$435</b>
        </div>
      </div>
      <div className={styles.eth47c40f70Container}>
        <Image className={styles.polygon31b1e7a0Icon} alt="" src={Pool} />
        <div className={styles.polygonParent}>
          <div className={styles.poolTogetherWrapper}>
            <div style={thirdFont.style} className={styles.polygon}>
              Pool Together
            </div>
          </div>
          <b className={styles.b3}>$0</b>
        </div>
      </div>
      <section id="comm" className="h-fit w-screen bg-center bg-cover flex flex-col items-center justify-center bg-no-repeat absolute bottom-[12%] landscape:bottom-[12%] landscape:lg:bottom-0 landscape:lg:absolute z-50 opacity-100">
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
  );
};

export default ProfileIPadPro1294;
