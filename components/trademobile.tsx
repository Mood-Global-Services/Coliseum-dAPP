import type { NextPage } from "next";
import { useState, useCallback } from "react";

import styles from "./trade.module.css";

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

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
import Arrowdown from "../public/ri_arrow-up-s-line.svg";
import communityBg from '../public/back.png'

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Homer from "../public/hsss.png";
import Frameg from "../public/greenf.png";
import Tita from "../public/tita.png";
import Navbs from "../public/dd.svg";
import Trads from "../public/t.png";
import Joincom from "../public/Join our community.png";
import Trending from "../public/trending products.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Comingsoon from "../public/Coming Soon.png";
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
import { useTranslation } from "react-i18next";
import GenericMobileNavbar from "./mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

const TradeIPadPro1292: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const onGroupContainer6Click = useCallback(() => {
    // Add your code here
  }, []);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    // Add your code here
  }, []);

  const onGroupContainer8Click = useCallback(() => {
    // Add your code here
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const { t, i18n } = useTranslation();

  // important for translation. import in every page or component
  const switchLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className={styles.tradeIpadPro1292}>
        <div className={styles.tradeIpadPro1292Item} />

        
        <div style={thirdFont.style} className={styles.trendingProducts}>
          {t('trendingproducts')}
        </div>

        <section
          className="h-fit w-screen bg-center bg-cover bg-no-repeat mt-0 absolute bottom-[700px] z-50"
          style={{
            backgroundImage: `url('${communityBg.src}')`,
          }}
        >
          <h5 className="block montrealMedium text-[#FFE925] text-center text-3xl mx-auto my-10">
            {t("communityhead")}
          </h5>
          <h5 className="block text-white text-xl w-10/12 montreal text-center mx-auto mt-3 mb-5">
            {t("communityparagraph")}
          </h5>
          <div className="flex md:hidden flex-row items-center justify-around my-10 px-10">
            <BsGithub color="#ffffff" size={35} />
            <FaXTwitter color="#ffffff" size={35} />
            <TiSocialLinkedinCircular color="#ffffff" size={35} />
            <SiNotion color="#ffffff" size={35} />
          </div>
        </section>


        
        <Link href="/mint">
          <div
            className={styles.rectangleGroup}
            onClick={onGroupContainer6Click}
          >
            <div className={styles.rectangleDiv} />
            <div style={myFont.style} className={styles.titaEtf}>
              <a href="/mint">Tita ETF</a>
            </div>

            <Image className={styles.frameIcon} alt="" src={Frameg} />
          </div>
        </Link>
        
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainer7Click}
        >
          <div className={styles.rectangleDiv} />

          <div style={myFont.style} className={styles.tusaEtf}>
            {t("comingsoon")}{" "}
          </div>
          <Image className={styles.frameIcon1} alt="" src={Frame} />
        </div>
        <div className={styles.groupDiv} onClick={onGroupContainer8Click}>
          <div className={styles.rectangleDiv} />

          <div style={myFont.style} className={styles.tgermEtf}>
            {t("comingsoon")}{" "}
          </div>
          <Image className={styles.frameIcon2} alt="" src={Frame} />
        </div>

        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div style={myFont.style} className={styles.comingSoon}>
            {t("comingsoon")}{" "}
          </div>
          <Image className={styles.frameIcon3} alt="" src={Frame} />
        </div>
        <div className={styles.unfold10ResultParent}>
          <div style={thirdFont.style} className={styles.unfold10Result1}>
            {t('more')}
          </div>
          <Image className={styles.fearrowDownIcon1} alt="" src={Arrowdown} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <div className={styles.div3}>1</div>
            <div className={styles.ellipseParent}>
              <Image className={styles.frameChild} alt="" src={Tita} />
              <div style={secondFont.style} className={styles.tita}>
                tita
              </div>
            </div>
            <div className={styles.polygonParent}></div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div3}>2</div>
            <div className={styles.ellipseParent}>
              <div style={secondFont.style} className={styles.tita}>
                {t("comingsoon")}{" "}
              </div>
            </div>
            <div className={styles.polygonGroup}>
              <img className={styles.frameItem} alt="" src="Polygon 3.svg" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div3}>3</div>
            <div className={styles.ellipseParent}>
              <div style={secondFont.style} className={styles.tita}>
                {t("comingsoon")}{" "}
              </div>
            </div>
            <div className={styles.polygonParent}>
              <img className={styles.frameItem} alt="" src="Polygon 3.svg" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div3}>4</div>
            <div className={styles.ellipseParent}>
              <div style={secondFont.style} className={styles.tita}>
                {t("comingsoon")}{" "}
              </div>
            </div>
            <div className={styles.polygonGroup}></div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div3}>5</div>
            <div className={styles.ellipseParent}>
              <div style={secondFont.style} className={styles.tita}>
                {t("comingsoon")}{" "}
              </div>
            </div>
            <div className={styles.polygonGroup}></div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div3}>6</div>
            <div className={styles.ellipseParent}>
              <div style={secondFont.style} className={styles.tita}>
                {t("comingsoon")}{" "}
              </div>
            </div>
            <div className={styles.polygonParent}></div>
          </div>
        </div>
        <div className={styles.tradeIpadPro1292Inner} />
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

export default TradeIPadPro1292;
