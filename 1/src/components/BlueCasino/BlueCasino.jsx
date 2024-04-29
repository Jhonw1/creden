import React from "react";
import "./BlueCasino.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import bannerCasino from '../../assets/blueBanner.jpg';
import casino from '../../assets/salaCasino.jpg';
import banner from '../../assets/BOTON-APUESTA-AQUÍ-MINIMO.png';

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const BlueCasino = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      {/* <BotonFIndex /> */}

      <div className="cuadro-chance">
          <img src={bannerCasino} className="imagenChanceChance" />
      </div>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloChances">BLUE 8 CASINO</h2> 
                  </div>

                  <div className="textoRightChance">
                      <a className="subtitulosChance">¿Qué es?</a>
                      <p>El casino Blue 8 es un establecimiento de comercio con modalidad de juegos de suerte y azar localizados, los cuales se operan con equipos o elementos de juegos autorizados por Coljuegos. Donde se apuesta cierta cantidad de dinero para ganar un premio en efectivo. Los cuales dependen exclusivamente del azar.</p>
                      <br />
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={casino}/>
                </div>
            </div>
          </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
