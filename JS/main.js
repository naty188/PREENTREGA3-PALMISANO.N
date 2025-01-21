/*
funcionalidad con eventos,
agregar buscadores (input),
localstorage
JSON
dom
funciones
funcion constructora
operadores avanzados
*/

const Producto = function(nombre, imagen, categoria,precio){
    this.nombre= nombre
    this.imagen = this.imagen
    this.categoria = this.categoria
    this.precio = this.precio
}
let producto1  = new Producto("pintura cine-01","./img/cine1.jpeg","Pinturas cine",35000)
let producto2  = new Producto("pintura cine-02","./img/cine2.jpeg","Pinturas cine",35000)
let producto3  = new Producto("pintura cine-03","./img/cine3.jpeg","Pinturas cine",35000)
let producto4  = new Producto("pintura ran-01","../img/ran1.jpeg","pintura ran", 25000)
let producto5  = new Producto("pintura ran-02","./img/ran2.jpeg","pintura ran", 25000)
let producto6  = new Producto("pintura ran-03","./img/ran3.jpeg","pintura ran", 25000)
let producto7  = new Producto("pintura ran-04","./img/ran4.jpeg","pintura ran", 25000)
let producto8  = new Producto("pintura ran-05","./img/ran5.jpeg","pintura ran", 25000)
let producto9 = new Producto("pintura ran-06","./img/ran6.jpeg","pintura ran", 25000)
let producto10 = new Producto("pintura ran-07","./img/ran7.jpeg","pintura ran", 25000)
let producto11  = new Producto("pintura ran-08","./img/ran8.jpeg","pintura ran", 25000)
let producto12  = new Producto("pintura ran-09","./img/ran9.jpeg","pintura ran", 25000)
let producto13 = new Producto("pintura ran-10","./img/ran10.jpeg","pintura ran", 25000)
let producto14 = new Producto("pintura ran-11","./img/ran11.jpeg","pintura ran", 25000)

 let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14]


//busco si hay productos en el localstorage
if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
 }else{
    lista=lista
 }

// Arrays de productos a vender
const pinturas = [
    "img/cine1.jpeg",
    "img/cine2.jpeg",
    "img/cine3.jpeg",
    "img/ran1.jpeg",
    "img/ran2.jpeg",
    "img/ran3.jpeg",
    "img/ran4.jpeg",
    "img/ran5.jpeg",
    "img/ran6.jpeg",
    "img/ran7.jpeg",
    "img/ran8.jpeg",
    "img/ran9.jpeg",
    "img/ran10.jpeg",
    "img/ran11.jpeg",
    "img/ran12.jpeg",
    "img/ran13.jpeg",
    "img/ran14.jpeg",
];




// Contenedor donde se mostrarán las imágenes
const galeriaContainer = document.getElementById("galeriaContainer");

