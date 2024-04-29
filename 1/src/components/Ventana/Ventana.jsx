
import React, { useState, useEffect } from 'react';
import './Ventana.css';
import { Link } from 'react-router-dom';
export const Ventana = () => {
    const [showPopup, setShowPopup] = useState(true);
  
    useEffect(() => {
      // Mostrar la ventana emergente al cargar la página
      // Puedes personalizar esto según tus necesidades, por ejemplo, mostrándolo solo una vez usando localStorage
      document.body.classList.add('hide-sidebar');
      setShowPopup(true);
     
  

    }, []);
  
    const handleClose = () => {
      setShowPopup(false);
      document.body.classList.remove('hide-sidebar');
    };
  
  
    return (
      <>
        {showPopup && (
          <div className="popup-container">
            <div className="popup-content">
              
              <div className='cierre'>
              <button className="close-button" onClick={handleClose}>
                X
              </button>
              
              </div>
              <img src="https://res.cloudinary.com/dhl42m00b/image/upload/v1713455287/ventas_resultados_facilisimo_quindio_resultados_loteria_dn4pqg.jpg" alt="" className='img-ventana' />
  
              {/* Botones en la parte inferior */}
              <Link to="https://ventas.facilisimo.co/facilisimo" target='_blank' className="bottom-buttons">
              <div className="bottom-buttons">
                <button>¡CLICK AQUI!</button>
              </div>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  };
