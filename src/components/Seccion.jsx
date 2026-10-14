function Seccion({id, titulo, children}) {
//comentario
/* 
    comentario
    hola
*/
  return (
    <>
    {/* comentario */}
    <section id={id} className="seccion">
        <h2>{titulo}</h2>
        
        {children}
    </section>
    </>
  )
}

export default Seccion
/* 

<section id="inicio" class="seccion">
    <h2>Bienvenidos</h2>
    <p>Esta es una página de carniceria de distintos tipos de carne.</p>
    <p>Puedes usar este espacio para visualizar la carne a comprar o encargar.</p>
</section>

*/