function Header({titulo, subtitulo, itemsMenu}) {
//comentario
/* 
    comentario
    hola
*/
  return (
    <>
    {/* comentario */}
        <header id="encabezado">
			<h1>{titulo}</h1>
			<p>{subtitulo}</p>

			<nav id="menu-principal">
				<ul>
                    {
                        itemsMenu.map((item) => (
                            <li><a href={item.href}>{item.label}</a></li>
                        ))
                    }

				</ul>
			</nav>
		</header>
    </>
  )
}

export default Header