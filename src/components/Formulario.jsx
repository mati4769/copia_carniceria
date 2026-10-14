import Seccion from './Seccion'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Formulario({ mostrarMensaje = true }) {
  return (

      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="correo@ejemplo.cl" />
        </Form.Group>

        {/* mostrar mensaje tiene condicion para evitar que se muestre en login y registro */}
        {mostrarMensaje && (
          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escriba su pedido o consulta"
            />
          </Form.Group>
        )}

        <Button variant="danger" type="submit" className="me-2">
          Enviar mensaje
        </Button>
        <Button variant="secondary" type="reset">
          Limpiar formulario
        </Button>
      </Form>

  )
}

export default Formulario