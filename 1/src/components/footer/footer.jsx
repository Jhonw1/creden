import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import imgL from "../../assets/imgL.png";
import { SliderFooter } from '../SliderFooter/SliderFooter';
import { SliderFooter2 } from '../SliderFooter2/SliderFooter2';
import archiTratamiento from "../../assets/ARCHIVOS/AC-PT-04-Politica-Tratamiento-de-Datos-Personales.pdf";

export const Footer = () => {  
  return (
    <>
  <footer className="footer-container">
      <div className="footer-section">
        <h2>Nosotros</h2>
        <p><Link className="footerOptions" to="/quienesSomos">Quiénes somos</Link></p>
        <p><Link className="footerOptions" to="/politicas">Sistema de gestión de calidad</Link></p>
        <p><Link className="footerOptions" to="/campañas">Terminos y condiciones</Link></p>
        <p><a target="_blank" href={archiTratamiento}>Políticas de tratamientos de datos</a></p>
        <p><a target="_blank" href="https://www.coljuegos.gov.co/publicaciones/306325/juega-bien---ser-responsable-es-parte-del-juego/">Juega responsable</a></p>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-section">
        <h2>Puntos de Venta</h2>
        <p><a target="_blank" href="https://www.google.com/maps/d/u/0/viewer?mid=16ZtQ15jzldiiGW-sWv96qTdLIKYRTEQv&ll=4.539803521555799%2C-75.66327680437594&z=13">Puntos de venta FACILÍSIMO</a></p>
        <p><a>Preguntas frecuentes</a></p>
        <p><Link className="footerOptions" to="/portafolio">Portafolio</Link></p>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-section">
        <h2>Contáctanos</h2>
        <p>Carrera 14 N°. 23-07 Armenia, Quindío</p>
        <p>Línea de servicio al cliente</p>
        <p><a target="_blank" href="https://wa.me/573113843703">311-384-3703</a></p>
        <p>Correo electrónico</p>
        <p><a target="_blank" href="mailto:servicioalcliente@facilisimo.co">servicioalcliente@facilisimo.co</a></p>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-section-slider">
        
        <SliderFooter/>
        <SliderFooter2/>
      </div>
    </footer>
    <div className="footer-copyright">
      <div>Copyright ©2023 Red de Servicios del Quindio S.A. Todos los derechos reservados</div>           
      <div> < img className="img-logos" src={imgL} alt="" /></div>
    </div>

  </>
  )
}
