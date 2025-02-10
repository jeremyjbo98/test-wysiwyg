  export default function decorate(block) {
    // Obtener el texto del modelo
    const text = block.querySelector(':scope > div')?.textContent.trim();
  
    // Crear el contenedor del banner-text
    const bannerText = document.createElement('div');
    bannerText.className = 'banner-text';
  
    // Crear el contenido del banner
    const content = document.createElement('p');
    content.textContent = text || 'Bienvenido al renovado cochezycia.com | ¡Innovamos para ti!';
    content.className = 'banner-text-content';
  
    // Agregar el contenido al contenedor
    bannerText.appendChild(content);
  
    // Limpiar el bloque original y agregar el banner-text
    block.textContent = '';
    block.appendChild(bannerText);
  }