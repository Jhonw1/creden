import React from 'react'
import './SliderFooter2.css'
import Slider4 from "../../assets/BLUE8-CASINOI.png"
import Slider5 from "../../assets/SUPERGIROS.png"

export const SliderFooter2 = () => {
    
      return (
        <>
 <div id="slider">
      <figure>
        <img className='img-slider-Footer' src={Slider4} alt="" />
        <img className='img-slider-Footer' src={Slider5} alt="" />
        {/* <img className='img-slider-Footer' src={Slider2} alt="" /> */}
      </figure>
    </div>
        </>
      );
    };
