import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import GaleriaProductos from '../components/GaleriaProductos';

import imgCarne from '../assets/img/carne1.jpg';
import Promocion from '../components/Promocion';
import CarneDelMes from '../components/Carnedelmes';

import { productos } from '../data/productos';
import { itemsMenu } from '../data/navegacion';

function Productos() {
      //arreglo de productos ahora en productos.js
      
  return (
    <>
    <Header titulo={"Carniceria don pepe DUOC"} subtitulo={"Una carniceria simple con JSX"}
    itemsMenu={itemsMenu}/>

      <Promocion/>

      <Seccion id="album" titulo={"nuestros productos"}>
        <p>Aquí va una cuadrícula de carnes con espacio para imágenes.</p>

        <GaleriaProductos productos={productos} /> {/* se puede usar el slice para mostrar cierta cantidad de productos */}
      </Seccion>

      <CarneDelMes/>

      <Footer footer={"2025 Carniceria don Pepe - Todos los derechos reservados"}/>

    </>
  )
}

export default Productos