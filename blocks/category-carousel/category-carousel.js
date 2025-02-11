function showCategorySlide(block, direction) {
    const slidesWrapper = block.querySelector('.category-carousel-slides-container');
    const slidesList = block.querySelector('.category-carousel-slides');
    const slides = block.querySelectorAll('.category-carousel-slide');
    const totalSlides = slides.length;
    const maxVisible = 10; // Número de elementos visibles
    let activeIndex = parseInt(block.dataset.activeIndex, 10) || 0;

    const slideWidth = slides[0].offsetWidth + 16; // Incluyendo márgenes

    activeIndex += direction;

    // Evita que el carrusel avance más allá del último elemento completamente visible
    const maxIndex = Math.max(0, totalSlides - maxVisible);
    activeIndex = Math.min(activeIndex, maxIndex);
    activeIndex = Math.max(0, activeIndex);

    block.dataset.activeIndex = activeIndex;
    const translateX = -activeIndex * slideWidth;
    slidesList.style.transform = `translateX(${translateX}px)`;
}

function bindCategoryEvents(block) {
    block.dataset.activeIndex = 0;

    block.querySelector('.category-prev').addEventListener('click', () => showCategorySlide(block, -1));
    block.querySelector('.category-next').addEventListener('click', () => showCategorySlide(block, 1));
}

export default function decorate(block) {
    block.classList.add('category-carousel');
    block.dataset.activeIndex = 0;

    // Crear el título
    const title = document.createElement('h2');
    title.classList.add('category-carousel-title');
    title.textContent = "Compra por categoría";
    block.prepend(title);


    const slidesWrapper = document.createElement('div');
    slidesWrapper.classList.add('category-carousel-slides-container');

    const slidesList = document.createElement('ul');
    slidesList.classList.add('category-carousel-slides');

    const slides = [...block.querySelectorAll(':scope > div')];

    slides.forEach(slide => {
        slide.classList.add('category-carousel-slide');

        // Estructura para imagen y texto
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

    const navigation = document.createElement('div');
    navigation.classList.add('category-carousel-navigation-buttons');
    navigation.innerHTML = `
      <button type="button" class="category-prev">←</button>
      <button type="button" class="category-next">→</button>
    `;
    block.append(navigation);

    setTimeout(() => {
        const slideWidth = slides[0].offsetWidth;
        slidesList.style.width = `${slideWidth * slides.length}px`;
        slidesWrapper.style.width = `${slideWidth * maxVisible}px`;
    }, 100);

    bindCategoryEvents(block);
}
