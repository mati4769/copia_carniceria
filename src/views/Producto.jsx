import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import GaleriaProductos from '../components/GaleriaProductos';

import imgCarne from '../assets/img/carne1.jpg';
import { itemsMenu } from '../data/navegacion';

function Producto() {

  const producto = {
    id: 1,
    imagen: imgCarne,
    titulo: "carne generica 1",
    descripcion: "Descripción breve 1 de este elemento del álbum",
    precio: "5.000"
  }

  return (
    <>
      <Header titulo={"Carniceria don pepe DUOC"} subtitulo={"Una carniceria simple con JSX"}
        itemsMenu={itemsMenu} />

      <Seccion id="producto" titulo={"Detalle del producto"}>
        <GaleriaProductos productos={[producto]} />
      </Seccion>

      <Footer footer={"2025 Carniceria don Pepe - Todos los derechos reservados"} />
    </>
  )
}

export default Producto