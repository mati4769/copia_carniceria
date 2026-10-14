function Body({}) {
//comentario
/* 
    comentario
    hola
*/
  return (
    <>
    {/* comentario */}

      <main id="contenido">

        {/* nueva regla nr1 */}
        <section id="promocion">
          <p>Durante los sabados en el mes de agosto habrá un 20% de descuento en cortes de vacuno y carnes seleccionadas.</p>
        </section>

        <section id="inicio" className="seccion">
          <h2>Bienvenidos</h2>
          <p>Esta es una página de carniceria de distintos tipos de carne.</p>
          <p>Puedes usar este espacio para visualizar la carne a comprar o encargar.</p>
        </section>

        <section id="album" className="seccion">
          <h2>carnes</h2>
          <p>Aquí va una cuadrícula de carnes con espacio para imágenes.</p>

          <div className="galeria">
            {/* Tarjeta 1 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 1"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 1</h3>
              <p className="tarjeta-descripcion">Descripción breve de este elemento del álbum.</p>
              <p className="tarjeta-precio">$5.000 CLP</p>
            </article>

            {/* Tarjeta 2 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 2"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 2</h3>
              <p className="tarjeta-descripcion">En descuento.
                {/* nueva regla nr2 */}
                <span className="etiqueta-descuento">-15% OFF</span></p>
              <p className="tarjeta-precio">$4.000 CLP</p>
            </article>

            {/* Tarjeta 3 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 3"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 3</h3>
              <p className="tarjeta-descripcion">Descripción breve de este elemento del álbum.</p>
              <p className="tarjeta-precio">$4.500 CLP</p>
            </article>

            {/* Tarjeta 4 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 4"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 4</h3>
              <p className="tarjeta-descripcion">Descripción breve de este elemento del álbum.</p>
              <p className="tarjeta-precio">$8.000 CLP</p>
            </article>

            {/* Tarjeta 5 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 5"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 5</h3>
              <p className="tarjeta-descripcion">Descripción breve de este elemento del álbum.</p>
              <p className="tarjeta-precio">$5.500 CLP</p>
            </article>

            {/* Tarjeta 6 */}
            <article className="tarjeta">
              <div className="espacio-imagen">
                <img
                  src="src/assets/img/carne1.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  alt="carne generica 6"
                />
              </div>
              <h3 className="tarjeta-titulo">carne generica 6</h3>
              <p className="tarjeta-descripcion">Descripción breve de este elemento del álbum.</p>
              <p className="tarjeta-precio">$10.000 CLP</p>
            </article>
          </div>
        </section>

        {/* nueva regla nr3 */}
        <section id="herramienta-destacada">
          <h2>Carne del mes: Lomo Vetado Premium</h2>
          {/* nueva regla nr4 */}
          <p className="tiempo-limitado">¡Solo por tiempo limitado, quedan 5 días de oferta!</p>
          {/* nueva regla nr5 */}
          <p>Antes $12.990, ahora <mark>$9.990</mark></p>
        </section>

        {/* nueva regla nr6 */}
        <section id="detalles" className="ver-detalles">
          <h3>para ver mas informacion de las carnes, haga click abajo</h3>
          <a href="catalogo.html">ver mas detalles</a>
        </section>

        <section id="contacto" className="seccion">
          <h2>Contacto</h2>
          <p>Si tienes dudas o comentarios, puedes escribirnos:</p>

          <form action="#" method="post">
            <a href="contacto-herramientas.html">ponerse en contacto</a>
          </form>
        </section>
      </main>

    </>
  )
}

export default Body