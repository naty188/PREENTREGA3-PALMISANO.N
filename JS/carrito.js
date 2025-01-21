// Obtener carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contadorCarrito');
    contadorCarrito.textContent = carrito.length;
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito actualizado
}

// Función para cargar los productos en el carrito
function cargarCarrito() {
    const contenedorCarrito = document.getElementById('contenedorCarrito');
    contenedorCarrito.innerHTML = ''; // Limpiar contenedor antes de agregar productos

    // Verificar si el carrito tiene productos
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        // Recorrer el carrito y mostrar los productos
        carrito.forEach((producto, index) => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto-carrito');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                <p>${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="btnEliminarProducto" data-index="${index}">Eliminar</button>
            `;
            contenedorCarrito.appendChild(divProducto);
        });

        // Agregar el evento de eliminar para cada botón
        const botonesEliminar = document.querySelectorAll('.btnEliminarProducto');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                eliminarProductoDelCarrito(index);
            });
        });
    }
}

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(index) {
    // Eliminar el producto del carrito
    carrito.splice(index, 1);
    
    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito
    actualizarContadorCarrito();
    
    // Recargar el carrito en la vista
    cargarCarrito();
}

// Cargar el carrito al cargar la página
if (document.getElementById('contenedorCarrito')) {
    cargarCarrito();
}

// Actualizar contador al cargar la página
actualizarContadorCarrito();
