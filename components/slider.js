import React from 'react';
import Image from 'next/image';
import Slone from '../public/images/sl-1.png';
import Sltwo from '../public/images/sl-2.png';
import Slthree from '../public/images/sl-3.png';
import Slfourth from '../public/images/first.png';
import Slfive from '../public/images/second.png';




const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image width={450} height={100}  src={Slone} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Sltwo} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Slthree} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Slfourth} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Slfive} alt="" />
        </div>

        <div className="slide">
          <Image width={450} height={100}  src={Slone} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Sltwo} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Slthree} alt="" />
        </div>
        <div className="slide">
          <Image width={450} height={100} src={Slfourth} alt="" />
        </div>
       
       
     
        {/* Add more slide items here */}
      </div>
    </div>
  );
}

export default Slider;