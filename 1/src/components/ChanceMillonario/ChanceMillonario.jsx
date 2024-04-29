import React from "react";
import "./ChanceMillonario.css";
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

export const ChanceMillonario = () => {
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
                    <h2 className="tituloChances">CHANCE MILLONARIO</h2> 
                  </div>

                  <div className="textoRightChance">
                      <p>Embárcate en una emocionante aventura con CHANCE MILLONARIO, una modalidad de chance que te lleva más allá de las expectativas. En este juego de doble acierto, eliges con cuidado 5 números de cuatro cifras y dos loterías o sorteos autorizados para el mismo día. Cada selección es un acto de fe y esperanza, mientras te sumerges en la ilusión de que dos de tus números elegidos coincidan con el resultado. ¡Deja que la emoción te guíe mientras eliges tus números y loterías, y juega con pasión de lunes a domingo y festivos!</p>
                      <br/>
                      <p>Selecciona 5 números de 4 cifras y 2 loterias o sorteos de lunes a domingos y festivos </p>
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
