// Decorate cochez-carrusel block
export default function decorate(block) {
    console.log('Decorating block categories', block);

    block.className = 'carrusel-cochez-categorias-block';
    [...block.children].forEach((row) => {
        row.className = 'carrusel-cochez-categorias-item';
        [...row.children][0].className = 'carrusel-cochez-categorias-item-image';
        [...row.children][1].className = 'carrusel-cochez-categorias-item-title';
    });
}
