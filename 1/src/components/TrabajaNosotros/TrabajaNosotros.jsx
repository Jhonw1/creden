import React from "react";
import "./TrabajaNosotros.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const TrabajaNosotros = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />
      <div className="espacioForm">
      <div className="containerFormTrabaja">
        <div className="cards-container">
          <div className="card">
            <h3>AUXILIAR PLAN TIENDA</h3>
            <hr/>
            <p>El auxiliar plan tienda será responsable de realizar visitas periódicas a las tiendas existentes y nuevas, siguiendo la ruta establecida. Además, deberá tener un conocimiento detallado y control del reporte de ventas, revisándolo diariamente para evaluar el desempeño y tomar decisiones estratégicas. Se requiere haber completado la educación secundaria (bachillerato). Se valorará experiencia o formación en servicio al cliente. Deben contar con medio de transporte propio(moto).</p>
          </div>
          <div className="card">
            <h3>ASESOR DE VENTAS</h3>
            <hr/>
            <p>El Asesor de Ventas será responsable de ofrecer y asesorar a los clientes sobre las diferentes modalidades de apuestas y demás productos y servicios de la Red de Servicios del Quindío S.A., tanto en el punto de venta como en labor móvil/rural. Deberá operar con agilidad el sistema transaccional para generar las apuestas o productos a vender, garantizando la correcta finalización de la venta. Además, será fundamental promover el buen desarrollo del proceso comercial mediante la venta cruzada. Se requiere haber completado la educación secundaria (bachillerato). Se valorará experiencia o formación en servicio al cliente.</p>
          </div>
          <div className="card">
            <h3>ASESOR DE BETPLAY</h3>
            <hr/>
            <p>El candidato será responsable de ofrecer asesoramiento a los clientes sobre las diversas modalidades de apuestas y otros productos tanto en puntos de venta como en labor móvil/rural. Además, deberá realizar la instalación de la publicidad de BetPlay y garantizar su correcta exhibición en los puntos designados. Se espera que cumpla rigurosamente con el cronograma de rutas asignadas por el coordinador Bet-Play, asegurando así una presencia constante y efectiva en las áreas asignadas. Se requiere haber completado la educación secundaria (bachillerato). Se valorará experiencia o formación en servicio al cliente. Deben contar con medio de transporte propio(moto).</p>
          </div>
        </div>
        <div className="lineaSeparadora"></div>
          <div className="form-container">
            <div className="formform">
              <h2 className="titleTrabaja">TRABAJA CON NOSOTROS</h2>
              <p className="subtitulito">Se parte de nuestra familia Facilísimo y ayúdanos a hacer más fácil la vida a los quindianos.</p>
              <form className="formularioVacante">
                <div className="form-group">
                  <input type="text" id="casilla" name="nombre" placeholder="Nombre completo:" required />
                </div>
                <div className="form-group">
                  <input type="email" id="casilla" name="correo" placeholder="Correo electrónico:" required />
                </div>
                <div className="form-group">
                  <input type="text" id="casilla" name="vacante" placeholder="Vacante a la que desea aplicar:" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="casilla" name="celular" placeholder="Número de celular:" required />
                </div>
                <button className="buttonHV" type="submit">Enviar hoja de vida</button>
              </form>
              <p className="textoCorreo">Al correo inscrito llegará un mensaje respondiendo su solicitud. Debes adjuntar tu hoja de vida y acompañarla de los datos personales solicitados.</p>
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
