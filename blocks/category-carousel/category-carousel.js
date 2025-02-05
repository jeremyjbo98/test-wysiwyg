async function fetchCategories(block) {
    try {
        const response = await fetch('/path/al/json/en/aem.json'); // Reemplázalo con la ruta real en AEM
        if (!response.ok) throw new Error('Error al obtener los datos');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function showCategorySlide(block, direction) {
    const slidesWrapper = block.querySelector('.category-carousel-slides-container');
    const slidesList = block.querySelector('.category-carousel-slides');
    const slides = block.querySelectorAll('.category-carousel-slide');
    const totalSlides = slides.length;
    const maxVisible = 10;
    let activeIndex = parseInt(block.dataset.activeIndex, 10) || 0;

    const slideWidth = slides[0].offsetWidth + 16; 

    activeIndex += direction;
    const maxIndex = Math.max(0, totalSlides - maxVisible);
    activeIndex = Math.min(activeIndex, maxIndex);
    activeIndex = Math.max(0, activeIndex);

    block.dataset.activeIndex = activeIndex;
    slidesList.style.transform = `translateX(${-activeIndex * slideWidth}px)`;
}

function bindCategoryEvents(block) {
    block.dataset.activeIndex = 0;
    block.querySelector('.category-prev').addEventListener('click', () => showCategorySlide(block, -1));
    block.querySelector('.category-next').addEventListener('click', () => showCategorySlide(block, 1));
}

export default async function decorate(block) {
    block.classList.add('category-carousel');
    block.dataset.activeIndex = 0;

    // Título
    const title = document.createElement('h2');
    title.classList.add('category-carousel-title');
    title.textContent = "Compra por categoría";
    block.prepend(title);

    // Contenedor de slides
    const slidesWrapper = document.createElement('div');
    slidesWrapper.classList.add('category-carousel-slides-container');

    const slidesList = document.createElement('ul');
    slidesList.classList.add('category-carousel-slides');

    // Obtener datos desde JSON
    const categories = await fetchCategories(block);

    categories.forEach(category => {
        const slide = document.createElement('li');
        slide.classList.add('category-carousel-slide');

        const wrapper = document.createElement('div');
        wrapper.classList.add('category-carousel-item');

        const img = document.createElement('img');
        img.src = category.image;
        img.alt = category.name;
        img.classList.add('category-carousel-image');

        const text = document.createElement('p');
        text.classList.add('category-carousel-text');
        text.textContent = category.name;

        wrapper.appendChild(img);
        wrapper.appendChild(text);
        slide.appendChild(wrapper);
        slidesList.appendChild(slide);
    });

    slidesWrapper.appendChild(slidesList);
    block.appendChild(slidesWrapper);

    // Botones de navegación
    const navigation = document.createElement('div');
    navigation.classList.add('category-carousel-navigation-buttons');
    navigation.innerHTML = `
      <button type="button" class="category-prev">←</button>
      <button type="button" class="category-next">→</button>
    `;
    block.append(navigation);

    setTimeout(() => {
        const slideWidth = slidesList.children[0]?.offsetWidth || 0;
        slidesList.style.width = `${slideWidth * categories.length}px`;
        slidesWrapper.style.width = `${slideWidth * 10}px`;
    }, 100);

    bindCategoryEvents(block);
}
