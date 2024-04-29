import React from "react";
import "./SuperAstro.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import bannerSocial from '../../assets/productosChance.png';
import obras from '../../assets/obrasImpuesto.png';
import banner from '../../assets/BOTON-APUESTA-AQUÍ-MINIMO.png';

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const SuperAstro = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      {/* <BotonFIndex /> */}

      <div className="cuadro-chance">
          <img src="" className="imagenChanceChance" />
      </div>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloChances">SUPER ASTRO</h2> 
                  </div>

                  <div className="textoRightChance">
                      <p>Sumérgete en la emoción de un juego de suerte y azar catalogado como novedoso, donde las apuestas van desde $500 hasta $10.000. Cada jugada es un acto de fe y esperanza, donde eliges un número de cuatro cifras y tus signos zodiacales favoritos. Es un momento de conexión con el destino, donde anhelas que tus elecciones coincidan en el orden exacto, llevándote hacia la victoria. ¡Es un desafío emocionante que te invita a soñar en grande y creer en la magia del universo!</p>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                  <a href="https://ventas.facilisimo.co/facilisimo" target="_blank">
                    <div className="cuadroBannerChance">
                        <img src={banner} className="imagenApuestaAquiChance" />
                    </div>
                  </a>
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
