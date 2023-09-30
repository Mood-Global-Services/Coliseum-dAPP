import type { NextPage } from "next";
import { useState, useCallback } from "react";

import styles from "./mintmobile.module.css";

import MenuIPadPro1291 from "../components/mintmenu";
import PortalPopup from "../components/portalpopup";
import LanguageSelector from "./mobilelang";

import Image from "next/image";
import Logo from "../public/Group 7.svg";
import CommitLogo from "../public/Group 1000000931.svg";
import Tokens from "../public/Ellipse 74.svg";
import Arrow from "../public/ri_arrow-up-s-line.svg";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Headlogo from "../public/logs.png";
import Circles from "../public/Group 6.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import Minting from "../components/minting";
import Chart from "../components/chart";
import { ConnectKitButton } from "connectkit";
import Mintmobile from "../components/mintmobile";
import localFont from "next/font/local";
import Navbs from "../public/dd.svg";
import Menus from "../public/t.png";

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import GenericMobileNavbar from "./mobileGenericNavbar";

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

const TradeSubpageIPadPro129: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <>
      <div className={styles.tradeSubpageIpadPro129}>
        <div className={styles.tradeSubpageIpadPro129Child} />

        <div className={`${styles.swapMintburn} w-8/12`}>
          <Minting />
        </div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer3Click}>
          <div className={styles.groupItem} />
          <div className={styles.frameGroup}>
            <div className={styles.lineParent}>
              <div className={styles.frameInner} />
              <div className={styles.frameInner} />
              <div className={styles.frameInner} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild2} />
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
          </div>
        </div>
        <div style={myFont.style} className={styles.titaEtf}>
          Tita ETF
        </div>
        <div className={styles.frameParent2}>
          <h5
            className={`text-white text-xl`}
            style={{
              fontFamily: `${secondFont.style.fontFamily}`,
            }}
          >
            TER → 0.33%
          </h5>
          <div className="w-full h-fit flex flex-row items-center justify-start gap-2">
            <h5
              className="text-white text-2xl bg-[#3e4057] px-2 py-1 rounded-lg"
              style={{
                fontFamily: `${secondFont.style.fontFamily}`,
              }}
            >
              128.68
            </h5>
            <h5
              className="text-white text-2xl bg-[#3e4057] px-2 py-1 rounded-lg"
              style={{
                fontFamily: `${secondFont.style.fontFamily}`,
              }}
            >
              +1,03 | +0,83%{" "}
            </h5>
          </div>
        </div>
      </div>
      {isMenuIPadPro1291Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuIPadPro1291}
        >
          <MenuIPadPro1291 onClose={closeMenuIPadPro1291} />
        </PortalPopup>
      )}
      <GenericMobileNavbar />
      <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
        <a href="/">
          <img
            src={Headlogo.src}
            className=" aspect-square w-20 md:w-36 my-10 md:my-16"
            alt=""
          />
        </a>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full mb-6 md:mb-10">
          <a href="/trade">
            <h5 className="text-white montreal text-2xl md:text-2xl">Trade</h5>
          </a>
          <a href="/stake">
            <h5 className="text-white montreal text-2xl md:text-2xl">Stake</h5>
          </a>
          <a href="/about">
            <h5 className="text-white montreal text-2xl md:text-2xl">About</h5>
          </a>
          <a href="/profile">
            <h5 className="text-white montreal text-2xl md:text-2xl">
              Profile
            </h5>
          </a>
        </div>
        <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
          All Rights Reserved - © 2023 CMax
        </h5>
      </section>
    </>
  );
};

export default TradeSubpageIPadPro129;
