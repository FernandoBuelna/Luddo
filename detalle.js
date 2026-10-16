//PR0DUTOS ACTUALES
const productos = [
    // CLASICOS
    {
        id: 1,
        nombre: "Ajedrez de Madera",
        categoria: "clasicos",
        precio: 350.00,
        imagen: "https://i.pinimgc.com/originals/95/df/89/95df89d280b9fc2fecc61c4222884d71.jpg",
        descripcion: "Elegante juego de ajedrez con tablero y piezas talladas en madera barnizada.",
        jugadores: "2 jug.",
        duracion: "30-60 min",
        edad: "+6 años"
    },
    {
        id: 2,
        nombre: "Jenga",
        categoria: "clasicos",
        precio: 280.00,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXLyp1_oQPlHP_q6muoFaheO249fbOs7rjPeAJaBY9g&s=10",
        descripcion: "Mantén el pulso firme. Retira bloques de madera uno a uno sin derribar la torre.",
        jugadores: "1+ jug.",
        duracion: "15 min",
        edad: "+6 años"
    },
    {
        id: 3,
        nombre: "Dominó de Madera",
        categoria: "clasicos",
        precio: 200.00,
        imagen: "https://casaldisenos.fic-cortelaser.mx/wp-content/uploads/2024/08/photo_2024-09-11_09-07-15.jpg",
        descripcion: "Juego tradicional de dominó con fichas de madera en estuche de colección.",
        jugadores: "2-4 jug.",
        duracion: "30 min",
        edad: "+6 años"
    },

    // ESTRATEGIA
    {
        id: 4,
        nombre: "Código Secreto",
        categoria: "estrategia",
        precio: 420.00,
        imagen: "https://m.media-amazon.com/images/I/61s+XrXKl1L._AC_SL1200_.jphttps://m.media-amazon.com/images/I/71cdMOURE9L._AC_UL480_FMwebp_QL65_.jpg",
        descripcion: "Juego de pistas y deducción donde dos jefes de espías conocen la identidad de cada agente.",
        jugadores: "2-8 jug.",
        duracion: "15 min",
        edad: "+14 años"
    },
    {
        id: 5,
        nombre: "Leonardo Da Vinci Rompecabezas",
        categoria: "estrategia",
        precio: 380.00,
        imagen: "https://tse4.mm.bing.net/th/id/OIP.LzRa2nkYaz2wqPpj7LemcwHaF7?r=0&pid=Api&h=220&P=0",
        descripcion: "Desafío mental inspirado en los inventos y bocetos de Leonardo Da Vinci.",
        jugadores: "1 jug.",
        duracion: "45 min",
        edad: "+12 años"
    },
    {
        id: 6,
        nombre: "Taco,Gato,Cabra,Queso",
        categoria: "estrategia",
        precio: 400.00,
        imagen: "https://m.media-amazon.com/images/I/51e38iVY9eL._AC_SL1000_.jpg",
        descripcion: "juego de cartas donde podrán jugar de 3 a 8 jugadores, es perfecto para jugar en familia o con amigos y pasa un buen rato de risas y diversión en compañia.",
        jugadores: "3-8 jug.",
        duracion: "45 min",
        edad: "+10 años"
    },

   // INFANTILES
    {
        id: 7,
        nombre: "Pulgas Locas",
        categoria: "infantiles",
        precio: 310.00,
        imagen: "https://m.media-amazon.com/images/I/61s+XrXKl1L._AC_SL1200_.jpg",
        descripcion: "Atrapa con tu pinza a todas las pulgas que brincan en la cama antes que los demás.",
        jugadores: "2-4 jug.",
        duracion: "15 min",
        edad: "+4 años"
    },
    {
        id: 8,
        nombre: "Serpientes y Escaleras",
        categoria: "infantiles",
        precio: 180.00,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gB41cI0DbMsViY0MMHF-n93rJWDuLGHTMkSfMyQBbw&s=10",
        descripcion: "Lanza el dado, sube por las escaleras y evita caer por la boca de las serpientes.",
        jugadores: "2-4 jug.",
        duracion: "20 min",
        edad: "+3 años"
    },
    {
        id: 9,
        nombre: "Monos Locos",
        categoria: "infantiles",
        precio: 460.00,
        imagen: "https://m.media-amazon.com/images/I/81XVk+u89CL._AC_SL1500_.jpg",
        descripcion: "El set incluye figuras de animalitos adorables: monos dorados, lémures y perezosos. ¡Cada uno aporta un toque especial al juego y hace que cada partida sea visualmente divertida y llena de personalidad!",
        jugadores: "5 jug.",
        duracion: "45 min",
        edad: "+2 años"
    },
        
    // FAMILIARES
    {
        id: 10,
        nombre: "Lotería Mexicana",
        categoria: "familiares",
        precio: 150.00,
        imagen: "https://tse1.mm.bing.net/th/id/OIP.9peEiaw3KGcASIHDUh9HVwHaJE?r=0&pid=Api&h=220&P=0",
        descripcion: "Tradicional juego de mesa mexicano con cartas ilustradas y fichas.",
        jugadores: "2-10 jug.",
        duracion: "20 min",
        edad: "+4 años"
    },
    {
        id: 11,
        nombre: "Toma Todo",
        categoria: "familiares",
        precio: 90.00,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt9CWxzVUGxT-frcLcDWz4BB5bhsugnpIJ2iCPvBwug&s=10",
        descripcion: "Juego de pirinola tradicional para convivir y divertirse en familia.",
        jugadores: "2-6 jug.",
        duracion: "15 min",
        edad: "+5 años"
    },
    {
        id:12,
        nombre: "Virus! 2",
        categoria: "familiares",
        precio: 290.00,
        imagen: "https://tse4.mm.bing.net/th/id/OIP.syKlNXmVbJiFPvxtEFe-bAHaHa?r=0&pid=Api&h=220&P=0",
        descripcion: "Expansión del contagioso juego de cartas. Enfrenta nuevos virus evolucionados y medicamentos.",
        jugadores: "2-6 jug.",
        duracion: "20 min",
        edad: "+8 años"
    },

    // DE FIESTA
    {
        id: 13,
        nombre: "Hitster",
        categoria: "fiesta",
        precio: 490.00,
        imagen: "https://tse4.mm.bing.net/th/id/OIP.q_AWcvNAIzBvlljAqDbTXQHaKy?r=0&pid=Api&h=220&P=0",
        descripcion: "El juego de cartas musical definitivo. Escucha más de 100 años de éxitos y ordénalos en tu línea de tiempo.",
        jugadores: "2-10 jug.",
        duracion: "30 min",
        edad: "+16 años"
    },
    {
        id: 14,
        nombre: "Mariachi Loco",
        categoria: "fiesta",
        precio: 320.00,
        imagen: "https://m.media-amazon.com/images/I/613+PRxVAzL._AC_SL1080_.jpg",
        descripcion: "Juego rápido de cartas y dinamismo para ambientar cualquier reunión entre amigos.",
        jugadores: "3-8 jug.",
        duracion: "20 min",
        edad: "+12 años"
    },
    {
        id: 15,
        nombre: "Metrópoli",
        categoria: "fiesta",
        precio: 400.00,
        imagen: "https://m.media-amazon.com/images/I/61YUfCT0ffL._AC_SL1500_.jpg",
        descripcion: "Negocia, compra propiedades y compite con tus amigos en un ambiente de fiesta.",
        jugadores: "2-6 jug.",
        duracion: "45 min",
        edad: "+10 años"
    }
];

