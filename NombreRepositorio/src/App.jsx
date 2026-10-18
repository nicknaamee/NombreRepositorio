import React from 'react';
import Inicio from './components/pages/Inicio.jsx';
import Contacto from './components/pages/Contacto.jsx';
import OtraPagina from './components/pages/OtraPagina.jsx';
import BuzonSugerencias from './components/pages/BuzonSugerencias.jsx';
const ruta=window.location.pathname.split('/').pop().toLowerCase();
const buzon=ruta==='buzonsugerencias.html';
document.documentElement.classList.toggle('pagina-buzon',buzon);
document.body.classList.toggle('p-5',buzon);
export default function App(){if(ruta==='contacto.html')return <Contacto/>;if(ruta==='pag2.html')return <OtraPagina/>;if(buzon)return <BuzonSugerencias/>;return <Inicio/>;}
