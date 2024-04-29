import React, { useState, useEffect, useRef } from 'react';
import "./header.css"
import "./dropStyle.css"
import LogoF from "../../assets/LOGO-FACILISIMO.NEW.png"; 
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const handleMouseEnter = () => {
if (!isOpen) {
      setIsOpen(true);
        
      }  };

  const handleMouseLeave = () => {
    if (!dropdownRef.current.contains(event.relatedTarget) ) {
      setIsOpen(false);

    }  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);  


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  //Fundacion
  const [isOpen1, setIsOpen1] = useState(false);
  const dropdownRef1 = useRef(null);

  const handleMouseEnter1 = () => {
    if (!isOpen1) {
      setIsOpen1(true);
        
      }
  };

  const handleMouseLeave1 = () => {
    if (!dropdownRef1.current.contains(event.relatedTarget) ) {
      setIsOpen1(false);

    }
    };
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen1(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef1]);  


  //SERVICIOS
  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef2 = useRef(null);

  const handleMouseEnter2 = () => {
    if (!isOpen2) {
      setIsOpen2(true);
        
      }
  };

  const handleMouseLeave2 = () => {
    if (!dropdownRef2.current.contains(event.relatedTarget)) {
      setIsOpen2(false);

    }
    };
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef2]);  



  //Fundacion
  const [isOpen3, setIsOpen3] = useState(false);
  const dropdownRef3 = useRef(null);

  const handleMouseEnter3 = () => {
    if (!isOpen3) {
      setIsOpen3(true);
        
      }  };

  const handleMouseLeave3 = () => {
    if (!dropdownRef3.current.contains(event.relatedTarget)) {
      setIsOpen3(false);

    }
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
          setIsOpen3(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef3]);  
  return (
    <header className="header">
    <div className="logo">
      <a href="">
        <img className="logo-header"src={LogoF} />
      </a>
    </div>
    <button  className="burger-menu" id="burger-menu" onClick={toggleMobileMenu} >
      <FaAlignJustify size={20}  />

    </button>
  
    <nav className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
      <ul>
      
        <li><Link className='icon-header' to="/" >Inicio</Link></li>
      
        <li> 
        <div className="dropdown" ref={dropdownRef}>
        <Link  className='icon-header' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Empresa</Link>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link className="sub-itemHeader" to="/quienesSomos">QUIÉNES SOMOS</Link></li>
          <li><Link className="sub-itemHeader" to="/trabajaNosotros">TRABAJA CON NOSOTROS</Link></li>
          <li><Link className="sub-itemHeader" to="/campañas">CAMPAÑAS</Link></li>
          <li><Link className="sub-itemHeader" to="/politicas">POLÍTICAS</Link></li>
        </ul>
      )}
    </div>
    </li>
      
        <li> <div className="dropdown" ref={dropdownRef1}>
      <Link className='icon-header' to="/social" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>Social</Link>
    </div>
    </li>
      
    <li>
      <div className="dropdown" ref={dropdownRef2}>
      <Link className='icon-header' to="/portafolio" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>Portafolio</Link>
      {isOpen2 && (
        <ul className="dropdown-menu">
          <li><Link className="sub-itemHeader" to="/productos">PRODUCTOS</Link></li>
          <li><Link className="sub-itemHeader" to="/servicios">SERVICIOS</Link></li>
        </ul>
      )}
    </div>
  </li> 
      
  <li>       
    <div className="dropdown" ref={dropdownRef3}>
      <Link className='icon-header'  to="/resultados" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>Resultados</Link>
      {isOpen3 && (
        <ul className="dropdown-menu">
        
        </ul>
      )}
    </div></li>
        <li></li>
      </ul>
    </nav>
    <div className="account-btn">
      
    <Link to="https://ventas.facilisimo.co/login" target='_blank' className="boton-mi-cuenta">
      <div className="icon-carrito"> <FaShoppingCart size={20} /></div>
      <div className="linea-blanca"></div>
      APUESTA AQUI
    </Link>
    </div>
  </header>
  )
}
