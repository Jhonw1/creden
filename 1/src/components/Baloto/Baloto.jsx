import React from "react";
import "./Baloto.css";
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

export const Baloto = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      {/* <BotonFIndex /> */}

      <div className="cuadro-chance">
          <img src={bannerSocial} className="imagenChanceChance" />
      </div>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloChances">CHANCE TRADICIONAL</h2> 
                  </div>

                  <div className="textoRightChance">
                      <a className="subtitulosChance">¿Qué es?</a>
                      <p>Es el juego de suerte y azar más antiguo en el paíws, en Colombia su comercialización se hace únicamente a través de las empresasautorizadas por el estado en c/u de los departamentos.</p>
                      <br />
                      <a className="subtitulosChance">Mecánica</a>
                      <p>Consiste en acertar el resultado de una lotería o sorteo, el acierto puede ser de una, dos, tres o cuatro cifras. El chance, además de ser fácil de jugar y de ganar, es altamente confiable y transparente por su dinámica sistematizada en el que todos los números cuentan con las mismas probabilidades.</p>
                      <br />
                      <a className="subtitulosChance">Plan de premios</a>
                      <p>4 CIFRAS<br/>Directo paga $ 4.500 x peso apostado<br/>Combinado paga $ 208 x peso apostado</p><br/>
                      <p>3 CIFRAS<br/>Directo paga $ 400 x peso apostado<br/>Combinado paga $ 83 x peso apostado</p><br/>
                      <p>2 CIFRAS<br/>Directo paga $ 5 x peso apostado</p><br/>
                      <p>1 CIFRA<br/>Directo paga $ 5 x peso apostado</p>
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

      <hr class="linea-horizontal"/>

      <div className="cuadrosColor">
          <div className="cuadro-contenedor">

                <div className="cuadroApuestaChance">
                  <img className="imgServices" src={obras}/>
                  <a href="https://ventas.facilisimo.co/facilisimo" target="_blank">
                    <div className="cuadroBannerChance">
                        <img src={banner} className="imagenApuestaAquiChance" />
                    </div>
                  </a>
                </div>

                <div className="CUADRO-TEXTO-IZQUIERDA">
                      {/* <div className="CUADRO-TITULO">
                        <h2 className="tituloChances"></h2> 
                      </div> */}

                      <div className="textoLeftChance">
                        <a className="subtitulosChance">MEGA CHANCE</a>
                        <p>Es una opción de apuesta que le permite al cliente pagar el valor del IVA a parte y aplica para las 6 modalidades de apuestas del chance tradicional.</p>
                        <br />
                      </div>
                      <hr/>
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">SÚPER CHANCE</a>
                        <p>Es una modalidad de apuesta que tiene premio y valor estipulado el cliente puede apostar a las tres cifras con todas las loterías del día, se puede realizar hasta dos (2) veces por cada valor.</p>
                        <p> ¿Cuál es la diferencia entre el chance tradicional y el súper chance de tres cifras?</p>
                        <p>La diferencia es que con la misma apuesta el cliente tiene la oportunidad de ganar más dinero.</p>
                        <br />
                      </div>
                      <hr/>
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">PAGA MÁS</a>
                        <p>Modalidad de apuestas que tiene valores y premios estipulados, juega tres (3) veces por semana, para el cliente jugar debe apostar a un (1) número de cuatro (4) cifras, solo hay un (1) ganador por sorteo. </p>
                        <br />
                      </div>
                      <hr/>
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">PAGA MÁS TRIPLE</a>
                        <p>Adicionalmente está el TRIPLE, que le da al cliente la oportunidad de asegurar la apuesta, al momento de comprar el PAGA MÁS el sistema antes de imprimir le da la opción al asesor de ofrecer al cliente asegurar la apuesta con $1.700 pesos de más.</p>
                        <br />
                      </div>
                      <hr/>
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">DOBLE PLAY ACUMULADO</a>
                        <p>Es una modalidad de chance de doble acierto en donde el apostador selecciona 5 números de 3 y/o de 4 cifras con 2 loterías Principales o sorteos diarios, que jueguen el mismo día con la expectativa de que 2 de los números elegidos coincidan con el resultado.</p>
                        <p>El acumulado millonario es un premio paramutual, por lo tanto se dividirá en partes iguales entre los que acertaron.</p>
                        <br />
                      </div>
                      <hr/>
                      <div className="textoLeftChance">
                        <a className="subtitulosChance">LA SUERTE CUYABRA</a>
                        <p>Es una modalidad de apuesta donde el cliente tiene dos oportunidades de ganar, tiene un único valor de $5.000 pesos y su premiación está estipulada así.</p>
                        <br />
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
