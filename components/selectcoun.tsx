import React, { useState } from 'react';
import EnglishFlag from '../public/Flag (1).png'; // Import the English flag image
import SpanishFlag from '../public/Flag.png'; // Import the Spanish flag image
import FrenchFlag from '../public/Flag (3).png'; // Import the French flag image
import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local';
import { useTranslation } from 'react-i18next';

import ItalianFlag from '../public/italian.png';
import RussanFlag from '../public/russain.png';
import ArbaianFlag from '../public/arabian.png';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<{
    name: string;
    image: StaticImageData;
  } >({
    name: 'EN', // Set English as the default language
    image: SpanishFlag,
  });

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string, flagImage: StaticImageData) => {
    setSelectedLanguage({ name: language, image: flagImage });
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown">
      <style jsx>{`
        .dropdown-item:hover {
          background-color: transparent; /* Reset the hover background color */
          color: white !important; /* Reset the hover text color */
        }
      `}</style>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedLanguage ? (
          <>
            <Image src={selectedLanguage.image} alt={selectedLanguage.name} />
            {selectedLanguage.name}
          </>
        ) : (
          'Select Language'
        )}
      </button>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <a 
            style={{
              color: 'white',
              fontFamily: '__fourthFont_9c16a8',
            }}
            className="dropdown-item"
            href="#"
            onClick={() => handleLanguageChange('en', SpanishFlag)}
          >
            <Image src={SpanishFlag} alt="English" />
            EN
          </a>
        </li>
        <li>
          <a
            style={{
              color: 'white',
              fontFamily: '__fourthFont_9c16a8',
            }}
            className="dropdown-item"
            href="#"
            onClick={() => handleLanguageChange('fr', FrenchFlag)}
          >
            <Image src={EnglishFlag} alt="French" />
            FR
          </a>
        </li>

        <li>
          <a
            style={{
              color: 'white',
              fontFamily: '__fourthFont_9c16a8',
            }}
            className="dropdown-item"
            href="#"
            onClick={() => handleLanguageChange('it', ItalianFlag)}
          >
            <Image src={ItalianFlag} alt="Spanish" />
            ITA
          </a>
        </li>
      
        <li>
          <a
            style={{
              color: 'white',
              fontFamily: '__fourthFont_9c16a8',
            }}
            className="dropdown-item"
            href="#"
            onClick={() => handleLanguageChange('ru', RussanFlag)}
          >
            <Image src={RussanFlag} alt="French" />
            RUS
          </a>
        </li>
        <li>
          <a
            style={{
              color: 'white',
              fontFamily: '__fourthFont_9c16a8',
            }}
            className="dropdown-item"
            href="#"
            onClick={() => handleLanguageChange('ar', ArbaianFlag)}
          >
            <Image src={ArbaianFlag} alt="French" />
            AR
          </a>
        </li>
        {/* Add more language options as needed */}
      </ul>
    </div>
  );
};

export default LanguageSelector;


