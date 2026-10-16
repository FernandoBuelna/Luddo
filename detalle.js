// Catálogo de productos de Luddo.
// Base inicial desarrollada por Manuel y adaptada durante la integración final.

const productos = [
  {
    id: 1,
    nombre: "Ajedrez de Madera",
    categoria: "clasicos",
    precio: 499,
    stock: 15,
    edadMinima: 6,
    jugadoresMin: 2,
    jugadoresMax: 2,
    duracionMinutos: 45,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://i.pinimg.com/originals/95/df/89/95df89d280b9fc2fecc61c4222884d71.jpg",
    descripcion: "Juego clásico de estrategia con tablero y piezas de madera.",
  },
  {
    id: 2,
    nombre: "Jenga",
    categoria: "familiares",
    precio: 399,
    stock: 20,
    edadMinima: 6,
    jugadoresMin: 1,
    jugadoresMax: 8,
    duracionMinutos: 20,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXLyp1_oQPlHP_q6muoFaheO249fbOs7rjPeAJaBY9g&s=10",
    descripcion:
      "Retira los bloques uno por uno y colócalos en la parte superior sin derribar la torre.",
  },
  {
    id: 3,
    nombre: "Dominó de Madera",
    categoria: "clasicos",
    precio: 249,
    stock: 18,
    edadMinima: 6,
    jugadoresMin: 2,
    jugadoresMax: 4,
    duracionMinutos: 30,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://casaldisenos.fic-cortelaser.mx/wp-content/uploads/2024/08/photo_2024-09-11_09-07-15.jpg",
    descripcion: "Tradicional juego de dominó con fichas de madera.",
  },
  {
    id: 4,
    nombre: "Código Secreto",
    categoria: "estrategia",
    precio: 549,
    stock: 12,
    edadMinima: 10,
    jugadoresMin: 4,
    jugadoresMax: 8,
    duracionMinutos: 20,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://m.media-amazon.com/images/I/71cdMOURE9L._AC_UL480_FMwebp_QL65_.jpg",
    descripcion:
      "Juego de pistas y deducción en el que los equipos intentan encontrar a sus agentes.",
  },
  {
    id: 5,
    nombre: "Taco Gato Cabra Queso Pizza",
    categoria: "party",
    precio: 299,
    stock: 25,
    edadMinima: 8,
    jugadoresMin: 2,
    jugadoresMax: 8,
    duracionMinutos: 15,
    disponibilidad: "DISPONIBLE",
    imagen: "https://m.media-amazon.com/images/I/51e38iVY9eL._AC_SL1000_.jpg",
    descripcion:
      "Juego rápido de cartas, reflejos y diversión para jugar con familia o amigos.",
  },
  {
    id: 6,
    nombre: "Lotería Mexicana Tradicional",
    categoria: "familiares",
    precio: 199,
    stock: 30,
    edadMinima: 5,
    jugadoresMin: 2,
    jugadoresMax: 10,
    duracionMinutos: 30,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://tse1.mm.bing.net/th/id/OIP.9peEiaw3KGcASIHDUh9HVwHaJE?pid=Api",
    descripcion:
      "Tradicional juego mexicano con cartas ilustradas para disfrutar en familia.",
  },
  {
    id: 7,
    nombre: "Virus! 2",
    categoria: "familiares",
    precio: 279,
    stock: 14,
    edadMinima: 8,
    jugadoresMin: 2,
    jugadoresMax: 6,
    duracionMinutos: 20,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://tse4.mm.bing.net/th/id/OIP.syKlNXmVbJiFPvxtEFe-bAHaHa?pid=Api",
    descripcion:
      "Juego de cartas en el que nuevos virus y medicamentos complican cada partida.",
  },
  {
    id: 8,
    nombre: "Monos Locos",
    categoria: "infantiles",
    precio: 449,
    stock: 10,
    edadMinima: 5,
    jugadoresMin: 2,
    jugadoresMax: 4,
    duracionMinutos: 20,
    disponibilidad: "DISPONIBLE",
    imagen: "https://m.media-amazon.com/images/I/81XVk+u89CL._AC_SL1500_.jpg",
    descripcion:
      "Juego infantil de habilidad donde debes evitar que los monos caigan.",
  },
  {
    id: 9,
    nombre: "Mona Lisa - Rompecabezas 500 piezas",
    categoria: "rompecabezas",
    precio: 349,
    stock: 8,
    edadMinima: 8,
    jugadoresMin: null,
    jugadoresMax: null,
    duracionMinutos: null,
    disponibilidad: "DISPONIBLE",
    imagen:
      "https://images.unsplash.com/photo-1611891487122-207579d67d98?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Rompecabezas de 500 piezas inspirado en la famosa obra Mona Lisa.",
  },
  {
    id: 10,
    nombre: "Galaxias: Edición Especial",
    categoria: "tematicos",
    precio: 699,
    stock: 10,
    edadMinima: 12,
    jugadoresMin: 2,
    jugadoresMax: 5,
    duracionMinutos: 60,
    disponibilidad: "PREVENTA",
    imagen:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Edición especial de temática espacial disponible en preventa.",
  },
];

const listaProductos = document.getElementById("lista-productos");
const totalProductos = document.getElementById("total-productos");

