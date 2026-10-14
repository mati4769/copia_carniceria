import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import Formulario from '../components/Formulario';

import { itemsMenu } from '../data/navegacion';

function Login() {

  return (
    <>
      <Header titulo={"Carniceria don pepe DUOC"} subtitulo={"Una carniceria simple con JSX"}
        itemsMenu={itemsMenu} />

      <Seccion id="login" titulo={"Iniciar sesión"}>
        <p>Ingresa tus datos para entrar a tu cuenta.</p>
        <Formulario mostrarMensaje={false}/>
      </Seccion>

      <Footer footer={"2025 Carniceria don Pepe - Todos los derechos reservados"} />
    </>
  )
}

export default Login