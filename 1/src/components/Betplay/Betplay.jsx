import React from "react";
import "./Betplay.css";
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

export const Betplay = () => {
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
                    <h2 className="tituloChances">BETPLAY</h2> 
                  </div>

                  <div className="textoRightChance">
                      <a className="subtitulosChance">BetPlay - Casino</a>
                      <p>En el casino en línea BetPlay, encuentras el mejor portafolio de juegos de azar de la categoría, donde la diversión y las posibilidades de ganar se entrelazan. </p>
                      <p>Con una amplia variedad de opciones, BetPlay te ofrece numerosos tipos de juegos, incluyendo Ruleta, Blackjack, Pagamonedas, video Bingo y mucho más. ¡Sumérgete en la emoción y la adrenalina de la experiencia de juego en línea con BetPlay!</p>
                      <br />
                      <a className="subtitulosChance">BetPlay - Poker</a>
                      <p>Debes estar seguro de conocer la mecánica de juego y el valor de las cartas. Luego, podrás jugar, apostar y ganar en el Poker de Betplay, convirtiéndote en un maestro dominando las diferentes modalidades que tenemos para ti. Además, podrás iniciar tu experiencia entrando a un Torneo desde $500. ¡Prepárate para la emoción y la estrategia del poker con BetPlay!</p>
                      <br />
                      <a className="subtitulosChance">BetPlay - Sports</a>
                      <p>Sigue tu deporte favorito y disfrútalo con pasión apoyando a tu equipo o jugador favorito en la casa de apuestas más grande de Colombia. Juega ahora y siente la emoción de contribuir en nuestras ofertas deportivas, con las mejores cuotas del mercado. ¡Sumérgete en la pasión del deporte con nosotros!</p>
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