function textoJugadores(producto) {
  if (producto.jugadoresMin == null || producto.jugadoresMax == null) {
    return "No aplica";
  }

  if (producto.jugadoresMin === producto.jugadoresMax) {
    return `${producto.jugadoresMin} jugadores`;
  }

  return `${producto.jugadoresMin}-${producto.jugadoresMax} jugadores`;
}

function textoDuracion(producto) {
  if (producto.duracionMinutos == null) {
    return "Variable";
  }

  return `${producto.duracionMinutos} min`;
}

function cargarCatalogo(lista = productos) {
  if (!listaProductos) {
    return;
  }

  listaProductos.innerHTML = "";

  lista.forEach((producto) => {
    const tarjeta = document.createElement("article");

    tarjeta.className = "product-card";
    tarjeta.dataset.productoId = producto.id;
    tarjeta.dataset.nombre = producto.nombre;
    tarjeta.dataset.precio = producto.precio;
    tarjeta.dataset.imagen = producto.imagen;

    tarjeta.innerHTML = `
      <img
        src="${producto.imagen}"
        alt="${producto.nombre}"
        loading="lazy"
      >

      <div class="product-card-body">
        <span class="eyebrow">${producto.categoria}</span>

        <h3>${producto.nombre}</h3>

        <p class="subtle">
          Edad: ${producto.edadMinima}+ |
          ${textoJugadores(producto)} |
          ${textoDuracion(producto)}
        </p>

        <strong>$${producto.precio.toFixed(2)} MXN</strong>

        <p class="subtle">
          Stock: ${producto.stock}
          ${producto.disponibilidad === "PREVENTA" ? " | PREVENTA" : ""}
        </p>

        <div class="product-actions">
          <a
            class="btn btn-outline"
            href="detalle.html?id=${producto.id}"
          >
            Ver detalle
          </a>

          <button
            type="button"
            class="btn"
            data-agregar-carrito
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    `;

    listaProductos.appendChild(tarjeta);
  });

  if (totalProductos) {
    totalProductos.textContent = `${lista.length} producto${lista.length === 1 ? "" : "s"}`;
  }
}

function aplicarFiltros() {
  if (typeof obtenerFiltrosSeleccionados !== "function") {
    cargarCatalogo(productos);
    return;
  }

  const filtros = obtenerFiltrosSeleccionados();
  const productosFiltrados = filtrarProductos(productos, filtros);

  cargarCatalogo(productosFiltrados);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCatalogo(productos);

  const controlesFiltro = document.querySelectorAll(
    'input[name="edadrecomendada"], ' +
      'input[name="nmerodejugadores"], ' +
      'input[name="duracin"], ' +
      'input[name="categora"]',
  );

  controlesFiltro.forEach((control) => {
    control.addEventListener("change", aplicarFiltros);
  });

  const botonLimpiar = document.querySelector(".filters .btn-outline");

  if (botonLimpiar) {
    botonLimpiar.addEventListener("click", () => {
      controlesFiltro.forEach((control) => {
        control.checked = false;
      });

      cargarCatalogo(productos);
    });
  }
});

function cargarDetalleProducto() {
  const nombreElemento = document.getElementById("nombre-producto");

  // Si este elemento no existe, estamos en el catálogo y no en detalle.html.
  if (!nombreElemento) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  const idProducto = Number(parametros.get("id"));

  const producto = productos.find((p) => p.id === idProducto);

  if (!producto) {
    nombreElemento.textContent = "Producto no encontrado";
    document.getElementById("descripcion-corta").textContent =
      "No se encontró el producto solicitado.";
    return;
  }

  document.title = `${producto.nombre} | Luddo Store`;

  document.getElementById("categoria-producto").textContent =
    producto.categoria;

  nombreElemento.textContent = producto.nombre;

  document.getElementById("descripcion-corta").textContent =
    producto.descripcion;

  document.getElementById("precio-producto").textContent =
    `$${producto.precio.toFixed(2)} MXN`;

  document.getElementById("edad-producto").textContent =
    `${producto.edadMinima}+ años`;

  document.getElementById("jugadores-producto").textContent =
    textoJugadores(producto);

  document.getElementById("duracion-producto").textContent =
    textoDuracion(producto);

  document.getElementById("dificultad-producto").textContent =
    "No especificada";

  document.getElementById("stock-producto").textContent =
    producto.disponibilidad === "PREVENTA"
      ? `Preventa · Stock: ${producto.stock}`
      : `Disponible · Stock: ${producto.stock}`;

  document.getElementById("descripcion-producto").textContent =
    producto.descripcion;

  const contenedorImagen = document.getElementById("imagen-producto");
  contenedorImagen.innerHTML = `
    <img
      class="demo-img"
      src="${producto.imagen}"
      alt="${producto.nombre}"
    >
  `;

  const galeria = document.getElementById("galeria");
  if (galeria) {
    galeria.style.display = "none";
  }

  const botonCarrito = document.querySelector("[data-agregar-carrito]");

  if (botonCarrito) {
    const contenedorProducto = botonCarrito.closest(".panel");

    contenedorProducto.dataset.productoId = producto.id;
    contenedorProducto.dataset.nombre = producto.nombre;
    contenedorProducto.dataset.precio = producto.precio;
    contenedorProducto.dataset.imagen = producto.imagen;
  }

  const espacioVacio = document.querySelector('[data-template="empty"]');

  if (espacioVacio) {
    espacioVacio.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", cargarDetalleProducto);
