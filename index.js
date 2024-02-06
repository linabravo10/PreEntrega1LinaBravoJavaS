document.addEventListener('DOMContentLoaded', () => {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const productosContainer = document.getElementById('productos-container');
  const carritoContainer = document.getElementById('carrito-container');
  const carritoTotal = document.getElementById('carrito-total');

  const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  };

  const actualizarCarrito = () => {
    carritoContainer.innerHTML = '';

    carrito.forEach((producto) => {
      const productoItem = document.createElement('div');
      productoItem.classList.add('carrito-producto');

      const nombre = document.createElement('span');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('span');
      precio.textContent = `$${producto.precio}`;

      productoItem.appendChild(nombre);
      productoItem.appendChild(precio);

      carritoContainer.appendChild(productoItem);
    });

    const total = carrito.reduce((accumulator, producto) => accumulator + producto.precio, 0);
    carritoTotal.textContent = `$${total}`;
  };

  // Cargar productos directamente desde datos.json
  const productos = [
    {"id": 1, "nombre": "Collar cuero", "precio": 15},
    {"id": 2, "nombre": "Collar gps", "precio": 16},
    {"id": 3, "nombre": "Placa qr", "precio": 10},
    {"id": 4, "nombre": "Placa laser", "precio": 12}
  ];

  productos.forEach((producto) => {
    const productoItem = document.createElement('div');
    productoItem.classList.add('producto');

    const img = document.createElement('img');
    img.src = `imgc/${producto.id}.jpg`;
    img.alt = producto.nombre;

    const info = document.createElement('div');
    info.classList.add('producto-info');

    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;

    const agregarCarrito = document.createElement('button');
    agregarCarrito.textContent = 'Agregar al carrito';
    agregarCarrito.addEventListener('click', () => agregarAlCarrito(producto));

    info.appendChild(nombre);
    info.appendChild(precio);
    info.appendChild(agregarCarrito);

    productoItem.appendChild(img);
    productoItem.appendChild(info);

    productosContainer.appendChild(productoItem);
  });

  // Limpia el carrito al cerrar la ventana del navegador (opcional)
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('carrito');
  });
});
