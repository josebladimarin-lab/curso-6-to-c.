const modal      = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');

function openModal(src) {
    modalVideo.src = src;
    modal.classList.add('open');
    modalVideo.load(); // Fuerza al navegador a cargar el nuevo archivo de video
    
    // Reproducimos el video y manejamos cualquier error
    modalVideo.play().catch(error => {
        console.log("La reproducción automática fue bloqueada o el archivo no existe:", error);
    });
}

function closeModal() {
    modal.classList.remove('open');
    modalVideo.pause();
    modalVideo.src = '';
}

// cerrar al tocar el fondo oscuro (fuera del video)
function handleModalClick(e) {
    if (e.target === modal) closeModal();
}

// cerrar con ESC
document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeModal(); 
});

// hover preview – reproduce un segundo al pasar el mouse
document.querySelectorAll('.card').forEach(card => {
    const vid = card.querySelector('video');
    if (!vid) return;
    
    card.addEventListener('mouseenter', () => { 
        vid.currentTime = 0; 
        vid.play().catch(() => {}); // Evita errores en consola si el navegador bloquea el autoplay rápido
    });
    
    card.addEventListener('mouseleave', () => { 
        vid.pause(); 
        vid.currentTime = 0; 
    });
});