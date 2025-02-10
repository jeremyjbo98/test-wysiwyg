// Decorate custom-carrusel block
export default function decorate(block) {
    const [carruselWrapper] = block.children;
    const carrusel = document.createElement('div');
    carrusel.innerHTML = carruselWrapper.innerHTML.trim();
    carruselWrapper.replaceChildren(carrusel);
}