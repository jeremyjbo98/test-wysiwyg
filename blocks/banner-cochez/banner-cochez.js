import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Obtener el texto y la imagen del bloque
  const text = block.querySelector(':scope > div:nth-child(2)')?.textContent.trim();
  const imageDiv = block.querySelector(':scope > div:nth-child(1)');

  // Crear el contenedor del banner-cochez
  const bannerText = document.createElement('div');
  bannerText.className = 'banner-cochez';

  // Procesar la imagen si existe
  if (imageDiv) {
    const image = imageDiv.querySelector('img');
    if (image) {
      const optimizedPic = createOptimizedPicture(image.src, image.alt, false, [{ width: '750' }]);
      imageDiv.className = 'banner-image';
      imageDiv.innerHTML = ''; // Limpiar el contenido existente
      imageDiv.appendChild(optimizedPic);
      bannerText.appendChild(imageDiv);
    }
  }

  // Crear el contenido del banner
  const content = document.createElement('p');
  content.textContent = text || 'Bienvenido al renovado cochezycia.com | ¡Innovamos para ti!';
  content.className = 'banner-cochez-content';

  // Agregar el contenido al contenedor
  bannerText.appendChild(content);

  // Limpiar el bloque original y agregar el banner-text
  block.textContent = '';
  block.appendChild(bannerText);
}