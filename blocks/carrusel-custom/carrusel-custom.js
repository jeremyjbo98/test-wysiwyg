// Decorate custom-carrusel block
export default function decorate(block) {
    console.log('Decorating custom-carrusel block', block);
    block.className = 'carrusel-custom-block';
    [...block.children].forEach((row, index) => {
        row.className = 'carrusel-custom-item';
    });
}
