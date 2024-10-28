// propiedades.js
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'assets/img/apartamento-lujo.png',
        descripcion: 'Este apartamento de lujo está situado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Place, Beverly Hills, CA 90210',
        habitaciones: 3,
        banos: 2,
        costo: 450000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'assets/img/apartamento-acogedor-cerro.png',
        descripcion: 'Este apartamento acogedor está situado en el sitio perfecto para los amantes del aire libre',
        ubicacion: '789 Mountain Road, Aspen, CO 81611',
        habitaciones: 2,
        banos: 1,
        costo: 280000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'assets/img/penthouse.png',
        descripcion: 'Penthouse de lujo con una terraza espectacular y vistas panorámicas',
        ubicacion: '567 Sky View, Miami, FL 33101',
        habitaciones: 4,
        banos: 3,
        costo: 980000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa moderna con jardín',
        src: 'assets/img/propiedad4.jpg',
        descripcion: 'Hermosa casa moderna con amplio jardín y acabados de lujo',
        ubicacion: '432 Garden St, Seattle, WA 98101',
        habitaciones: 5,
        banos: 4,
        costo: 875000,
        smoke: false,
        pets: true
    }
];

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'assets/img/apartamento-centro-ciudad.png',
        descripcion: 'Moderno apartamento ubicado en el corazón de la ciudad',
        ubicacion: '123 Main Street, Portland, OR 97204',
        habitaciones: 2,
        banos: 1,
        costo: 2200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'assets/img/apartamento-vistarmar.png',
        descripcion: 'Hermoso apartamento frente al mar',
        ubicacion: '456 Ocean Avenue, San Diego, CA 92101',
        habitaciones: 3,
        banos: 2,
        costo: 3500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'assets/img/condominio.png',
        descripcion: 'Elegante condominio moderno con todas las comodidades',
        ubicacion: '789 Park Avenue, Chicago, IL 60601',
        habitaciones: 2,
        banos: 2,
        costo: 2800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa amueblada con piscina',
        src: 'assets/img/casamueble-piscina.png',
        descripcion: 'Espaciosa casa con piscina y totalmente amueblada',
        ubicacion: '321 Pool St, Phoenix, AZ 85001',
        habitaciones: 4,
        banos: 3,
        costo: 4500,
        smoke: true,
        pets: true
    }
];

// script.js
function renderizarPropiedad(propiedad) {
    return `
    <div class="propiedad">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <div class="propiedad-info">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p class="ubicacion">
                <i class="fas fa-map-marker-alt"></i>
                ${propiedad.ubicacion}
            </p>
            <div class="detalles">
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                <p><i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
            </div>
            <p class="precio">$${propiedad.costo.toLocaleString()}</p>
            <div class="iconos">
                <p class="${propiedad.smoke ? 'permitido' : 'no-permitido'}">
                    <i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i>
                    ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${propiedad.pets ? 'permitido' : 'no-permitido'}">
                    <i class="fas fa-paw"></i>
                    ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
            </div>
        </div>
    </div>
    `;
}

function cargarPropiedades(tipo, limite = null) {
    const contenedor = document.querySelector(tipo === 'venta' ? '#propiedades-venta' : '#propiedades-alquiler');
    const propiedades = tipo === 'venta' ? propiedadesVenta : propiedadesAlquiler;
    const propiedadesMostrar = limite ? propiedades.slice(0, limite) : propiedades;
    
    contenedor.innerHTML = propiedadesMostrar.map(renderizarPropiedad).join('');
}

// Inicialización según la página
document.addEventListener('DOMContentLoaded', () => {
    const pagina = document.body.id;
    
    switch(pagina) {
        case 'index':
            cargarPropiedades('venta', 3);
            cargarPropiedades('alquiler', 3);
            break;
        case 'venta':
            cargarPropiedades('venta');
            break;
        case 'alquiler':
            cargarPropiedades('alquiler');
            break;
    }
});