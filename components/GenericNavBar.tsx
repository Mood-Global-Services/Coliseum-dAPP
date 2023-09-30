import localFont from 'next/font/local';
import logo from '../public/logs.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useCallback, useState, useEffect } from 'react';

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

function GenericNavbar(){
    
    return(
        <section className="absolute top-0 left-0 h-fit w-screen bg-red-300 flex flex-row items-center justify-start">
            <img src={logo.src} className='h-16 aspect-square' alt="" />
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-between'>
                <HiOutlineMenuAlt3 color='#ffffff' size={35} />
                </div>
            </div>
        </section>
    )
}

export default GenericNavbar;