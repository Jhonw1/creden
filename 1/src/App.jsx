import { Route, Routes } from "react-router-dom";
import { Index } from "./components/Index/Index";
import { Resultados } from "./components/Resultados/Resultados";
import { Campañas } from "./components/Campañas/Campañas";
import { QuienesSomos } from "./components/QuienesSomos/QuienesSomos";
import { TrabajaNosotros } from "./components/TrabajaNosotros/TrabajaNosotros";
import { Social } from "./components/Social/Social";
import { Portafolio } from "./components/Portafolio/Portafolio";
import { Productos } from "./components/Productos/Productos";
import { Servicios } from "./components/Servicios/Servicios";
import { Chance } from "./components/Chance/Chance";
import { Betplay } from "./components/Betplay/Betplay";
import { Baloto } from "./components/Baloto/Baloto";
import { Miloto } from "./components/Miloto/Miloto";
import { SuperAstro } from "./components/SuperAstro/SuperAstro";
import { ChanceMillonario } from "./components/ChanceMillonario/ChanceMillonario";
import { BlueCasino } from "./components/BlueCasino/BlueCasino";
import { RaspaListo } from "./components/RaspaListo/RaspaListo";
import { Politicas } from "./components/Politicas/Politicas";

export default function App() {
  return (
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/resultados' element={<Resultados/>}/>
          <Route path='/campañas' element={<Campañas/>}/>
          <Route path='/quienesSomos' element={<QuienesSomos/>}/>
          <Route path='/trabajaNosotros' element={<TrabajaNosotros/>}/>
          <Route path='/social' element={<Social/>}/>
          <Route path='/portafolio' element={<Portafolio/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/chance' element={<Chance/>}/>
          <Route path='/betplay' element={<Betplay/>}/>
          <Route path='/baloto' element={<Baloto/>}/>
          <Route path='/miloto' element={<Miloto/>}/>
          <Route path='/superAstro' element={<SuperAstro/>}/>
          <Route path='/chanceMillonario' element={<ChanceMillonario/>}/>
          <Route path='/blueCasino' element={<BlueCasino/>}/>
          <Route path='/raspaListo' element={<RaspaListo/>}/>
          <Route path='/politicas' element={<Politicas/>}/>
      </Routes>
  )
}

