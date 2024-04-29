import React from "react";
import "./Social.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import bannerSocial from '../../assets/FONDO-BANNER-FUNDACIÓN2.png';
import obrasUno from '../../assets/OBRASIMPUESTOUNO.jpeg';
import obrasDos from '../../assets/OBRASIMPUESTODOS.jpeg';
import obrasTres from '../../assets/OBRASIMPUESTOTRES.jpeg';
import obrasCuatro from '../../assets/OBRASIMPUESTOCUATRO.jpeg';
import tenderos from '../../assets/facilisimo_tenderos.png';
import cultura from '../../assets/facilisimo_cultura.png';
import deporte from '../../assets/facilsimo_deporte.png';
import educacion from '../../assets/facilisimo_educacion.png';
import emprender from '../../assets/facilisimo_emprendimiento.png';
import evento from '../../assets/facilisimo_eventos.png';

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const Social = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      {/* <BotonFIndex /> */}

      <div className="cuadro-social">
        <div className="containerSocial">
          <p className="textSocialFunda">
            En nuestra fundación, cada Arruga cuenta una Historia, cada Sonrisa es un Tesoro y cada Día es un Regalo.
          </p>
          <div className="buttonSocial">
            <button className="botonSocialFundacion">Conócenos</button>
          </div>
        </div>
          <img src={bannerSocial} className="imagenNuestroService" />
      </div>

      <div className="contenedor-iconos">
        <h2 className="tituloIconos">Nuestro apoyo al departamento del Quindío</h2>
        <div className="iconos-subtitulos">
          <div className="cajonesLogos">
            <div className="icono-subtitulo">
              <img src={tenderos} className="imgApoyo2"/>
              {/* <p className="textoIconos">COLOCADORES</p>
              <p className="textoIconos">LOTEROS - TENDEROS</p> */}
            </div>
            <div className="icono-subtitulo">
              <img src={cultura} className="imgApoyo"/>
              {/* <p className="textoIconos">CULTURA</p> */}
            </div>
            <div className="icono-subtitulo">
              <img src={deporte} className="imgApoyo"/>
              {/* <p className="textoIconos">APOYO AL DEPORTE</p> */}
            </div>
          </div>
          <div className="cajonesLogosDos">
            <div className="icono-subtitulo">
              <img src={educacion} className="imgApoyo"/>
              {/* <p className="textoIconos">EDUCACIÓN</p> */}
            </div>
            <div className="icono-subtitulo">
              <img src={emprender} className="imgApoyo1"/>
              {/* <p className="textoIconos">EMPRENDIMIENTOS</p> */}
            </div>
            <div className="icono-subtitulo">
              <img src={evento} className="imgApoyo3"/>
              {/* <p className="textoIconos">FERIAS Y EVENTOS</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="cuadrosColor">
          <div className="cuadroContainerSocial">
                <img className="imgSocialObra" src={obrasUno}/>

                <div className="cuadroTextLeft">
                      <div className="CUADRO-TITULO">
                        <h2 className="tituloSocial">OBRAS POR IMPUESTO</h2> 
                      </div>

                      <div className="textoLeft">
                        <p>En Facilísimo, creemos firmemente en la responsabilidad social y el impacto positivo que podemos generar en las comunidades más necesitadas. Por ello, participamos activamente en el mecanismo de obras por impuestos, una herramienta poderosa para cerrar las brechas socioeconómicas en los municipios más afectados por la pobreza y la violencia.</p> 
                      </div>
                </div>
          </div>
      </div>


      <div className="cuadrosColor">
          <div className="cuadroContainerSocial">
            <div className="cuadroTextoDerecha">
                <div className="cuadroTextRight">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloSocial"></h2> 
                  </div>

  
                  <div className="textoRight">
                      <p>En el 2019, llevamos a cabo un importante proyecto en el municipio de Santa Isabel, Tolima, donde dotamos a 27 escuelas, beneficiando a más de 1.406 estudiantes. Posteriormente, extendimos nuestro impacto a Venadillo, Tolima, proporcionando mobiliario escolar a todas las instituciones educativas de este municipio.</p> 
                  </div>

                </div>

                <img className="imgSocialObra" src={obrasDos}/>
            </div>
          </div>
      </div>

      <div className="cuadrosColor">
          <div className="cuadroContainerSocial">
                <img className="imgSocialObra" src={obrasTres}/>

                <div className="cuadroTextLeft">

                      <div className="textoLeft">
                        <p>En el 2023, nos enorgullece haber entregado un nuevo proyecto en El Tambo, Cauca, donde construimos y equipamos dos aulas de clase completas, incluyendo mobiliario y baterías sanitarias. Este proyecto ha beneficiado a más de 50 niños en situación de vulnerabilidad. Nos complace informar que el costo total de esta iniciativa ascendió a $683.399.006.</p> 
                      </div>
                </div>
          </div>
      </div>

      <div className="cuadrosColor">
          <div className="cuadroContainerSocial">
            <div className="cuadroTextoDerecha">
                <div className="cuadroTextRight">

                  <div className="CUADRO-TITULO">
                    <h2 className="tituloSocial"></h2> 
                  </div>

  
                  <div className="textoRight">
                      <p>Nos comprometemos a seguir trabajando en proyectos que promuevan el desarrollo económico y social de nuestras comunidades, contribuyendo así a un futuro más próspero y equitativo para todos.</p> 
                  </div>

                </div>

                <img className="imgSocialObra" src={obrasCuatro}/>
            </div>
          </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
