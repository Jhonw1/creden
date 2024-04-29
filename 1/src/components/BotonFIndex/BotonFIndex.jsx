import React, { useEffect } from 'react'
import './BotonFIndex.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const BotonFIndex = ({showPopup}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

    return (
        <>
        <div className={`floating-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
      <div className="hamburger-button" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
        {/* Your larger main item */}
        <div className="hamburger-main-item">
          {/* Your main item content goes here */}
        </div>
        {/* Your hamburger icon or image goes here */}
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
      <div className="sub-components">
        {/* Your subcomponents go here */}
        <div className="sub-component"><a target='_blank' href="https://wa.me/573113843703">Atención al cliente</a></div>
        <div className="sub-component"><Link to="/trabajaNosotros">Oferta laboral</Link></div>
        <div className="sub-component"><a href="/preguntas-frecuentes">Preguntas frecuentes</a></div>
        <div className="sub-component"><a target='_blank' href="https://www.google.com/maps/d/u/0/viewer?mid=16ZtQ15jzldiiGW-sWv96qTdLIKYRTEQv&ll=4.539803521555799%2C-75.66327680437594&z=13">Puntos cercanos</a></div>
      </div>
    </div>
        </>
      );
    };
