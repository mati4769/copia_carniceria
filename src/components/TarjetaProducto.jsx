import React, {useState} from "react";

function TarjetaProducto({ imagen, titulo, descripcion, precio }) {
  const [meGusta, setMeGusta] = useState(false);

  const alternar = () => {
    if (meGusta == false)
      setMeGusta(true);
    else
      setMeGusta(false);
  }
  return (
    <article className="tarjeta">
      <div className="espacio-imagen">
        <img
          src={imagen}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
          alt={titulo}
        />
      </div>
      <h3 className="tarjeta-titulo">{titulo}</h3>
      <p className="tarjeta-descripcion">{descripcion}</p>
      <p className="tarjeta-precio"> ${precio} CLP </p>

      <button
       onClick={alternar}
       style={{
        backgroundColor: meGusta ? '#e9a7f2' : '#bfbfbf',
        color: meGusta ? '#9200a5' : '#240303',
        borderRadius: '4px',
        fontWeight: 'bold'
       }}
      >
       {meGusta ? 'Guardado en favoritos' : 'Agregar a favoritos'} 
      </button>
    </article>
  );
}

export default TarjetaProducto