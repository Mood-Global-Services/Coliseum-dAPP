import type { NextPage } from "next";
import { useState, useCallback } from "react";

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";

import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/rrr.jpg";
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

import Navbs from "../public/dd.svg";
import Down from "../public/new.png";

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

import Location from "../public/mdi_location.svg";
import styles from "./about.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Homer from "../public/hsss.png";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Abs from "../public/a.png";
import Holdi from "../public/Holdings.png";
import Pl from "../public/P&L.png";
import Networth from "../public/Net-worth.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import LanguageSelector from "./mobilelang";
import GenericMobileNavbar from "./mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
import communityBg from "../public/back.png";

const ProfileIPadPro1294: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const onGroupContainer4Click = useCallback(() => {
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
      <div className={styles.profileIpadPro1294}>
        <div className={styles.profileIpadPro1294Child} />

        

       
        
        <div className={styles.hiSebastianMathewContainer}>
          <p style={myFont.style} className={styles.hi}>
            Hi,
          </p>
          <p style={myFont.style} className={styles.sebastianMathew}>
            User 1
          </p>
        </div>
        <div className={styles.netWorthParent}>
          <div style={thirdFont.style} className={styles.netWorth}>
            <Image src={Networth} alt="" />
          </div>
          <div style={thirdFont.style} className={styles.div}>
            $0
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <Image className={styles.frameChild} alt="" src={User} />
          <div className={styles.mdidiscordParent}>
            <img
              className={styles.mdidiscordIcon1}
              alt=""
              src="mdi:discord.svg"
            />
            <img
              className={styles.mdiredditIcon1}
              alt=""
              src="mdi:reddit.svg"
            />
            <div className={styles.mingcutenotionFillParent}>
              <Image
                className={styles.mingcutenotionFillIcon1}
                alt=""
                src={Notion}
              />
              <Image className={styles.mdigithubIcon1} alt="" src={Github} />
              <Image className={styles.mdigithubIcon1} alt="" src={Twitter} />
              <Image
                className={styles.mingcutenotionFillIcon1}
                alt=""
                src={Linkedin}
              />
            </div>
          </div>
        </div>
        <div className={styles.mdilocationParent}>
          <Image className={styles.mdilocationIcon1} alt="" src={Location} />
          <div style={secondFont.style} className={styles.nwBobcatLane}>
            Test
          </div>
        </div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
          <div className={styles.groupItem} />
          <div className={styles.plParent}>
            <div style={thirdFont.style} className={styles.pl}>
              <Image src={Pl} alt="" />
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
              <div style={thirdFont.style} className={styles.trade}>
                +24%
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild1} />
            </div>

            <div className={styles.frameGroup}>
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
                <div className={styles.g}>1A</div>
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
          </div>
        </div>
        <div style={thirdFont.style} className={styles.holdings}>
          <Image src={Holdi} alt="" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.unfold10ResultParent}>
            <div className={styles.wallet}>unfold 10 result</div>
            <Image className={styles.fearrowDownIcon1} alt="" src={Down} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.eth47c40f70Parent}>
              <img
                className={styles.eth47c40f70Icon}
                alt=""
                src="eth.47c40f70.svg"
              />
              <div className={styles.ethereumParent}>
                <div className={styles.walletWrapper}>
                  <div style={secondFont.style} className={styles.wallet}>
                    Wallet
                  </div>
                </div>
                <b style={thirdFont.style} className={styles.b}>
                  $435
                </b>
              </div>
            </div>
            <div className={styles.eth47c40f70Group}>
              <img
                className={styles.eth47c40f70Icon}
                alt=""
                src="eth.47c40f70.svg"
              />
              <div className={styles.ethereumParent}>
                <div className={styles.poolTogetherWrapper}>
                  <div style={secondFont.style} className={styles.wallet}>
                    Pool Together
                  </div>
                </div>
                <b style={thirdFont.style} className={styles.b}>
                  $0
                </b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.eth47c40f70Container}>
              <img
                className={styles.eth47c40f70Icon}
                alt=""
                src="eth.47c40f70.svg"
              />
              <div className={styles.ethereumParent}>
                <div style={secondFont.style} className={styles.wallet}>
                  Ethereum
                </div>
                <div className={styles.div2}>
                  <span>
                    <b style={thirdFont.style} className={styles.b2}>
                      $83
                    </b>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.span}>
                    <span>43%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.eth47c40f70Container}>
              <img
                className={styles.mantle61752091Icon}
                alt=""
                src="mantle.61752091.svg"
              />
              <div className={styles.ethereumParent}>
                <div style={secondFont.style} className={styles.wallet}>
                  Mantie
                </div>
                <div className={styles.div2}>
                  <span>
                    <b style={thirdFont.style} className={styles.b2}>
                      $75
                    </b>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.span}>
                    <span>37%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.eth47c40f70Container}>
              <img
                className={styles.eth47c40f70Icon}
                alt=""
                src="polygon.31b1e7a0.svg"
              />
              <div className={styles.ethereumParent}>
                <div style={secondFont.style} className={styles.wallet}>
                  Polygon
                </div>
                <div className={styles.div2}>
                  <span>
                    <b style={thirdFont.style} className={styles.b2}>
                      $05
                    </b>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.span}>
                    <span>03%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <section
          className="h-fit w-screen bg-center bg-cover bg-no-repeat mt-0 absolute bottom-[600px] z-50"
          style={{
            backgroundImage: `url('${communityBg.src}')`,
          }}
        >
          <h5
            className="block text-[#FFE925] text-center text-3xl mx-auto my-10"
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
        </section>
      <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
            <a href="/"><img src={Headlogo.src} className=' aspect-square w-20 md:w-36 my-10 md:my-16' alt="" /></a>
            <div className='flex flex-col items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full mb-6 md:mb-10'>
                <a href="/trade"><h5 className='text-white montreal text-2xl md:text-2xl'>Trade</h5></a>
                <a href="/stake"><h5 className='text-white montreal text-2xl md:text-2xl'>Stake</h5></a>
                <a href="/about"><h5 className='text-white montreal text-2xl md:text-2xl'>About</h5></a>
                <a href="/profile"><h5 className='text-white montreal text-2xl md:text-2xl'>Profile</h5></a>
               
            </div>
            <h5 className="montreal text-gray-500 text-sm absolute bottom-8">All Rights Reserved - © 2023 CMax</h5>
            
        </section>
    </>
  );
};

export default ProfileIPadPro1294;
