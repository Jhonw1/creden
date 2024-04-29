import React, { useState, useEffect } from 'react';
import './SliderIndex.css';

export const Sliderindex = () => {
  const imagenes = [
    'https://res.cloudinary.com/dhl42m00b/image/upload/v1714399950/29abril_quindio_facilisimo_wpylh9.jpg',
    'https://res.cloudinary.com/dih5bvmdm/image/upload/v1703277366/SLIDER-WEB_RASPA-Y-LISTO_sq9rda.png',
    'https://res.cloudinary.com/dozodtdvl/image/upload/v1703256161/Slide-Baloto-1536x640_hmqhpo.png',
    'https://res.cloudinary.com/dhl42m00b/image/upload/v1712249571/BETPLAY_DATOS_FACILISIMO_PROTECCION_anerz3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="ContainerCenter">
        {/* Radio Seleccionar */}
        {imagenes.map((imagen, index) => (
          <input
            key={index}
            type="radio"
            name="Carrusel"
            id={`Slider${index + 1}`}
            checked={currentIndex === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}
        
      <div className="Carrusels">
        {/* Imagen contenido */}
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className="Carrusel"
            style={{ backgroundImage: `url(${imagen})` }}
          ></div>
        ))}
      </div>
        {/* Selector circulos inferiores colgantes */}
      <div className="Selectors">
        {imagenes.map((_, index) => (
          <label key={index} htmlFor={`Slider${index + 1}`} className="Selector"></label>
        ))}
      </div>
      
      
    </div>
  );
};
