import React from "react";
import "./Productos.css";
import { Link } from 'react-router-dom';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import bannerProductos from '../../assets/PRODUCTOS-DE-APUESTAS.png';
import chance from '../../assets/LOGO-CHANCE.png';
import betplay from '../../assets/LOGO-BETPLAY.png';
import baloto from '../../assets/BALOTO.png';
import miloto from '../../assets/MILOTO.png';
import superAstro from '../../assets/SUPERASTRO.png';
import chanceMillonario from '../../assets/CHANCE-MILLONARIO.png';
import blueCasino from '../../assets/BLUE-8.png';
import raspaListo from '../../assets/raspa-y-listo.png';
import banner from '../../assets/BOTON-APUESTA-AQUÍ-MINIMO.png';

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const Productos = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />
      
      <div className="cuadro-servicios">
          <img src={bannerProductos} className="imagenNuestroService" />
      </div>


      <div className="cuadro-chance-color">
          <div className="cuadro-contenedor">
            <img className="imgServices" src={chance}/>

            <div className="CUADRO-TEXTO-IZQUIERDA">
                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices">CHANCE</h2> 
                  </div>

                  <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                    <p>Es el juego de suerte y azar más antiguo en el país, en Colombia su comercialización se hace únicamente a través de las empresas autorizadas por el estado en c/u de los departamentos.</p> 
                    <div className="posicionBoton">
                      <Link to="/chance">
                        <button className="boton-derecha">SABER MÁS</button>
                      </Link>
                    </div>
                  </div>
            </div>
          </div>
      </div>


      <div className="cuadro-betplay-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices">BETPLAY</h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>Sumérgete en el mundo de BETPLAY, donde la emoción y la diversión se combinan para ofrecerte momentos inolvidables de manera online, BETPLAY te espera con los brazos abiertos. ¡Haz de cada apuesta una experienciaúnica con BETPLAY!</p> 
                      <div className="posicionBoton">
                        <Link to="/betplay">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={betplay}/>
            </div>
          </div>
      </div>


      <div className="cuadro-baloto-color">
          <div className="cuadro-contenedor">
            <img className="imgServices" src={baloto}/>

              <div className="CUADRO-TEXTO-IZQUIERDA">
                    <div className="CUADRO-TITULO">
                      <h2 className="tituloServices">BALOTO</h2> 
                    </div>

                    <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                      <p>¡Explora la fascinante experiencia de Baloto, un innovador juego de lotería en línea lleno de emoción y oportunidades! Aquí te detallamos cómo participar en esta emocionante aventura.</p> 
                      <div className="posicionBoton">
                        <Link target="_blank" to="https://baloto.com/">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                    </div>
              </div>
          </div>
      </div>


      <div className="cuadro-miloto-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices">MILOTO</h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>Accede con $4.000: Por una inversión mínima, sumérgete en la aventura de Miloto. Tu sueño puede estar a solo un paso y solo cuesta $4.000.</p> 
                      <div className="posicionBoton">
                        <Link target="_blank" to="https://baloto.com/miloto">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={miloto}/>
            </div>
          </div>
      </div>

      <div className="cuadro-superAstro-color">
          <div className="cuadro-contenedor">
            <img className="imgServices" src={superAstro}/>

              <div className="CUADRO-TEXTO-IZQUIERDA">
                    <div className="CUADRO-TITULO">
                      <h2 className="tituloServices">SUPER ASTRO</h2> 
                    </div>

                    <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                      <p>Selecciona tu Número y Signo Zodiacal: Sumérgete en la magia al esconder cuatro cifras y uno o varios signos zodiacales. Cada elección es especial y única, ¡deja que tus corazones guíen tus apuestas!</p> 
                      <div className="posicionBoton">
                        <Link to="/superAstro">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                    </div>
              </div>
          </div>
      </div>

      <div className="cuadro-chanceMillonario-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices">CHANCE MILLONARIO</h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>Es una modalidad de chance de doble acierto en donde el apostador selecciona 5 números de cuatro cifras y dos loterias tradicionales o sorteos autorizados que jueguen el mismo día con la expectativa de que 2 de los números elegidos coincidan con el resultado.</p> 
                      <div className="posicionBoton">
                        <Link to="/chanceMillonario">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={chanceMillonario}/>
            </div>
          </div>
      </div>

      <div className="cuadro-blueCasino-color">
          <div className="cuadro-contenedor">
            <img className="imgServices" src={blueCasino}/>

              <div className="CUADRO-TEXTO-IZQUIERDA">
                    <div className="CUADRO-TITULO">
                      <h2 className="tituloServices">BLUE 8 CASINO</h2> 
                    </div>

                    <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                      <p>Casino Blue 8, ofrecemos en una experiencia única llena de modernas máquinas, poderosos progresivos y un excelente servicio y atención personalizada. Donde la dirversión será el complemento perfecto para una jornada llena de emoción.</p> 
                      <div className="posicionBoton">
                        <Link to="/blueCasino">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                    </div>
              </div>
          </div>
      </div>

      <div className="cuadro-raspaListo-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices">RASPA & LISTO</h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>Es una modalidad de chance de doble acierto en donde el apostador selecciona 5 números de cuatro cifras y dos loterías tradicionales o sorteos autorizados que jueguen el mismo día con la expectativa de que 2 de los números elegidos coincidan con el resultado.</p> 
                      <div className="posicionBoton">
                        <Link to="/raspaListo">
                          <button className="boton-derecha">SABER MÁS</button>
                        </Link>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={raspaListo}/>
            </div>
          </div>
      </div>


      <div className="cuadro-recibo">
        <a href="https://ventas.facilisimo.co/facilisimo" target="_blank">
          <div className="cuadro-banner-servicios">
              <img src={banner} className="imagenNuestroProduct" />
          </div>
        </a>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
