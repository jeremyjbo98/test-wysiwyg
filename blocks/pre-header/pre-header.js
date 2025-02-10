// decorate.js
export default function decorate(block) {
    // Crear el contenedor del pre-header
    const preHeader = document.createElement('div');
    preHeader.className = 'pre-header';
  
    // Obtener los datos del bloque
    const location = block.querySelector(':scope > div:nth-child(1)')?.textContent.trim();
    const coupon = block.querySelector(':scope > div:nth-child(2)')?.textContent.trim();
    const trackOrder = block.querySelector(':scope > div:nth-child(3)')?.textContent.trim();
    const points = block.querySelector(':scope > div:nth-child(4)')?.textContent.trim();
    const services = block.querySelector(':scope > div:nth-child(5)')?.textContent.trim();
    const business = block.querySelector(':scope > div:nth-child(6)')?.textContent.trim();
  
    // Crear los elementos del pre-header
    const createLink = (text, href = '#') => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      return link;
    };
  
    const leftSection = document.createElement('div');
    leftSection.appendChild(createLink(location));
    leftSection.appendChild(createLink(coupon));
    leftSection.appendChild(createLink(trackOrder));
  
    const rightSection = document.createElement('div');
    rightSection.appendChild(createLink(points));
    rightSection.appendChild(createLink(services));
  
    const businessLink = createLink(business);
    businessLink.className = 'business';
    rightSection.appendChild(businessLink);
  
    // Agregar las secciones al pre-header
    preHeader.appendChild(leftSection);
    preHeader.appendChild(rightSection);
  
    // Limpiar el bloque original y agregar el pre-header
    block.textContent = '';
    block.appendChild(preHeader);
  }