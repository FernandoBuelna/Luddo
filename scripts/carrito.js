const CLAVE_CARRITO = "luddo_carrito";

// Obtener carrito desde LocalStorage
function obtenerCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO) || "[]");

    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    return [];
  }
}

// Guardar carrito en LocalStorage
function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));

  // Actualizar la página si muestra el carrito
  mostrarCarrito();
}

// Agregar productos al carrito

function agregarProducto(producto) {
  if (
    !producto ||
    producto.id === undefined ||
    producto.id === null ||
    String(producto.id).trim() === "" ||
    !String(producto.nombre || "").trim() ||
    producto.precio === "" ||
    producto.precio === null ||
    !Number.isFinite(Number(producto.precio)) ||
    Number(producto.precio) < 0
  ) {
    return false;
  }

  const cantidad = Number(producto.cantidad ?? 1);

  if (!Number.isSafeInteger(cantidad) || cantidad < 1) {
    return false;
  }

  const carrito = obtenerCarrito();

  const existente = carrito.find(
    (item) => String(item.id) === String(producto.id),
  );

  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      imagen: producto.imagen || "",
      cantidad: cantidad,
    });
  }

  guardarCarrito(carrito);
  return true;
}

// Modificar cantidad
function modificarCantidad(id, cantidad) {
  if (!Number.isInteger(cantidad) || cantidad < 1) {
    return;
  }

  const carrito = obtenerCarrito();

  const producto = carrito.find((item) => String(item.id) === String(id));

  if (producto) {
    producto.cantidad = cantidad;
    guardarCarrito(carrito);
  }
}

// Eliminar producto
function eliminarProducto(id) {
  const carrito = obtenerCarrito().filter(
    (item) => String(item.id) !== String(id),
  );

  guardarCarrito(carrito);
}

// Calcular subtotal
function calcularSubtotal() {
  return obtenerCarrito().reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0,
  );
}

// Calcular total (sin envío ni descuentos)
function calcularTotal() {
  return calcularSubtotal();
}

/* MOSTRAR PRODUCTOS DEL CARRITO */

function mostrarCarrito() {
  const contenedor = document.getElementById("items-carrito");

  if (!contenedor) return;

  const carrito = obtenerCarrito();

  // Limpiar el contenido anterior
  contenedor.innerHTML = "";

  // Mostrar mensaje si no hay productos
  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="empty-space">
        <div>
          <strong>Tu carrito está vacío</strong>
          <p>Agrega productos desde el catálogo.</p>
        </div>
      </div>
    `;
  }

  // Mostrar cada producto agregado
  carrito.forEach((producto) => {
    const fila = document.createElement("div");
    fila.className = "cart-producto";

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${formatoMoneda(producto.precio)}`;

    const cantidad = document.createElement("input");
    cantidad.type = "number";
    cantidad.min = "1";
    cantidad.step = "1";
    cantidad.value = producto.cantidad;
    cantidad.className = "field";

    // Modificar cantidad
    cantidad.addEventListener("change", () => {
      const nuevaCantidad = Number(cantidad.value);

      if (!Number.isInteger(nuevaCantidad) || nuevaCantidad < 1) {
        cantidad.value = producto.cantidad;
        return;
      }

      modificarCantidad(producto.id, nuevaCantidad);
      mostrarCarrito();
    });

    const subtotal = document.createElement("strong");
    subtotal.textContent = formatoMoneda(producto.precio * producto.cantidad);

    // Botón para eliminar producto
    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "btn btn-ghost";
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
      mostrarCarrito();
    });

    fila.append(nombre, precio, cantidad, subtotal, botonEliminar);

    contenedor.appendChild(fila);
  });

  actualizarTotales();
  const botonCheckout = document.getElementById("ir-checkout");

  if (botonCheckout) {
    const vacio = carrito.length === 0;

    botonCheckout.setAttribute("aria-disabled", String(vacio));
    botonCheckout.tabIndex = vacio ? -1 : 0;
    botonCheckout.style.pointerEvents = vacio ? "none" : "auto";
    botonCheckout.style.opacity = vacio ? "0.5" : "1";
  }
}

// Formato de dinero en pesos mexicanos
function formatoMoneda(cantidad) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(cantidad);
}

// Actualizar el resumen de compra
function actualizarTotales() {
  const subtotal = document.getElementById("subtotal");
  const total = document.getElementById("total");

  if (subtotal) {
    subtotal.textContent = formatoMoneda(calcularSubtotal());
  }

  if (total) {
    total.textContent = formatoMoneda(calcularTotal());
  }
}

// Cargar carrito al abrir la página
document.addEventListener("DOMContentLoaded", mostrarCarrito);

// Actualizar si se modifica en otra pestaña
window.addEventListener("storage", mostrarCarrito);

/* AGREGAR PRODUCTOS DESDE EL CATÁLOGO */

document.addEventListener("click", function (evento) {
  // Detectar el botón de agregar al carrito
  const boton = evento.target.closest("[data-agregar-carrito]");

  if (!boton) return;

  // Buscar la tarjeta del producto
  const tarjeta = boton.closest("[data-producto-id]");

  if (!tarjeta) return;

  // Recuperar los datos reales del producto
  const producto = {
    id: tarjeta.dataset.productoId,
    nombre: tarjeta.dataset.nombre,
    precio: tarjeta.dataset.precio,
    imagen: tarjeta.dataset.imagen || "",
    cantidad: 1,
  };

  // Guardar el producto en LocalStorage
  const agregado = agregarProducto(producto);

  if (agregado) {
    alert("Producto agregado al carrito");
  } else {
    alert("No se pudo agregar el producto");
  }
});
