import React, { useState, useEffect } from "react";
import "./Campañas.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import { Puntos } from '../Puntos/Puntos';

import defaultImage1 from '../../assets/CAMPAÑA-RASPA.png';
import defaultImage2 from '../../assets/GIROS-DE-AMOR.png';
import defaultImage3 from '../../assets/CAMAPAÑA-BONO-GANADOR.png';
import defaultImage4 from '../../assets/CAMPAÑA-ÑAPA.png';

const CuadroCampaña = ({ imagen, texto, enlace }) => (
  <div className="cuadro-campana" onClick={() => window.open(enlace, '_blank')}>
    <img src={imagen} alt="Campaña" className="img-campana"/>
    <p className="texto-campana">{texto}</p>
  </div>
);

export const Campañas = () => {
  const [data, setData] = useState([]);

  // Rutas por defecto para las imágenes
  const defaultImages = [defaultImage2 ,defaultImage3, defaultImage4, defaultImage1];

  useEffect(() => {
    // Simulación de carga de datos, reemplácelo con la lógica de carga real
    const fetchData = async () => {
      // Simulación de datos
      const dummyData = [
        { texto: '(VIGENCIA: Del 29 de febrero hasta el 31 de marzo de 2024) - ¡Con "Giros de Amor", conecta corazones de todo el mundo al Quindío! Llama o escribe a Caracol, Olímpica o RCN, expresa tus sentimientos y haz que tus seres queridos en el Quindío reciban un giro lleno de amor. ¡Western Union y Facilísimo te unen a tus seres queridos, sin importar la distancia!', enlace: "https://drive.google.com/file/d/1Iwl-WVkBRlwwHVGLOoGZkVFi164xle81/view?usp=drive_link" },
        { texto: '(VIGENCIA: Del 16 de marzo hasta el 25 de mayo de 2024) - ¡Explora la emoción del "Bono Ganador" de Betplay con Facilisimo! Recarga $40,000 en cualquier punto y recibe un bono numerado. Este te da la oportunidad de participar en sorteos emocionantes con la Lotería del Quindío cada sábado. ¡Recarga, juega y descubre la emoción de ganar grandes premios con el "Bono Ganador" de Betplay y Facilísimo!', enlace: "https://drive.google.com/file/d/1gUtBGBUGhYz-FRcrOwwcM8NK2Yx2zWly/view?usp=sharing" },
        { texto: '(VIGENCIA: Del 01 de marzo de 2024 hasta el 21 de marzo de 2024) - ¡Sumérgete en la emoción de "La Ñapa"! Esta campaña va más allá de tus expectativas, llevando la emoción del chance a un nuevo nivel. Ahora, al apostar en el chance de 3 cifras, no solo te llevas tus ganancias habituales, ¡sino que recibes un increíble 50% adicional!', enlace: "#" },
        { texto: '(VIGENCIA: Del 01 de febrero hasta el 31 de marzo de 2024) - ¡Emociónate con "Raspando y Ganando"! En cada punto, tu raspa perdedor puede ser la llave de entrada a premios asombrosos. ¡No te pierda la oportunidad de convertir cada raspadura en una victoria inesperada! Descubre la magia de ganar más allá del raspa inicial. ¡Ven y vive la emoción de "Raspando y Ganando"!', enlace: "https://drive.google.com/file/d/1kw9VoWV3DOVXQAmR2Br2Tkc529coGOGl/view?usp=sharing" },
      ];

      setData(dummyData);
    };

    fetchData();
  }, []);

  // Asegúrate de que las rutas de las imágenes predeterminadas sean correctas y accesibles
  const getImageOrDefault = (index) => {
    if (index < data.length && data[index].imagen) {
      return data[index].imagen;
    }
    return defaultImages[index % defaultImages.length];
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="campana-container">
        <h2 className="titulo-campana">CAMPAÑAS</h2>
      </div>
      <div className="campanas-container">
        {data.map((sorteo, index) => (
          <CuadroCampaña
            key={index}
            imagen={getImageOrDefault(index)}
            texto={sorteo.texto}
            enlace={sorteo.enlace}
          />
        ))}
      </div>

      <BotonFIndex />
      <Puntos />
      <footer>
        <Footer />
      </footer>
    </>
  );
};