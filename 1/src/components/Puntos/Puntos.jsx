import React from "react";
import "./Puntos.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Puntos = () => {
  return (
    <>
      <div className="CajaPunto">
        <Link
          to="https://www.google.com/maps/d/u/0/viewer?mid=16ZtQ15jzldiiGW-sWv96qTdLIKYRTEQv&ll=4.539803521555799%2C-75.66327680437594&z=13"
          target="_blank"
          className="button-maps"
        >
          {/* <FaMagnifyingGlass size={40} className="icono-maps" />  este comentario es para agregar un icono de lupa por si cambian de opinion utilizarla */}
          <p className="textPunto"> elige tu municipio</p>
        </Link>
      </div>
    </>
  );
};
