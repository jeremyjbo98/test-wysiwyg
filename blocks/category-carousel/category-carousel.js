export default function decorate(block) {
    block.classList.add('category-carousel');
    block.dataset.activeIndex = 0;

    // Crear título
    const title = document.createElement('h2');
    title.classList.add('category-carousel-title');
    title.textContent = "Compra por categoría";
    block.prepend(title);

    // Contenedor del carrusel
    const slidesWrapper = document.createElement('div');
    slidesWrapper.classList.add('category-carousel-slides-container');

    const slidesList = document.createElement('ul');
    slidesList.classList.add('category-carousel-slides');

    // Obtener los divs, pero filtrar los vacíos
    const slides = [...block.querySelectorAll(':scope > div')].filter(slide => {
        const hasImage = slide.querySelector('img') !== null;
        const hasText = slide.textContent.trim().length > 0;
        return hasImage || hasText; // Solo mantener los que tienen imagen o texto
    });

    slides.forEach(slide => {
        slide.classList.add('category-carousel-slide');

        // Contenedor de imagen y texto
        const wrapper = document.createElement('div');
        wrapper.classList.add('category-carousel-item');

        const img = slide.querySelector('img');
        if (img) {
            img.classList.add('category-carousel-image');
            wrapper.appendChild(img);
        }

        const text = slide.textContent.trim();
        if (text.length > 0) {
            const textElement = document.createElement('p');
            textElement.classList.add('category-carousel-text');
            textElement.textContent = text;
            wrapper.appendChild(textElement);
        }

        slide.innerHTML = '';
        slide.appendChild(wrapper);
        slidesList.append(slide);
    });

    slidesWrapper.append(slidesList);
    block.append(slidesWrapper);

    // Botones de navegación
    const navigation = document.createElement('div');
    navigation.classList.add('category-carousel-navigation-buttons');
    navigation.innerHTML = `
      <button type="button" class="category-prev">←</button>
      <button type="button" class="category-next">→</button>
    `;
    block.append(navigation);

    setTimeout(() => {
        if (slides.length > 0) {
            const slideWidth = slides[0].offsetWidth;
            slidesList.style.width = `${slideWidth * slides.length}px`;
            slidesWrapper.style.width = `${slideWidth * Math.min(4, slides.length)}px`; // Máximo 4 visibles
        }
    }, 100);

    bindCategoryEvents(block);
}
