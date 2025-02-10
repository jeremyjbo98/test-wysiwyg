// decorate.js
export default function decorate(block) {
    // Crear el contenedor del pre-header
    const preHeader = document.createElement('div');
    preHeader.className = 'pre-header';
  
    // Crear el contenido del pre-header (contenido quemado)
    const leftSection = document.createElement('div');
    leftSection.innerHTML = `
      <a href="#">Ubicación</a>
      <a href="#">Cupón</a>
      <a href="#">Rastrear Orden</a>
    `;
  
    const rightSection = document.createElement('div');
    rightSection.innerHTML = `
      <a href="#">Puntos</a>
      <a href="#">Servicios</a>
      <a href="#" class="business">Empresas</a>
    `;
  
    // Agregar las secciones al pre-header
    preHeader.appendChild(leftSection);
    preHeader.appendChild(rightSection);
  
    // Limpiar el bloque original y agregar el pre-header
    block.textContent = '';
    block.appendChild(preHeader);
  }