// Referencias DOM
const catalogoContainer = document.getElementById('catalogo');
const modal = document.getElementById('modal-detalle');
const detalleContainer = document.getElementById('detalle-producto');
const btnCerrarModal = document.getElementById('cerrar-modal');
const botonesFiltro = document.querySelectorAll('.btn-filtro');

// Render tarjeta
function cargarCatalogo(listaProductos) {
    catalogoContainer.innerHTML = '';

    listaProductos.forEach(prod => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <div class="card-info">
                <span class="card-categoria">${prod.categoria}</span>
                <h3 class="card-title">${prod.nombre}</h3>
                <p class="card-price">$${prod.precio.toFixed(2)}</p>
                <button class="btn-detalle" onclick="mostrarDetalle(${prod.id})">Ver detalle</button>
            </div>
        `;

        catalogoContainer.appendChild(card);
    });
}

// Filtro productos
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Cambiar estado activo en botones
        botonesFiltro.forEach(btn => btn.classList.remove('activo'));
        e.target.classList.add('activo');

        const cat = e.target.dataset.categoria;
        
        if (cat === 'todos') {
            cargarCatalogo(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === cat);
            cargarCatalogo(filtrados);
        }
    });
});

// Mostrar detalle en modal
function mostrarDetalle(idProducto) {
    const prod = productos.find(p => p.id === idProducto);
    if (!prod) return;

    detalleContainer.innerHTML = `
        <div class="detalle-info">
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <span class="card-categoria">${prod.categoria}</span>
            <h2>${prod.nombre}</h2>
            <p class="card-price">$${prod.precio.toFixed(2)}</p>
            <p style="margin: 0.8rem 0;">${prod.descripcion}</p>
            <div>
                <span class="badge">👥 ${prod.jugadores}</span>
                <span class="badge">⏱️ ${prod.duracion}</span>
                <span class="badge">🎂 ${prod.edad}</span>
            </div>
        </div>
    `;

    modal.classList.remove('oculto');
}


btnCerrarModal.addEventListener('click', () => modal.classList.add('oculto'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('oculto');
});

// Cargar catálogo
document.addEventListener('DOMContentLoaded', () => cargarCatalogo(productos));
