import React from "react";
import "./RaspaListo.css";
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

export const RaspaListo = () => {
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
                    <h2 className="tituloChances">RASPA & LISTO</h2> 
                  </div>

                  <div className="textoRightChance">
                      <a className="subtitulosChance">Gato Suertudo</a>
                      <p>Este boleto tiene varias formas de ganar. Si al raspar la zona de juego, se encuentra repetido 3 veces el mismo Premio, en un mismo juego, el jugador se gana ese premio, si al raspar el BONO se encuentra un monto de premio, el jugador gana ese premio al instante. </p>
                      <br />
                      <a className="subtitulosChance">VALOR: $3.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">Dinero en Grande 3000</a>
                        <p>Este boleto tiene varias formas de ganar. Si al raspar la zona de juego, se encuentra repetido 3 veces el mismo Premio, en un mismo juego, el jugador se gana ese premio, si al raspar el BONO se encuentra un monto de premio, el jugador gana ese premio al instante.</p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $3.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">TRIKI BONO</a>
                      <p>Este boleto tiene varias formas de ganar. Si al raspar la zona de juego encuentras 3 figuras iguales en línea horizontal, vertical o diagonal, ganas el premio asociado a ese Juego, si al raspar el BONO se encuentra un monto de premio, el jugador gana ese premio al instante. </p>
                      <br />
                      <a className="subtitulosChance">VALOR: $3.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">DINERO LOCO</a>
                        <p>Este boleto tiene varias formas de ganar. Si al raspar la zona de juego, se encuentra repetido 3 veces el mismo Premio, en un mismo juego, el jugador se gana ese premio, si al raspar el BONO se encuentra un monto de premio, el jugador gana ese premio al instante.</p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $3.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">BANCO DE LA SUERTE</a>
                      <p>Si al raspar la zona de juego uno de TUS NUMEROS es igual a alguno de los NÚMEROS GANADORES, el jugador gana el premio de ese Número.</p>
                      <br />
                      <a className="subtitulosChance">VALOR: $2.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">VERDE DE LA SUERTE</a>
                        <p>Si al raspar la zona de juego, se encuentra repetido 3 veces el mismo Premio, el jugador se gana ese Premio.</p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $2.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">TRIPLE SUERTE</a>
                      <p>Si al raspar la zona de juego, se encuentra repetido 3 veces el mismo Premio, el jugador se gana ese Premio.</p>
                      <br />
                      <a className="subtitulosChance">VALOR: $2.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">RULETA DE LA FORTUNA</a>
                        <p>Si al raspar la zona de juego uno de LOS NUMEROS DE LA RULETA es igual al NÚMERO GANADOR, el jugador gana el premio de ese Número, si al raspar la zona de BONO se encuentra un monto de premio, el jugador gana ese premio al instante.</p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $2.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">GANA FÁCIL</a>
                      <p>Juego 1: Si encuentras 3 figuras iguales, ganas el premio indicado<br />Juego 2: Si el mismo premio se repite 3 veces, ganas ese premio.</p>
                      <br />
                      <a className="subtitulosChance">VALOR: $2.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">3 de 3</a>
                        <p>Raspa cada uno de los juegos (1 y 2), si encuentras tres “x” o tres “o” en una línea (horizontal, diagonal o vertical), ganas el premio de ese juego, si al raspar el BONO se encuentra un monto de premio, el jugador gana ese premio al instante. </p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $3.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">PIEDRA, PAPEL O TIJERA</a>
                      <p>Raspa el juego, si encuentras 3 figuras iguales ganas el premio indicado.</p>
                      <br />
                      <a className="subtitulosChance">VALOR: $2.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">TIRA LOS DADOS</a>
                        <p>Raspa el juego, si encuentras 3 dados iguales ganas el premio indicado. </p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $2.000</a>
                      </div>
                </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">
                  <div className="textoRightChance">
                      <a className="subtitulosChance">BUSCANDO EL TESORO</a>
                      <p>Raspa el juego, si encuentras 3 figuras iguales ganas el premio indicado.</p>
                      <br />
                      <a className="subtitulosChance">VALOR: $2.000</a>
                  </div>
                </div>
                <div className="cuadroApuestaChance">
                  <img className="imgChances" src={obras}/>
                </div>
            </div>
          </div>
      </div>

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                </div>
                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">3 EN 1</a>
                        <p>Si encuentras el mismo premio repetido 3 veces, ganas ese premio. </p>
                        <br/>
                        <a className="subtitulosChance">VALOR: $2.000</a>
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
