import "./QuienesSomos.css";
import { Header } from "../header/header";
import { Puntos } from '../Puntos/Puntos';
import { Footer } from "../footer/footer";
import { BotonFIndex } from "../BotonFIndex/BotonFIndex";
import imagenHistoria from '../../assets/facilisimo_historia_quindio.png';
import mision from '../../assets/MISION.png';
import valores from '../../assets/VALORES.png';
import vision from '../../assets/VISION.png';
import fondoQuienesSomos from '../../assets/FONDO-QUIENES-SOMOS.png';

const CuadroCampaña = ({imagen, texto}) => (
  <div className="cuadro-somos">
    <div className="contenido">
      <p className="texto-somos">{texto}</p>
      <img src={imagen} alt="Campaña" className="img-somos" />
    </div>
  </div>
);

export const QuienesSomos = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <BotonFIndex />
      
      <div className="contenedorSomos" style={{ backgroundImage: `url(${fondoQuienesSomos})` }}>
        <h2 className="titleQuienes">Quiénes Somos.</h2>
        <br/>
        <div className="contenedor">
          <p className="texto-celu">
            Hace 35 años, visionarias empresas en el Quindío dieron origen a Facilísimo, antes Apuestas Ochoa.<br/>Hoy, como la red transaccional más grande, generamos 1.500 empleos, siendo el 90% para madres cabeza de familia. Facilísimo es un motor de progreso con más de 300 puntos de venta, ofreciendo servicios que van más allá de apuestas, incluyendo giros, recargas, juegos, corresponsalía bancaria y pagos de servicios públicos. Somos tu aliado confiable para soluciones rápidas, fáciles y seguras, ganándonos un lugar especial en la vida de los cuyabros.
          </p>
          <p className="texto-pc">
            La historia de Facilisimo comienza un 24 de Julio cuando las diferentes empresas de chance local buscan asociarse bajo la iniciativa de Apuestas Ochoa, dedicada a la comercialización del chance en el departamento del Quindío, ha tenido como meta estar presente en todos los rincones del departamento implementando servicios con la mejor tecnología, transformando ideas, innovando con sus productos, investigando para llevar mejores productos y servicios, pasando del proceso de vendedores comisionistas y talonarios manuales a una red inalámbrica propia que permitió ampliar el portafolio de servicios y la participación en el mercado.
            <br /><br />
            La Familia Facilisimo ha crecido con los años hoy cuenta con más de 1.000 colaboradores que trabajan con esmero y dedicación en los 12 municipios del Quindío, en los puntos de venta, en las veredas, en las calles, en cada esquina. Pensamos en Facilitar la vida y las economías de las familias y en donde se encuentra presente un punto de Venta tendremos disponibles servicios de recaudo y pago en forma ágil y segura
            <br /><br />
            Es por esto que gracias al esfuerzo de nuestro grupo de ventas, a la confianza de los Quindianos y de nuestros aliados, hoy ya no solo somos una empresa de Chance, somos una empresa multi – servicios con una red transnacional dedicada a entregar cobertura y facilidad de acceso a través de una sólida red tecnológica y un equipo humano competente.
            <br /><br />
            Actualmente contamos con servicios del pago y envío de giros nacionales e internacionales, recargas, recaudos, apuestas entre muchos otros servicios que atraen cada vez más a los clientes, con un firme interés por llegar a las nuevas generaciones para facilitarles la vida.
          </p>
          <CuadroCampaña imagen={imagenHistoria}/>
        </div>
      </div>

      

      <div className="imagenes-container">
        <img className="imagen" src={mision} alt="Imagen 1" />
        <img className="imagen" src={vision} alt="Imagen 2" />
        <img className="imagen" src={valores} alt="Imagen 3" />
      </div>

      <div className="espacioBlanco"></div>
      
      <Puntos />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
