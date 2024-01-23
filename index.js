document.addEventListener('DOMContentLoaded', () => {
    const productos = [
      { id: 1, nombre: 'Collar cuero', precio: 15 },
      { id: 2, nombre: 'Collar GPS', precio: 16 },
      { id: 3, nombre: 'Placa QR', precio: 10 },
      { id: 4, nombre: 'Placa láser', precio: 12 }
    ];
  
    const productosContainer = document.getElementById('productos-container');
    const carritoContainer = document.getElementById('carrito-container');
    const carritoTotal = document.getElementById('carrito-total');
  
    const carrito = [];
  
    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto) => {
      carrito.push(producto);
      actualizarCarrito();
    };
  
    // Función para actualizar el carrito
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
  });
  