
const Carrito = ({ carrito, modificarEnCarrito, eliminarDelCarrito }) => {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        {carrito.map(item => (
          <div key={item.id}>
            <p>{item.nombre} - ${item.precio}</p>
            <input
              type="text"
              value={item.nombre}
              onChange={(e) => modificarEnCarrito(item.id, e.target.value, item.precio)}
            />
            <input
              type="number"
              value={item.precio}
              onChange={(e) => modificarEnCarrito(item.id, item.nombre, parseFloat(e.target.value))}
            />
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Carrito;