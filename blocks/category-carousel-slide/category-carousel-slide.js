export default function decorate(block) {
    block.classList.add('category-carousel-slide');

    // Obtener la imagen y el texto dentro del bloque
    const img = block.querySelector('img');
    const text = block.querySelector('p');

    if (img) {
        img.classList.add('carousel-slide-image');
    }

    if (text) {
        text.classList.add('carousel-slide-text');
    }
}
