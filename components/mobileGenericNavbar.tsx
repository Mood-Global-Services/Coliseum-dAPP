import localFont from "next/font/local";
import logo from "../public/logs.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React, { useCallback, useState, useEffect } from "react";
import PortalPopup from "./portalpopup";
import MenuIPadPro1291 from "./menumobile";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import EnglishFlag from "../public/Flag.svg"; // Import the English flag image
import SpanishFlag from "../public/spain (1).svg"; // Import the Spanish flag image
import FrenchFlag from "../public/Flag (1).svg"; // Import the French flag image
import ItalianFlag from "../public/Flag (2).svg";
import RussanFlag from "../public/Flag (3).svg";
import ArbaianFlag from "../public/arabian.svg";
import { ConnectWallet } from "@thirdweb-dev/react";

import { LiaWalletSolid } from "react-icons/lia";

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

function GenericMobileNavbar() {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState<{
    name: string;
    image: StaticImageData;
  }>({
    name: "EN", // Set English as the default language
    image: EnglishFlag,
  });

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    language: string,
    flagImage: StaticImageData
  ) => {
    setSelectedLanguage({ name: language, image: flagImage });
    localStorage.setItem("lang", language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (
      localStorage.getItem("lang") == "en" ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " "
    ) {
      localStorage.setItem("lang", "en");
      handleLanguageChange("en", EnglishFlag);
    } else if (localStorage.getItem("lang") == "fr") {
      localStorage.setItem("lang", "fr");
      handleLanguageChange("fr", FrenchFlag);
    } else if (localStorage.getItem("lang") == "it") {
      localStorage.setItem("lang", "it");
      handleLanguageChange("it", ItalianFlag);
    } else if (localStorage.getItem("lang") == "ru") {
      localStorage.setItem("lang", "ru");
      handleLanguageChange("ru", RussanFlag);
    } else if (localStorage.getItem("lang") == "ar") {
      localStorage.setItem("lang", "ar");
      handleLanguageChange("ar", ArbaianFlag);
    } else if (localStorage.getItem("lang") == "es") {
      localStorage.setItem("lang", "es");
      handleLanguageChange("es", SpanishFlag);
    }
  }, []);
  return (
    <>
      <section className="md:hidden absolute top-0 left-0 h-fit w-screen flex flex-row items-center justify-between p-2">
        <a href="/">
          <img src={logo.src} className="h-16 aspect-square" alt="" />
        </a>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <Menu
              align={"end"}
              direction="bottom"
              arrow={true}
              menuButton={
                <MenuButton>
                  <div className="h-8 aspect-square rounded-full border-yellow-400 border p-[1px] mr-3">
                    <Image
                      src={selectedLanguage.image}
                      alt={selectedLanguage.name}
                      className="w-full h-full  aspect-square"
                    />
                  </div>
                </MenuButton>
              }
              transition
            >
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "en");
                  handleLanguageChange("en", EnglishFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={EnglishFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    EN
                  </h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "fr");
                  handleLanguageChange("fr", FrenchFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={FrenchFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    FR
                  </h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "es");
                  handleLanguageChange("es", SpanishFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={SpanishFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    ES
                  </h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "it");
                  handleLanguageChange("it", ItalianFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={ItalianFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    IT
                  </h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "ru");
                  handleLanguageChange("ru", RussanFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={RussanFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    RU
                  </h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "ar");
                  handleLanguageChange("ar", ArbaianFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={ArbaianFlag}
                    alt="English"
                    className="h-6 w-6 mr-3 aspect-square"
                  />
                  <h5
                    className={` text-xl text-white my-0`}
                    style={secondFont.style}
                  >
                    AR
                  </h5>
                </div>
              </MenuItem>
            </Menu>

            <HiOutlineMenuAlt3
              color="#ffffff"
              size={35}
              onClick={() => {
                openMenuIPadPro1291();
              }}
            />
          </div>
        </div>
      </section>
      <section className="hidden lg:flex flex-row items-center justify-between absolute top-0 w-screen h-fit py-4 px-[3%] z-50">
        <div className="flex flex-row items-center justify-start gap-5">
          <a href="/">
            <img src={logo.src} className="h-16 aspect-square" alt="" />
          </a>
          <div className="flex flex-row gap-3 items-center justify-evenly">
            <a href="/">
              <h5 style={fourthFont.style} className="text-white text-xl mb-0">
                {t("home")}
              </h5>
            </a>
            <a href="/trade">
              <h5 style={fourthFont.style} className="text-white text-xl mb-0">
                Trade
              </h5>
            </a>
            <a href="/stake">
              <h5 style={fourthFont.style} className="text-white text-xl mb-0">
                Stake
              </h5>
            </a>
            <a href="/about">
              <h5 style={fourthFont.style} className="text-white text-xl mb-0">
                {t("about")}
              </h5>
            </a>
            <a href="/profile">
              <h5 style={fourthFont.style} className="text-white text-xl mb-0">
                Profile
              </h5>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          <Menu
            align={"end"}
            direction="bottom"
            arrow={true}
            menuButton={
              <MenuButton>
                <div className="h-8 aspect-square rounded-full border-yellow-400 border p-[1px] mr-3">
                  <Image
                    src={selectedLanguage.image}
                    alt={selectedLanguage.name}
                    className="w-full h-full  aspect-square"
                  />
                </div>
              </MenuButton>
            }
            transition
          >
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "en");
                handleLanguageChange("en", EnglishFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={EnglishFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  EN
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "fr");
                handleLanguageChange("fr", FrenchFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={FrenchFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  FR
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "es");
                handleLanguageChange("es", SpanishFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={SpanishFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  ES
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "it");
                handleLanguageChange("it", ItalianFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={ItalianFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  IT
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "ru");
                handleLanguageChange("ru", RussanFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={RussanFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  RU
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "ar");
                handleLanguageChange("ar", ArbaianFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={ArbaianFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  AR
                </h5>
              </div>
            </MenuItem>
          </Menu>
          <div className="flex flex-row items-center justify-center bg-[#ffe500] py-3 px-3 rounded-2xl">
            <LiaWalletSolid color="#000000" size={30} />
            <ConnectWallet
              className=" bg-none p-0"
              style={{
                fontFamily: "__thirdFont_3ea4f2, __thirdFont_Fallback_3ea4f2",
                background: "none",
                padding: "0px",
              }}
            />
          </div>
        </div>

        {/*
        <div className={styles.mingcutewallet4FillGroup}>
          
        </div>
        */}
      </section>
      <section className="hidden lg:hidden md:flex flex-row items-center justify-between absolute top-0 w-screen h-fit py-4 px-[3%] z-50">
        <div className="flex flex-row items-center justify-start gap-3">
          <a href="/">
            <img src={logo.src} className="h-16 aspect-square" alt="" />
          </a>
          <div className="flex flex-row gap-2 items-center justify-evenly">
            <a href="/">
              <h5 style={fourthFont.style} className="text-white text-base mb-0">
                {t("home")}
              </h5>
            </a>
            <a href="/trade">
              <h5 style={fourthFont.style} className="text-white text-base mb-0">
                Trade
              </h5>
            </a>
            <a href="/stake">
              <h5 style={fourthFont.style} className="text-white text-base mb-0">
                Stake
              </h5>
            </a>
            <a href="/about">
              <h5 style={fourthFont.style} className="text-white text-base mb-0">
                {t("about")}
              </h5>
            </a>
            <a href="/profile">
              <h5 style={fourthFont.style} className="text-white text-base mb-0">
                Profile
              </h5>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          <Menu
            align={"end"}
            direction="bottom"
            arrow={true}
            menuButton={
              <MenuButton>
                <div className="h-8 aspect-square rounded-full overflow-hidden border-yellow-400 border p-[1px] mr-3">
                  <Image
                    src={selectedLanguage.image}
                    alt={selectedLanguage.name}
                    className="w-full h-full rounded-full aspect-square"
                  />
                </div>
              </MenuButton>
            }
            transition
          >
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "en");
                handleLanguageChange("en", EnglishFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={EnglishFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  EN
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "fr");
                handleLanguageChange("fr", FrenchFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={FrenchFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  FR
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "es");
                handleLanguageChange("es", SpanishFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={SpanishFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  ES
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "it");
                handleLanguageChange("it", ItalianFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={ItalianFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  IT
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "ru");
                handleLanguageChange("ru", RussanFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={RussanFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  RU
                </h5>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.setItem("lang", "ar");
                handleLanguageChange("ar", ArbaianFlag);
              }}
            >
              <div className="w-full h-fit flex flex-row items-center justify-start">
                <Image
                  src={ArbaianFlag}
                  alt="English"
                  className="h-6 w-6 mr-3 aspect-square"
                />
                <h5
                  className={` text-xl text-white my-0`}
                  style={secondFont.style}
                >
                  AR
                </h5>
              </div>
            </MenuItem>
          </Menu>
          <div className="flex flex-row items-center justify-center bg-[#ffe500] py-2 px-3 rounded-2xl">
            <LiaWalletSolid color="#000000" size={30} />
            <ConnectWallet
              className=" bg-none p-0"
              style={{
                fontFamily: "__thirdFont_3ea4f2, __thirdFont_Fallback_3ea4f2",
                background: "none",
                padding: "0px",
                fontSize: "14px"
              }}
            />
          </div>
        </div>

        {/*
        <div className={styles.mingcutewallet4FillGroup}>
          
        </div>
        */}
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
    </>
  );
}

export default GenericMobileNavbar;
