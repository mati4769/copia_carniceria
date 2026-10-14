import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import Formulario from '../components/Formulario';

import { itemsMenu } from '../data/navegacion';

function Registro() {

  return (
    <>
      <Header titulo={"Carniceria don pepe DUOC"} subtitulo={"Una carniceria simple con JSX"}
        itemsMenu={itemsMenu} />

      <Seccion id="registro" titulo={"Crear cuenta"}>
        <p>Completa el formulario para registrarte.</p>
        <Formulario mostrarMensaje={false} />
      </Seccion>

      <Footer footer={"2025 Carniceria don Pepe - Todos los derechos reservados"} />
    </>
  )
}

export default Registro