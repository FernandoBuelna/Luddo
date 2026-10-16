function filtrarProductos(productos, filtros) {
  return productos.filter((producto) => {
    const cumpleEdad = filtrarEdad(producto, filtros.edades);
    const cumpleJugadores = filtrarJugadores(producto, filtros.jugadores);
    const cumpleDuracion = filtrarDuracion(producto, filtros.duraciones);
    const cumpleCategoria = filtrarCategoria(producto, filtros.categorias);

    return cumpleEdad && cumpleJugadores && cumpleDuracion && cumpleCategoria;
  });
}

function filtrarEdad(producto, edades) {
  if (edades.length === 0) {
    return true;
  }

  return edades.some((rango) => {
    switch (rango) {
      case "3 a 5 años":
        return producto.edadMinima <= 5;

      case "6 a 8 años":
        return producto.edadMinima <= 8;

      case "9 a 12 años":
        return producto.edadMinima <= 12;

      case "13 a 17 años":
        return producto.edadMinima <= 17;

      case "18 años o más":
        return producto.edadMinima <= 18;

      default:
        return false;
    }
  });
}

function filtrarJugadores(producto, cantidades) {
  if (cantidades.length === 0) {
    return true;
  }

  if (producto.jugadoresMin == null || producto.jugadoresMax == null) {
    return false;
  }

  return cantidades.some((cantidad) => {
    switch (cantidad) {
      case "1 jugador":
        return producto.jugadoresMin <= 1 && producto.jugadoresMax >= 1;

      case "2 jugadores":
        return producto.jugadoresMin <= 2 && producto.jugadoresMax >= 2;

      case "3 a 4 jugadores":
        return producto.jugadoresMax >= 3 && producto.jugadoresMin <= 4;

      case "5 a 6 jugadores":
        return producto.jugadoresMax >= 5 && producto.jugadoresMin <= 6;

      case "7 o más jugadores":
        return producto.jugadoresMax >= 7;

      default:
        return false;
    }
  });
}

function filtrarDuracion(producto, duraciones) {
  if (duraciones.length === 0) {
    return true;
  }

  if (producto.duracionMinutos == null) {
    return false;
  }

  return duraciones.some((duracion) => {
    switch (duracion) {
      case "Menos de 15 minutos":
        return producto.duracionMinutos < 15;

      case "15 a 30 minutos":
        return producto.duracionMinutos >= 15 && producto.duracionMinutos <= 30;

      case "30 a 60 minutos":
        return producto.duracionMinutos > 30 && producto.duracionMinutos <= 60;

      case "Más de 60 minutos":
        return producto.duracionMinutos > 60;

      default:
        return false;
    }
  });
}

function filtrarCategoria(producto, categorias) {
  if (categorias.length === 0) {
    return true;
  }

  const equivalencias = {
    "Juegos de mesa": [
      "clasicos",
      "estrategia",
      "familiares",
      "infantiles",
      "party",
      "tematicos",
    ],
    Rompecabezas: ["rompecabezas"],
    Estrategia: ["estrategia"],
    Educativos: ["educativos"],
    Familiares: ["familiares"],
  };

  return categorias.some((categoria) => {
    const categoriasValidas = equivalencias[categoria] || [];
    return categoriasValidas.includes(producto.categoria);
  });
}

function obtenerFiltrosSeleccionados() {
  const edades = Array.from(
    document.querySelectorAll('input[name="edadrecomendada"]:checked'),
  ).map((input) => input.value);

  const jugadores = Array.from(
    document.querySelectorAll('input[name="nmerodejugadores"]:checked'),
  ).map((input) => input.value);

  const duraciones = Array.from(
    document.querySelectorAll('input[name="duracin"]:checked'),
  ).map((input) => input.value);

  const categorias = Array.from(
    document.querySelectorAll('input[name="categora"]:checked'),
  ).map((input) => input.value);
  
  return {
    edades,
    jugadores,
    duraciones,
    categorias,
  };
}
