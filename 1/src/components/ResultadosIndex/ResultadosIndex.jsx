import React, { useEffect, useState } from 'react';
import './ResultadosIndex.css';
import { Link } from 'react-router-dom';

import antioqueñitaDia from "../../assets/LOGOS LOTERIAS/ANTIOQUEÑITA-DIA.png";
import antioqueñitaTarde from "../../assets/LOGOS LOTERIAS/ANTIOQUEÑITA-TARDE.png";
import astroLuna from "../../assets/LOGOS LOTERIAS/ASTRO-LUNA.png"; 
import astroSol from "../../assets/LOGOS LOTERIAS/ASTRO-SOL.png";
import CafeteroDia from "../../assets/LOGOS LOTERIAS/CAFETERO-DIA.png";
import CafeteroNoche from "../../assets/LOGOS LOTERIAS/CAFETERO-NOCHE.png";
import ChonticoDia from "../../assets/LOGOS LOTERIAS/CHONTICO-DIA.png";
import ChonticoNoche from "../../assets/LOGOS LOTERIAS/CHONTICO-NOCHE.png";
import CulonaDia from "../../assets/LOGOS LOTERIAS/CULONA-DIA.png";
import DoradoMañana from "../../assets/LOGOS LOTERIAS/DORADO-MAÑANA.png";
import DoradoTarde from "../../assets/LOGOS LOTERIAS/DORADO-TARDE.png";
import DoradoNoche from "../../assets/LOGOS LOTERIAS/DORADO-NOCHE.png";
import FantasticaDia from "../../assets/LOGOS LOTERIAS/FANTASTICA-DIA.png";
import FantasticaNoche from "../../assets/LOGOS LOTERIAS/FANTASTICA-NOCHE.png";
import LaCaribeñaDia from "../../assets/LOGOS LOTERIAS/LA-CARIBEÑA-DIA.png";
import LaCaribeñaNoche from "../../assets/LOGOS LOTERIAS/LA-CARIBEÑA-NOCHE.png";
import LoteriaBogota from "../../assets/LOGOS LOTERIAS/LOTERIA-BOGOTA.png";
import LoteriaBoyaca from "../../assets/LOGOS LOTERIAS/LOTERIA-BOYACA.png";
import LoteriaCauca from "../../assets/LOGOS LOTERIAS/LOTERIA-CAUCA.png";
import LoteriaCruzRoja from "../../assets/LOGOS LOTERIAS/LOTERIA-CRUZ-ROJA.png";
import LoteriaCundinamarca from "../../assets/LOGOS LOTERIAS/LOTERIA-CUNDINAMARCA.png";
import LoteriaExtraDeColombia from "../../assets/LOGOS LOTERIAS/LOTERIA-EXTRA-DE-COLOMBIA.png";
import LoteriaExtraDeNavidad from "../../assets/LOGOS LOTERIAS/LOTERIA-EXTRA-DE-NAVIDAD.png";
import LoteriaHuila from "../../assets/LOGOS LOTERIAS/LOTERIA-HUILA.png";
import LoteriaManizales from "../../assets/LOGOS LOTERIAS/LOTERIA-MANIZALES.png";
import LoteriaMedellin from "../../assets/LOGOS LOTERIAS/LOTERIA-MEDELLIN.png";
import LoteriaMeta from "../../assets/LOGOS LOTERIAS/LOTERIA-META.png";
import quindio from "../../assets/LOGOS LOTERIAS/LOTERIA-QUINDIO.png";
import LoteriaRisaralda from "../../assets/LOGOS LOTERIAS/LOTERIA-RISARALDA.png";
import LoteriaSantander from "../../assets/LOGOS LOTERIAS/LOTERIA-SANTANDER.png";
import LoteriaTolima from "../../assets/LOGOS LOTERIAS/LOTERIA-TOLIMA.png";
import LoteriaValle from "../../assets/LOGOS LOTERIAS/LOTERIA-VALLE.png";
import Paisita3 from "../../assets/LOGOS LOTERIAS/PAISITA-3.png";
import PaisitaDia from "../../assets/LOGOS LOTERIAS/PAISITA-DIA.png";
import PaisitaNoche from "../../assets/LOGOS LOTERIAS/PAISITA-NOCHE.png";
import pijao from "../../assets/LOGOS LOTERIAS/PIJAO-DE-ORO.png";
import saman from "../../assets/LOGOS LOTERIAS/SAMAN.png";
import SinuanoDia from "../../assets/LOGOS LOTERIAS/SINUANO-DIA.png";
import SinuanoNoche from "../../assets/LOGOS LOTERIAS/SINUANO-NOCHE.png";
import SuperChonticoJueves from "../../assets/LOGOS LOTERIAS/SUPER-CHONTICO-JUEVES.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ResultadosIndex = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const totalItems = 16; // Puedes ajustar esto según la cantidad total de elementos
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = data.slice(startIndex, endIndex);

  const nombreLoteriaImagenes = {
    "ANTIOQUEÑITA DIA":antioqueñitaDia,
    "ANTIOQUEÑITA TARDE":antioqueñitaTarde,
    "ASTRO LUNA":astroLuna,
    "ASTRO SOL":astroSol,
    "CAFETERO DIA":CafeteroDia,
    "CAFETERO NOCHE":CafeteroNoche,
    "CHONTICO DIA": ChonticoDia,
    "CHONTICO NOCHE": ChonticoNoche,
    "CULONA DIA":CulonaDia,
    "DORADO MAÑANA":DoradoMañana,
    "DORADO NOCHE":DoradoNoche,
    "DORADO TARDE":DoradoTarde,
    "FANTASTICA DIA":FantasticaDia,
    "FANTASTICA NOCHE":FantasticaNoche,
    "LA CARIBEÑA DIA":LaCaribeñaDia,
    "LA CARIBEÑA NOCHE":LaCaribeñaNoche,
    "LOTERIA BOGOTA" : LoteriaBogota,
    "LOTERIA BOYACA" : LoteriaBoyaca,
    "LOTERIA CRUZ ROJA" : LoteriaCruzRoja,
    "LOTERIA CUNDINAMARCA" : LoteriaCundinamarca,
    "LOTERIA EXTRA DE NAVIDAD": LoteriaExtraDeNavidad,
    "LOTERIA HUILA": LoteriaHuila,
    "LOTERIA MANIZALES":LoteriaManizales,
    "LOTERIA MEDELLIN": LoteriaMedellin,
    "LOTERIA META":LoteriaMeta,
    "LOTERIA QUINDIO":quindio,
    "LOTERIA RISARALDA":LoteriaRisaralda,
    "LOTERIA SANTANDER":LoteriaSantander,
    "LOTERIA TOLIMA":LoteriaTolima,
    "LOTERIA VALLE":LoteriaValle,
    "PAISITA 3":Paisita3,
    "PAISITA DIA":PaisitaDia,
    "PAISITA NOCHE":PaisitaNoche,
    "PIJAO DE ORO":pijao,
    "SAMAN": saman,
    "SINUANO DIA":SinuanoDia,
    "SINUANO NOCHE":SinuanoNoche,
    "SUPER CHONTICO JUEVES":SuperChonticoJueves
  };
  const corregirCaracteresUnicode = (cadena) => {
    return cadena.replace(/u00d1/g, 'Ñ');
  };
  const fetchData = async () => {
    try {
      const fechaActual = new Date();

// Obtiene los componentes de la fecha
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Meses comienzan desde 0, por lo que sumamos 1
const año = fechaActual.getFullYear();

// Formatea la fecha como "dd-mm-yyyy"
  const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${año}`;

// Utiliza la variable fechaFormateada en tu URL
      const url = `https://apkfacilisimo.facilisimo.co/apiservice/resultados/buscarResultados/1093/455/${fechaFormateada}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      const sorteosTransformados = result.sorteos.map(sorteo => {
        return {
          ...sorteo,
          nombre_loteria: corregirCaracteresUnicode(sorteo.nombre_loteria)
        };
      });
      console.log(sorteosTransformados);
      setData(sorteosTransformados)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="contentbigR">
      <h1 className='bigTitle'><Link to="/resultados">
        RESULTADOS DEL DIA
      </Link></h1>

      <div className="bigBox">
        <div className="flechasr" onClick={handlePrevClick}>
          <IoIosArrowBack size={60} />
        </div>
      {data.length > 0 ? (
        <div className="contenedoresr">
          {visibleItems.map((data, index) => (
            <div key={index} className="littleBoxes">
              <div className="divFlotante">
                <img src={nombreLoteriaImagenes[data.nombre_loteria]} alt="" />
              </div>
              <div className="otros">
                <div className='titler'><h3>{data.nombre_loteria}</h3></div>
                <div className="boxesR">
                  <div className="circulitos">{data.numero_ganador[0]}</div>
                  <div className="circulitos">{data.numero_ganador[1]}</div>
                  <div className="circulitos">{data.numero_ganador[2]}</div>
                  <div className="circulitos">{data.numero_ganador[3]}</div>
                </div>
              </div>
            </div> 
          ))}
        </div>
        ):(
          <h1 className='titulo-resultados'>No hay resultados en el momento</h1>
        )}
        <div className="flechasr" onClick={handleNextClick}>
          <IoIosArrowForward size={60} />
        </div>
      </div>
    </div>
  );
};
