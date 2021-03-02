document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
})

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    enlaces.forEach( function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(e.target.attributes.href.value);
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        })
    })
}

function navegacionFija() {

    const barra = document.querySelector('.header');
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        }
        else {
            barra.classList.add('fijo');
        }
    });

    observer.observe(document.querySelector('.resumen'));
}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for ( let i = 1; i <= 12; i++ ) {
        // Crear imagen
        const imagen = document.createElement('IMG');
        imagen.src = `build/imagenes/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        // Evento
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        

        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/imagenes/grande/${id}.webp`;


    // Overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    console.log(e.target.dataset.imagenId);
    
    // Cuando se da click al overlay cerrar imagen
    overlay.onclick = function() {
        overlay.remove()
    }

    // Boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    // Cerrar imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    } 

    // Body 
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}