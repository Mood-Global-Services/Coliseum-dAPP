import type { NextPage } from "next";
import { useState, useCallback } from "react";

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";
import Flower from "../public/Group 1000000920.png";
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
import Footer from "../components/aboutfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import Navbs from "../public/dd.svg";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import communityBg from "../public/back.png";
import { useTranslation } from "react-i18next";

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Roadmap from "../public/Road Map.png";
import Abs from "../public/a.png";
import Abtus from "../public/About Us.png";
import Joincom from "../public/Join our community.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Homer from "../public/hsss.png";

import F from "../public/Q1.png";
import S from "../public/Q2.png";
import T from "../public/Q3.png";
import Fo from "../public/Q4.png";
import LanguageSelector from "./mobilelang";

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

import styles from "./last.module.css";
import GenericMobileNavbar from "./mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
const AboutIPadPro1293: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-screen gradBlueBG">
      <section className="w-screen h-fit absolute top-0 pt-40 gradBlueBG">
          <section className="w-screen h-fit px-3">
            <h5 className="text-3xl capitalize mb-3" style={myFont.style}>
              {t("about")}
            </h5>
            <h5
              className="text-sm text-white capitalize mb-5 leading-relaxed"
              style={secondFont.style}
            >
              {t("aboutparagraph")}
            </h5>
            <h5 className="text-3xl capitalize mb-3" style={myFont.style}>
              {t("roadmap")}
            </h5>
            <h5
              className="text-sm text-white capitalize leading-relaxed"
              style={secondFont.style}
            >
              {t("roadmapparagraph")}
            </h5>
            <div className="flex flex-col items-start justify-start mt-5">
              <div className="w-full h-fit p-4 mb-2 aboutGlassBox">
                <h5
                  className="text-[#A0FA09] text-xl mb-3"
                  style={myFont.style}
                >
                  Q1
                </h5>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={secondFont.style}
                >
                  {t("roadmapone")}
                </p>
              </div>
              <div className="w-full h-fit p-4 mb-2 aboutGlassBox glassy">
                <h5
                  className="text-[#A0FA09] text-xl mb-3"
                  style={myFont.style}
                >
                  Q2
                </h5>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={secondFont.style}
                >
                  {t("roadmapthree")}
                </p>
              </div>
              <div className="w-full h-fit p-4 mb-2 aboutGlassBox glassy">
                <h5
                  className="text-[#A0FA09] text-xl mb-3"
                  style={myFont.style}
                >
                  Q3
                </h5>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={secondFont.style}
                >
                  {t("roadmapfour")}
                </p>
              </div>
              <div className="w-full h-fit p-4 mb-2 aboutGlassBox glassy">
                <h5
                  className="text-[#A0FA09] text-xl mb-3"
                  style={myFont.style}
                >
                  Q4
                </h5>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={secondFont.style}
                >
                  {t("roadmaptwo")}
                </p>
              </div>
            </div>
            <h5 className="text-3xl capitalize mb-3 mt-5" style={myFont.style}>
              {t("audit")}
            </h5>
            <h5
              className="text-sm text-white capitalize mb-20  leading-relaxed"
              style={secondFont.style}
            >
              {t("auditparagraph")}
            </h5>
            <div
              className="h-fit w-full bg-center bg-cover bg-no-repeat z-50"
              style={{
                backgroundImage: `url('${communityBg.src}')`,
              }}
            >
              <h5
                className="block montrealMedium text-[#FFE925] text-center text-3xl mx-auto my-10"
                style={thirdFont.style}
              >
                {t("communityhead")}
              </h5>
              <h5
                className="block text-white text-xl w-10/12 montreal text-center mx-auto mt-3 mb-5"
                style={secondFont.style}
              >
                {t("communityparagraph")}
              </h5>
              <div className="flex md:hidden flex-row items-center justify-around my-10 px-10">
                <BsGithub color="#ffffff" size={35} />
                <FaXTwitter color="#ffffff" size={35} />
                <TiSocialLinkedinCircular color="#ffffff" size={45} />
                <SiNotion color="#ffffff" size={35} />
              </div>
            </div>
          </section>
          <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start pt-10 pb-24">
            <a href="/">
              <img
                src={Headlogo.src}
                className=" aspect-square w-20 md:w-36 my-10 md:my-16"
                alt=""
              />
            </a>
            <div className="flex flex-col items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full mb-6 md:mb-10">
              <a href="/trade">
                <h5
                  className="text-white montreal text-2xl md:text-2xl"
                  style={thirdFont.style}
                >
                  Trade
                </h5>
              </a>
              <a href="/stake">
                <h5
                  className="text-white montreal text-2xl md:text-2xl"
                  style={thirdFont.style}
                >
                  Stake
                </h5>
              </a>
              <a href="/about">
                <h5
                  className="text-white montreal text-2xl md:text-2xl"
                  style={thirdFont.style}
                >
                  About
                </h5>
              </a>
              <a href="/profile">
                <h5
                  className="text-white montreal text-2xl md:text-2xl"
                  style={thirdFont.style}
                >
                  Profile
                </h5>
              </a>
            </div>
            <h5
              className="montreal text-gray-500 text-sm  bottom-8"
              style={thirdFont.style}
            >
              All Rights Reserved - © 2023 CMax
            </h5>
          </section>
        </section>
      {isMenuIPadPro1291Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuIPadPro1291}
        >
          <MenuIPadPro1291 />
        </PortalPopup>
      )}
      <GenericMobileNavbar />
    </div>
  );
};

export default AboutIPadPro1293;
