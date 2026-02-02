// ============================================
// GEEKSHOP - JavaScript Simple y Básico
// ============================================

// CARGAR MODO OSCURO AL INICIAR
document.addEventListener('DOMContentLoaded', () => {
  // Primero: Aplicar modo oscuro si estaba guardado
  const modoGuardado = localStorage.getItem('modoOscuro');
  if (modoGuardado === 'true') {
    document.body.classList.add('modo-oscuro');
  }
  
  // 1) BOTÓN MODO OSCURO
  const botonOscuro = document.querySelector('.boton-oscuro');
  if (botonOscuro) {
    botonOscuro.addEventListener('click', () => {
      document.body.classList.toggle('modo-oscuro');
      // Guardar la elección del usuario
      const estaModoOscuro = document.body.classList.contains('modo-oscuro');
      localStorage.setItem('modoOscuro', estaModoOscuro);
    });
  }
  
  // 2) BOTÓN SUBIR ARRIBA
  const botonSubir = document.createElement('button');
  botonSubir.id = 'scrollTopBtn';
  botonSubir.textContent = '↑';
  botonSubir.title = 'Subir arriba';
  document.body.appendChild(botonSubir);
  
  // Mostrar el botón solo cuando has bajado más de 300px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      botonSubir.style.display = 'block';
    } else {
      botonSubir.style.display = 'none';
    }
  });
  
  // Al clickar el botón, sube suavemente al principio
  botonSubir.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Desplazamiento suave
    });
  });
});