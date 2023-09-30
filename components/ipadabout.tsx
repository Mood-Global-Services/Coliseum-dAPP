import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ipadabout.module.css";

import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Circles from "../public/Group 6.png";
import communityBg from "../public/back.png";
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
import Footer from "../components/ipadfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import IpadAbout from "../components/ipadabout";
import Rightone from "../public/Group 8.png";
import Back from "../public/aboutbac.png";
import Homer from "../public/hsss.png";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import GenericMobileNavbar from "./mobileGenericNavbar";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Aboutu from "../public/About Us.png";
import Languageswitch from "../components/desktop";
import { useTranslation } from "react-i18next";
import Roadmap from "../public/Road Map.png";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

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

const AboutIPadPro1293: NextPage = () => {
  const router = useRouter();

  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

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
    <div className={styles.aboutIpadPro1293}>
      <GenericMobileNavbar />
      <Image className={styles.aboutIpadPro1293Child} alt="" src={Rightone} />
      <div className={styles.aboutIpadPro1293Item} />
      <Image className={styles.circleBgIcon} alt="" src={Circles} />

      <img className={styles.unionIcon2} alt="" src="Union.png" />
      <img className={styles.unionIcon3} alt="" src="Union.png" />

      <div style={myFont.style} className={styles.aboutUs}>
        <h5 className="text-4xl capitalize">{t("about")}</h5>
      </div>
      <div style={thirdFont.style} className={styles.roadMap}>
        <h5 className="text-4xl capitalize">{t("roadmap")}</h5>
      </div>
      <div style={thirdFont.style} className={styles.ourVision1}>{`Audit`}</div>
      <div className={styles.loremIpsumDolorContainer}>
        <p style={secondFont.style} className={styles.blankLine}>
          {" "}
          {t("aboutparagraph")}{" "}
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.loremIpsumDolorContainer1}>
        <p style={secondFont.style} className={styles.blankLine}>
          {" "}
          {t("roadmapparagraph")}{" "}
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.loremIpsumDolorContainer2}>
        <p style={secondFont.style} className={styles.blankLine}>
          {" "}
          {t("auditparagraph")}{" "}
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupItem} alt="" src="Vector 19.png" />
        <div className={styles.groupInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.div}>1</div>
        <div className={styles.div1}>2</div>
        <div className={styles.div2}>3</div>
        <div className={styles.div3}>4</div>
        <div className={styles.frameDiv} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
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
          <p style={thirdFont.style} className={styles.blankLine}>
          <span
              style={{
                fontSize:
                  localStorage.getItem("lang") == "ru"
                    ? "14px"
                    : localStorage.getItem("lang") == "fr" ||
                      localStorage.getItem("lang") == "ar" ||
                      localStorage.getItem("lang") == "it"
                    ? "14px"
                    : "14px",
              }}
            >
              {t("roadmapone")}
            </span>
          </p>
        </div>
        <div className={styles.distributionTokenCbcContainer1}>
          <p style={thirdFont.style} className={styles.blankLine}>
          <span
              style={{
                fontSize:
                  localStorage.getItem("lang") == "ru"
                    ? "14px"
                    : localStorage.getItem("lang") == "fr" ||
                      localStorage.getItem("lang") == "ar" ||
                      localStorage.getItem("lang") == "it"
                    ? "14px"
                    : "14px",
              }}
            >
              {t("roadmapfour")}
            </span>
          </p>
        </div>
        <div className={styles.distributionTokenCbcContainer2}>
          <p style={thirdFont.style} className={styles.blankLine}>
            <span
              style={{
                fontSize:
                  localStorage.getItem("lang") == "ru"
                    ? "14px"
                    : localStorage.getItem("lang") == "fr" ||
                      localStorage.getItem("lang") == "ar" ||
                      localStorage.getItem("lang") == "it"
                    ? "14px"
                    : "14px",
              }}
            >
              {t("roadmapthree")}
            </span>
          </p>
        </div>
        <div className={styles.distributionTokenCbcContainer3}>
          <p
            style={thirdFont.style}
            className={`${styles.blankLine} text-base`}
          >
            <span
              style={{
                fontSize:
                  localStorage.getItem("lang") == "ru"
                    ? "12px"
                    : localStorage.getItem("lang") == "fr" ||
                      localStorage.getItem("lang") == "ar" ||
                      localStorage.getItem("lang") == "it"
                    ? "13px"
                    : "13px",
              }}
            >
              {t("roadmaptwo")}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.frameParent}></div>
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
    </div>
  );
};

export default AboutIPadPro1293;
