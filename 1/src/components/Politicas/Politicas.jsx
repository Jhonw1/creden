import React from "react";
import "./Politicas.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import archiFinanciero from "../../assets/ARCHIVOS/INFORME FINANCIERO RSQ INDIVIDUAL 2023-2022 V2 validado GCCA OK OLR Version1.pdf";

const CuadroCampaña = ({ imagen, texto }) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const Politicas = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />

      <div className="politicaContainer">
        <h2 className="tituloPoliticas">POLÍTICAS</h2>
      </div>

      <div className="cuadroContenedorPolitica">
        <div className="cuadroTextoPolitica">
          <div className="cuadroTituloPolitica">
            <h2 className="tituloPolitica">POLITICAS SISTEMA DE GESTION</h2> <br/>
          </div>

          <div className="containerTextPolitica">
            <p> OBJETIVO: Implementar y Mantener un sistema de gestión adecuado a Red de Servicios del Quindío S.A, que permita satisfacer las necesidades y expectativas de las partes interesada, basado en los requisitos normativos. </p> 
            <br/>
            <li>Promover la innovación a través de la mejora continua como un principio fundamental aplicable a cada uno de los procesos que intervienen en la satisfacción del cliente en Red de Servicios del Quindío S.A.</li>
            <li>Generar un compromiso dinámico entre los miembros de la compañía y partes interesadas, con la finalidad de mantener activo el Sistema de Gestión de la Calidad. </li>
            <li>Fundamentar el Sistema de Gestión de la Calidad en la prevención y gestión de riesgos derivados de cada proceso, como medio de proporcionar a las partes interesadas productos y servicios de calidad; de acuerdo a lo anterior es responsabilidad de los miembros de la compañía informar cualquier situación, real o potencial, que pueda llegar a afectar lo planteado por la Política de Calidad.</li>
          </div>
        </div>
      </div>

      <hr/><br />

      <div className="cuadroContenedorPolitica">
        <div className="cuadroTextoPolitica">
          <div className="cuadroTituloPolitica">
            <h2 className="tituloPolitica">POLÍTICAS DE SEGURIDAD DE LA INFORMACIÓN</h2> <br/>
          </div>

          <div className="containerTextPolitica">
            <p> Red de servicios del Quindío S.A, marca Facilísimo tiene como compromiso cumplir con la, normatividad vigente, satisfaciendo las necesidades de nuestras partes interesadas, con un alto sentido de responsabilidad, como parte de nuestra estrategia integral de mejoramiento continuo, orientada bajo un sistema de seguridad de la información para dar continuidad al negocio, la administración de riesgos y la consolidación de una cultura de seguridad, permitiendo identificar y minimizar los riesgos a los cuales se expone la información y garantizar el cumplimiento de los siguientes requerimientos. </p> 
            <br/>
            <li>Proteger la confidencialidad, integridad, disponibilidad y autenticidad de los activos de información.</li>
            <li>Cumplir con los requisitos legales o reglamentarios y las obligaciones contractuales de seguridad.</li>
            <li>Administrar y conservar los documentos producidos en el ejercicio de las operaciones y preservar la memoria institucional.</li>
          </div>
        </div>
      </div>

      <hr/><br />

      <div className="cuadroContenedorPolitica">
        <div className="cuadroTextoPolitica">
          <div className="cuadroTituloPolitica">
            <h2 className="tituloPolitica">POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO</h2> <br/>
          </div>

          <div className="containerTextPolitica">
            <p>La Seguridad y Salud en el Trabajo es la base de la ejecución de los procesos del día a día de la empresa RED DE SERVICIOS DEL QUINDÍO S.A., donde la gerencia refleja su compromiso en la protección y promoción de la salud de los trabajadores y partes interesadas, no solo incluyendo la Seguridad y salud en el trabajo dentro de los objetivos organizacionales, sino promoviendo el autocuidado de la salud intra y extra laboral; disponiendo los recursos necesarios para el diseño, implementación, verificación y retroalimentación permanente del Sistema de seguridad y salud en el trabajo SG-SST en todos sus centros de trabajo, permitiendo la identificación de peligros, evaluación y control de riesgos en la organización, con el objetivo de prevenir, atender las emergencias, contingencias y propender por la mejora continua de los procesos, la calidad de vida de los trabajadores, su desempeño y el de las partes interesadas. La política se enmarca dentro de los siguientes principios: Cuidado de la salud: Adoptar las medidas necesarias para que, en todos los centros de trabajo del departamento del Quindío, se identifiquen, evalúen y valoren los riesgos propios de la empresa, y se implementen los respectivos controles. Proteger la seguridad y salud de los trabajadores y partes interesadas, mediante la mejora continua del sistema de gestión de la seguridad y salud en el trabajo, como variable fundamental del desempeño de la empresa. Cumplimiento Legal: Promueve la participación de sus trabajadores y partes interesadas en el desarrollo del sistema de gestión en seguridad y salud en el trabajo y en el desarrollo de las acciones necesarias, a través de la conformación y funcionamiento del comité paritario de Seguridad y Salud en el Trabajo COPASST, Comité de Convivencia Laboral COCOLA y las Brigadas de emergencias. Adicionalmente permitirá el cumplimiento de la legislación en materia de seguridad y salud en el trabajo aplicable y vigente a la organización en el interior de la misma. Generación de consciencia: Trabajar por generar cultura de compromiso individual y colectivo en autocuidado, en cada uno de los colaboradores.</p> 
            </div>
        </div>
      </div>

      <hr/><br />

      <div className="cuadroContenedorPolitica">
        <div className="cuadroTextoPolitica">
          <div className="cuadroTituloPolitica">
            <h2 className="tituloPolitica">POLÍTICA DE SEGURIDAD VIAL</h2> <br/>
          </div>

          <div className="containerTextPolitica">
            <p>Para RED DE SERVICIOS DEL QUINDÍO S. A, la salud y la seguridad forman parte de la naturaleza misma del trabajo y por lo tanto, son conceptos inherentes a todos los procesos operativos incluyendo el transporte de personas, productos y servicios. Como tal, debe formar parte de la planeación y diseño de los trabajos que aquí se realizan, para evitar al máximo las situaciones de riesgo que puedan afectar a las personas, los equipos y las instalaciones, propendiendo por el mejoramiento continuo de la seguridad vial, el cumplimiento de los requisitos aplicables, aportando recursos y personal idóneo para cumplir los objetivos propuestos. Para tal efecto la alta gerencia se compromete con lo siguiente:</p> 
            <br/>
            <li>Proveer las medidas de prevención y control de los riesgos propios de La conducción y el uso de las vías en general según la identificación, análisis y valoración que se haga de los mismos.</li>
            <li>Garantizar desde los procesos de selección, el perfil adecuado de las personas según las características de las tareas que van a desempeñar, especialmente cuando el oficio está relacionado con la conducción. </li>
            <li>Consultar con los colaboradores los principales factores de riesgo que son necesarios corregir para garantizar su salud y su seguridad e involucrarlos en las mejoras.</li>
            <li>Desarrollar programas de capacitación y motivación permanentes dirigidos a toda la población trabajadora de la organización. </li>
            <li>Asegurar el mantenimiento preventivo planeado de los vehículos y equipos para evitar accidentes o enfermedades en las personas que allí trabajan. </li>
            <li>Revisar esta política cada año y cambiarla cuando las condiciones así lo exija.</li>
            </div>
        </div>
      </div>

      <hr/><br />

      <div className="cuadroContenedorPolitica">
        <div className="cuadroTextoPolitica">
          <div className="cuadroTituloPolitica">
            <h2 className="tituloPolitica"><a className="nombrePoliticaDrive" target="_blank" href={archiFinanciero} rel="noreferrer">ESTADOS FINANCIEROS</a></h2> 
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};