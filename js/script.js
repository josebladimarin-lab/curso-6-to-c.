// --- 1. LÓGICA ORIGINAL DE VALIDACIÓN ---
function validar() {
    const nombreEscrito = document.getElementById('nombreUsuario').value;
    const ciEscrito = document.getElementById('ciUsuario').value;

    const compañeros = [
        { nombre: "Maritza", ci: "14359233"},
        { nombre: "Samira", ci: "15936748"},
        { nombre: "Marylyn", ci: "13790499"},
        { nombre: "Ibeth", ci: "13971922"},
        { nombre: "Nicole", ci: "9959426"},
        { nombre: "Joseph", ci: "14183375"},
        { nombre: "Adriana", ci: "13409481"},
        { nombre: "Nayeli", ci: "13606559"},
        { nombre: "Juana", ci: "13846167"},
        { nombre: "Eva", ci: "13849527"},
        { nombre: "Adonay", ci: "13649266"},
        { nombre: "Aylin", ci: "12895254"},
        { nombre: "Ivan", ci: "13409247"},
        { nombre: "Evens", ci: "14243722"},
        { nombre: "Jhoselin", ci: "14182702"},
        { nombre: "Gustavo", ci: "13640667"},
        { nombre: "Alexander", ci: "13494713"},
        { nombre: "Jose", ci: "13959753"},
        { nombre: "Helen", ci: "9941551"},
        { nombre: "Ruth", ci: "12955896"},
        { nombre: "Hector", ci: "13608665"},
        { nombre: "Jahuira", ci: "14486448"},
        { nombre: "Daniela", ci: "15747513"},
        { nombre: "Franco", ci: "9951641"},
        { nombre: "Jhon", ci: "13643827"},
        { nombre: "Lineth", ci: "12957049"},
        { nombre: "Froilan", ci: "14228544"},
        { nombre: "Daniel", ci: "brasil"},
    ];
    
    const compañeroEncontrado = compañeros.find(compañero => compañero.nombre === nombreEscrito && compañero.ci === ciEscrito);
    
    if (compañeroEncontrado) {
        alert("Bienvenido al curso, " + compañeroEncontrado.nombre + "!");
        window.location.href = "bienvenido.html";
    } else {
        alert("lo siento, no eres del curso XD");
    }
}

// Asegurarse de que el DOM esté cargado antes de ejecutar los scripts de la página de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2. SCRIPT PARA EL EFECTO DE DESVANECIMIENTO AL DESLIZAR (FADE IN) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Si quieres que desaparezcan al volver a subir, quita el comentario de la línea de abajo
                // entry.target.classList.remove('visible'); 
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-element').forEach((el) => observer.observe(el));

    // --- 3. LÓGICA DEL MENÚ HAMBURGUESA Y SCROLL (ESTILO SNAPTUBE) ---
    const areaScroll = document.getElementById('area-scroll');
    const cuadroContacto = document.getElementById('cuadro-contacto');
    const btnHamburguesa = document.getElementById('btn-hamburguesa');
    const menuLateral = document.getElementById('menu-lateral');
    const overlayMobile = document.getElementById('overlay-mobile');

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        menuLateral.classList.toggle('activo');
        overlayMobile.classList.toggle('activo');
    }

    // Evento al clickear el botón de hamburguesa
    if (btnHamburguesa && menuLateral) {
        btnHamburguesa.addEventListener('click', toggleMenu);
    }

    // Cerrar el menú si se toca la parte oscura (overlay) en móviles
    if (overlayMobile) {
        overlayMobile.addEventListener('click', toggleMenu);
    }

    // Lógica para desvanecer el cuadro de contacto al hacer scroll en el área principal
    if (areaScroll && cuadroContacto) {
        areaScroll.addEventListener('scroll', () => {
            if (areaScroll.scrollTop > 50) {
                cuadroContacto.classList.add('desvanecido');
            } else {
                cuadroContacto.classList.remove('desvanecido');
            }
        });
    }
});