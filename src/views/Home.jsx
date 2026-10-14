import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import GaleriaProductos from '../components/GaleriaProductos';
import Formulario from '../components/Formulario';

import Promocion from '../components/Promocion';
import CarneDelMes from '../components/Carnedelmes';

import { productos } from '../data/productos';
import { itemsMenu } from '../data/navegacion';

function Home() {
  //arreglo itemsMenu

  //arreglo de productos

  return (
    <>
    <Header titulo={"Carniceria don pepe DUOC"} subtitulo={"Una carniceria simple con JSX"}
      itemsMenu={itemsMenu}/>

      <Promocion/>

      <Seccion id="inicio" titulo={"Bienvenidos a carniceria don pepe"}>
      {/* aca elementos de tipo children */}
      {/* propiedad children, todo lo que esta dentro de las etiquetas de apertura y cierre */}
        <p>Esta es una página de carniceria de distintos tipos de carne.</p>
				<p>Puedes usar este espacio para visualizar la carne a comprar o encargar.</p>
      </Seccion>

      <Seccion id="album" titulo={"nuestros productos"}>
        <p>Aquí va una cuadrícula de carnes con espacio para imágenes.</p>

        <GaleriaProductos productos={productos} /> {/* se puede usar el slice para mostrar cierta cantidad de productos */}
      </Seccion>

      <CarneDelMes/>

      <Seccion id="contacto" titulo="Contacto y pedidos">
      <p>¿Quieres hacer un pedido al por mayor o tienes consultas? Escríbenos:</p>

      <Formulario/>

      </Seccion>

      <Footer footer={"2025 Carniceria don Pepe - Todos los derechos reservados"}/>

    </>
  )
}

export default Home