// Función para cargar los productos desde el archivo JSON y mostrarlos
function cargarProductos() {
    // Usamos fetch() para cargar el archivo JSON
    fetch('./productos.json')
        .then(response => response.json())  // Convertimos la respuesta en formato JSON
        .then(data => {
            // Aquí 'data' es el array de productos que obtenemos desde el JSON
            data.forEach(producto => {
                // Crear un contenedor para cada producto
                const div = document.createElement('div');
                div.classList.add('producto-item'); // Clase para cada contenedor de producto
                
                // Crear el HTML del producto
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" />
                    <p>${producto.nombre}</p>
                    <p>$${producto.precio}</p>
                `;
                
                // Añadir el contenedor del producto a la galería
                galeriaContainer.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error cargando el archivo JSON:', error);
        });
}

// Llamar a la función para cargar y mostrar los productos
cargarProductos();

// Función para agregar las imágenes al DOM
function mostrarGaleria() {
    pinturas.forEach(imagenSrc => {
        // Crear el contenedor de la imagen
        const imagenContainer = document.createElement("div");
        imagenContainer.classList.add("Pinturas");

        // Crear la imagen
        const imagen = document.createElement("img");
        imagen.src = imagenSrc;
        imagen.alt = "Imagen de la galería";
        imagen.classList.add("pintura-imagen"); // Asegurarnos de que se aplique la clase correcta

        // Añadir la imagen al contenedor de la imagen
        imagenContainer.appendChild(imagen);

        // Añadir el contenedor de la imagen al contenedor principal de la galería
        galeriaContainer.appendChild(imagenContainer);
    });
}

// Llamar a la función para mostrar la galería cuando el script se cargue
mostrarGaleria();




// Array de productos
const productos = [
    { nombre: "pintura cine-01", imagen: "./img/cine1.jpeg", categoria: "Pinturas cine", precio: 35000 },
    { nombre: "pintura cine-02", imagen: "./img/cine2.jpeg", categoria: "Pinturas cine", precio: 35000 },
    { nombre: "pintura cine-03", imagen: "./img/cine3.jpeg", categoria: "Pinturas cine", precio: 35000 },
    { nombre: "pintura ran-01", imagen: "./img/ran1.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-02", imagen: "./img/ran2.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-03", imagen: "./img/ran3.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-04", imagen: "./img/ran4.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-05", imagen: "./img/ran5.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-06", imagen: "./img/ran6.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-07", imagen: "./img/ran7.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-08", imagen: "./img/ran8.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-09", imagen: "./img/ran9.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-10", imagen: "./img/ran10.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-11", imagen: "./img/ran11.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-12", imagen: "./img/ran12.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-13", imagen: "./img/ran13.jpeg", categoria: "Pinturas ran", precio: 25000 },
    { nombre: "pintura ran-14", imagen: "./img/ran14.jpeg", categoria: "Pinturas ran", precio: 25000 }
];




// Carrito almacenado en localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contadorCarrito');
    contadorCarrito.textContent = carrito.length;
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito en localStorage
}

// Función para mostrar los productos
function mostrarProductos(productosFiltrados) {
    const galeriaContainer = document.getElementById('galeriaContainer');
    galeriaContainer.innerHTML = ''; // Limpiar la galería antes de agregar productos

    productosFiltrados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-item');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <p>${producto.nombre}</p>
            <p class="precio">Precio: $${producto.precio}</p>
            <button id="btnAgregarCarrito">Agregar al carrito</button>
        `;

        // Botón "Agregar al carrito"
        const btnAgregarCarrito = div.querySelector('#btnAgregarCarrito');
        btnAgregarCarrito.onclick = function() {
            carrito.push(producto);
            actualizarContadorCarrito(); // Actualizar contador
        };

        galeriaContainer.appendChild(div);
    });
}

// Función para filtrar los productos según el texto ingresado en el buscador
function filtrarProductos() {
    const buscador = document.getElementById('buscador').value.toLowerCase(); // Capturar texto ingresado
    const productosFiltrados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(buscador); // Filtrar productos por nombre
    });
    mostrarProductos(productosFiltrados); // Mostrar productos filtrados
}

// Escuchar el evento 'input' en el buscador
document.getElementById('buscador').addEventListener('input', filtrarProductos);

// Mostrar todos los productos inicialmente
mostrarProductos(productos);

// Función para cargar el carrito desde localStorage y mostrar los productos en el carrito
function cargarCarrito() {
    const carritoContainer = document.getElementById('contenedorCarrito');
    carritoContainer.innerHTML = ''; // Limpiar el contenedor del carrito

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        carrito.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto-carrito');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                <p>${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="btnEliminarProducto">Eliminar</button>
            `;
            // Agregar evento de eliminar producto
            const btnEliminar = divProducto.querySelector('.btnEliminarProducto');
            btnEliminar.onclick = function() {
                eliminarProductoDelCarrito(producto.id); // Eliminar producto por id
            };
            carritoContainer.appendChild(divProducto);
        });
    }
}

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(productoId) {
    carrito = carrito.filter(producto => producto.id !== productoId); // Filtra el producto por id
    actualizarContadorCarrito(); // Actualizar el contador del carrito
    cargarCarrito(); // Recargar los productos en el carrito
}

// Llamar a la función para cargar el carrito cuando se carga la página
if (document.getElementById('contenedorCarrito')) {
    cargarCarrito();
}




 //boton del nav

const nav = document.querySelector ("#nav");
const abrir = document.querySelector ("#abrir");
const cerrar = document.querySelector ("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})





//boton del submenu

// Seleccionar todos los elementos de la lista con submenú
const menuItems = document.querySelectorAll(".nav-list > li");

// Agregar evento a cada elemento con submenú
menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");
    const link = item.querySelector("a");
    if (submenu) {
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 450) { // Solo en pantallas pequeñas
                e.preventDefault(); // Evita el redireccionamiento
                submenu.classList.toggle("visible");
            }
        });
    }
});


//iconos del nav

const iconosNav = document.querySelector(".nav-list")