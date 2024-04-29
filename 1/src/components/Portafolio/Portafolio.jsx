import React from "react";
import "./Portafolio.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import portafolioImage from "../../assets/PORTAFOLIO.png";

export const Portafolio = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />

      <div className="portafolio-container">
        <div className="texto-container">
          <p className="texto-portafolio">
            Conoce nuestro amplio portafolio de productos y servicios con la mayor red transaccional del Quindío.
          </p>
          <div className="claseButton">
            <button className="boton-portafolio"><a className="botonUrlPorta" href="https://drive.google.com/file/d/1ySOUelbVFT3u6bMBavZtzhDacDsPlYWQ/view?usp=sharing" target="_blank">Clic aquí</a></button>
          </div>
        </div>
        <img src={portafolioImage} alt="Portafolio" className="img-portafolio" />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
