import React, { useEffect, useState } from 'react';
import { Ventana } from '../Ventana/Ventana';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { BotonRedes } from '../botonRedes/botonRedes';
import './index.css';
import { Sliderindex } from '../SliderIndex/SliderIndex';
import { Balotas } from '../Balotas/Balotas';
import { Puntos } from '../Puntos/Puntos';
import { BotonFIndex } from '../BotonFIndex/BotonFIndex';
import { ResultadosIndex } from '../ResultadosIndex/ResultadosIndex';

export const Index = () => {
  const [showPopup, setShowPopup] = useState();


  useEffect(() => {
    setShowPopup(true);

  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);

  };

  return (
    <>
      {showPopup && <Ventana onClose={handleClosePopup} />}
      <div className="header">
        <header>
          <Header />
        </header>
      </div>

      <Sliderindex />
      <ResultadosIndex />
      <Balotas />
      <Puntos />

      <div className="footer">
        <footer>
          <Footer />
        </footer>
      </div> 
      <BotonRedes />
      <BotonFIndex/>
    </>
  );
};