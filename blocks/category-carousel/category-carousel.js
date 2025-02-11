function showCategorySlide(block, direction) {
    const slidesWrapper = block.querySelector('.category-carousel-slides-container');
    const slidesList = block.querySelector('.category-carousel-slides');
    const slides = block.querySelectorAll('.category-carousel-slide');
    const prevButton = block.querySelector('.category-prev');
    const nextButton = block.querySelector('.category-next');

    if (!slides.length) return;

    const totalSlides = slides.length;
    const maxVisible = Math.min(4, totalSlides); // Muestra hasta 4 slides o el total disponible
    let activeIndex = parseInt(block.dataset.activeIndex, 10) || 0;

    const slideWidth = slides[0].offsetWidth + 16; // Incluyendo margen

    activeIndex += direction;

    // Lógica para evitar moverse fuera de los límites
    const maxIndex = Math.max(0, totalSlides - maxVisible);
    activeIndex = Math.min(activeIndex, maxIndex);
    activeIndex = Math.max(0, activeIndex);

    block.dataset.activeIndex = activeIndex;
    const translateX = -activeIndex * slideWidth;
    slidesList.style.transform = `translateX(${translateX}px)`;

    // Habilitar/deshabilitar botones según posición
    prevButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === maxIndex;
}

function bindCategoryEvents(block) {
    block.dataset.activeIndex = 0;

    const prevButton = block.querySelector('.category-prev');
    const nextButton = block.querySelector('.category-next');

    prevButton.addEventListener('click', () => showCategorySlide(block, -1));
    nextButton.addEventListener('click', () => showCategorySlide(block, 1));

    // Iniciar con prevButton deshabilitado
    prevButton.disabled = true;
}

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

    const slides = [...block.querySelectorAll(':scope > div')];

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

        const text = document.createElement('p');
        text.classList.add('category-carousel-text');
        text.textContent = slide.textContent.trim();

        wrapper.appendChild(text);
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
