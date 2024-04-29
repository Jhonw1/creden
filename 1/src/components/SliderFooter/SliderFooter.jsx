import React from 'react'
import './SliderFooter.css'
import Slider1 from "../../assets/SOY-AGENCIA.png"
import Slider3 from "../../assets/BETPLAY.png"
import Slider6 from "../../assets/CASTILLO-REAL.png"

export const SliderFooter = () => {
    
      return (
        <>
 <div id="slider">
      <figure>
        <img className='img-slider-Footer' src={Slider1} alt="" />
        <img className='img-slider-Footer' src={Slider3} alt="" />
        <img className='img-slider-Footer' src={Slider6} alt="" />
      </figure>
    </div>
        </>
      );
    };
