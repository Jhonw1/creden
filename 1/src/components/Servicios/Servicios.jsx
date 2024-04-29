import React from "react";
import "./Servicios.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import chance from '../../assets/supergirosServicios.png';
import recaudos from '../../assets/RECAUDOS.png';
import recargasPaquetes from '../../assets/recargasPaquetes.png';
import facicliente from '../../assets/FACICLIENTE.png';
import servicios from '../../assets/NUESTROS-SERVICIOS.png';
import banner from '../../assets/BANNER-PAGA-FACTURAS.png';

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const Servicios = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />
      
      <div className="cuadro-servicios">
          <img src={servicios} className="imagenNuestroService" />
      </div>


      <div className="cuadro-supergiros-color">
          <div className="cuadro-contenedor">
                <img className="imgServices" src={chance}/>

                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="CUADRO-TITULO">
                        <h2 className="tituloServices"> SUPERGIROS </h2> 
                      </div>

                      <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                        <p> Nuestro colaborador autorizado nos proporciona la capacidad de expandirnos y ofrecer servicios a nuevas áreas con la misma facilidad que caracteriza a Facilisimo. Gracias a esta asociación, ampliamos nuestro alcance y brindamos servicios de manera eficiente y accesible. </p> 
                        <div className="posicionBoton">
                          <button className="boton-derecha">SABER MÁS</button>
                        </div>
                      </div>
                </div>
          </div>
      </div>


      <div className="cuadro-recaudos-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices"> RECAUDOS </h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>En Facilísimo, nos emociona ser el motor detrás de la comodidad y eficacia en la gestión de servicios públicos en el Quindío. Somos mucho más que recaudadores; somos el puente que conecta a las familias con la tranquilidad de acceder fácilmente a servicios esenciales como la EPA, EDEQ, EFIGAZ EPQ y FLAMINGO.</p> 
                      <div className="posicionBoton">
                        <button className="boton-derecha">SABER MÁS</button>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={recaudos}/>
            </div>
          </div>
      </div>


      <div className="cuadro-recargas-color">
          <div className="cuadro-contenedor">
            <img className="imgServices" src={recargasPaquetes}/>

                <div className="CUADRO-TEXTO-IZQUIERDA">
                      <div className="CUADRO-TITULO">
                        <h2 className="tituloServices"> RECARGAS Y PAQUETES </h2> 
                      </div>

                      <div className="CONTENEDOR-TEXTO-IZQUIERDA">
                        <p>En Facilísimo, encontrarás la comodidad en recargas y compras de los mejores paquetes del mercado. Nuestra plataforma fácil de usar te ofrece acceso a los beneficios más destacados. </p> 
                        <div className="posicionBoton">
                          <button className="boton-derecha">SABER MÁS</button>
                        </div>
                      </div>
                </div>
          </div>
      </div>


      <div className="cuadro-facicliente-color">
          <div className="cuadro-contenedor">
            <div className="CUADRO-TEXTO-DERECHA">
                <div className="CUADRO-CONTENEDOR-TEXTO">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloServices"> FACICLIENTE </h2> 
                  </div>

  
                  <div className="CONTENEDOR-TEXTO-DERECHA">
                      <p>En Facilísimo, cada cliente es una historia única y especial. Nuestro programa FaciCliente está diseñado para conectarnos más profundamente contigo. Cada mes, te ofrecemos sorpresas personalizadas para que te sientas apreciado y emocionado. FaciCliente va más allá de la satisfacción del cliente; es una celebración mensual dedicada a ti. Descubre el lado más encantador de nuestra conexión contigo con FaciCliente.</p> 
                      <div className="posicionBoton">
                        <button className="boton-derecha">SABER MÁS</button>
                      </div>
                  </div>

                </div>

                <img className="imgServices" src={facicliente}/>
            </div>
          </div>
      </div>


      <div className="cuadro-recibo">
        <a href="https://ventas.facilisimo.co/facilisimo" target="_blank" rel="noreferrer">
          <div className="cuadro-banner-servicios">
              <img src={banner} className="imagenNuestroService" />
          </div>
        </a>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};