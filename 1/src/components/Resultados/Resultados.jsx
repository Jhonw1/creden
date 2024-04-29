import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Field, Formik, Form } from "formik";
import "./Resultados.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";


export const Resultados = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const corregirCaracteresUnicode = (cadena) => {
    return cadena.replace(/u00d1/g, "Ñ");
  };

  const fetchData = async (fecha) => {
    try {
      setLoading(true);
      setData([]); // Limpiar resultados anteriores

      // Si no se proporciona fecha, utiliza la fecha actual
      const fechaConsulta = fecha || format(new Date(), "yyyy-MM-dd");

      const fechaLocal = new Date(fechaConsulta + "T00:00:00");
      const fechaFormateada = format(fechaLocal, "dd-MM-yyyy");

      const url = `https://apkfacilisimo.facilisimo.co/apiservice/resultados/buscarResultados/1093/455/${fechaFormateada}`;
      const response = await fetch(url);
      const result = await response.json();

      if (result.estado === false) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }

      const sorteosTransformados = result.sorteos.map((sorteo) => {
        const numerosGanadoresComoArray = sorteo.numero_ganador
          .split("")
          .map(Number);

        const serieComoArray = Array.from(sorteo.serie).map((char) =>
          isNaN(char) ? char : Number(char)
        );

        return {
          ...sorteo,
          nombre_loteria: corregirCaracteresUnicode(sorteo.nombre_loteria),
          numero_ganador: numerosGanadoresComoArray,
          serie: serieComoArray,
        };
      });

      setData(sorteosTransformados);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Puedes proporcionar una fecha inicial aquí si lo necesitas
  }, []);


  return (
    <>
      <header>
        <Header />
      </header>
      <div className="resultados-container">
        <h2 className="titulo">RESULTADOS LOTERIAS</h2>
        <div className="cajaformulariofecha">
          <Formik
            initialValues={{ fecha: "" }}
            onSubmit={(values) => {
              fetchData(values.fecha);
            }}
          >
            <Form>
              <div className="formulariofecha">
                <Field className="botonFecha" type="date" name="fecha" />
                <button type="submit" className="boton-fecha">
                  Buscar
                </button>
              </div>
            </Form>
          </Formik>
      </div>
        {loading && (
          <div className="loader-overlay">
            <div className="caja-loader">
              <span class="loader"></span>
          </div>
        </div>
      )}
      {noResults && (
        <div className="no-results-message">
          <p className="message">No hay resultados disponibles para la fecha seleccionada.</p>
        </div>
      )}
        <div className="tablas">
          <table className="tabla">
            <thead className="items-tabla">
              <tr className="encabezado">
                <th className="border1">
                  <div className="encabezado-item">Lotería</div>
                </th>
                <th className="numero-ganador">
                  <div className="encabezado-item">Número Ganador</div>
                </th>
                <th className="border2">
                  <div className="encabezado-item">Serie</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, data.length / 2).map((sorteo, index) => (
                <tr key={index}>
                  <td className="tituloLoteria">{sorteo.nombre_loteria}</td>
                  <div className="numero-serie">
                    <td className="numero-ganador">
                      {sorteo.numero_ganador.map((digit, index) => (
                        <div key={index} className="cuadro-rojo">
                          {digit}
                        </div>
                      ))}
                    </td>
                    <td className="serie">
                      {sorteo.serie ? (
                        sorteo.serie.map((digit, index) => (
                          <div key={index} className="cuadro-rojo">
                            {digit}
                          </div>
                        ))
                      ) : (
                        <div className="cuadro-rojo">{"*"}</div>
                      )}
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tabla2">
            <thead className="items-tabla2">
              <tr className="encabezado2">
                <th className="border1">
                  <div className="encabezado-item2">Lotería</div>
                </th>
                <th className="numero-ganador">
                  <div className="encabezado-item2">Número Ganador</div>
                </th>
                <th className="border2">
                  <div className="encabezado-item2">Serie</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(data.length / 2).map((sorteo, index) => (
                <tr key={index}>
                  <td className="tituloLoteria2">{sorteo.nombre_loteria}</td>
                  <div className="numero-serie2">
                    <td className="numero-ganador2">
                      {sorteo.numero_ganador.map((digit, index) => (
                        <div key={index} className="cuadro-rojo">
                          {digit}
                        </div>
                      ))}
                    </td>
                    <td className="serie2">
                      {sorteo.serie ? (
                        sorteo.serie.map((digit, index) => (
                          <div key={index} className="cuadro-rojo">
                            {digit}
                          </div>
                        ))
                      ) : (
                        <div className="cuadro-rojo">{"*"}</div>
                      )}
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="linea-abajo"></h2>
      </div>
      <BotonFIndex />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
