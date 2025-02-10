// Decorate custom-carrusel block
export default function decorate(block) {
    console.log('Decorating custom-carrusel block', block);
    block.className = 'carrusel-custom-block';
    [...block.children].forEach((row, index) => {
        row.className = 'carrusel-custom-item';
    });
    const bullets = document.createElement('div');
    bullets.className = 'carrusel-custom-bullets';
    [...block.children].forEach((row, index) => {
        const bullet = document.createElement('div');
        bullet.className = 'carrusel-custom-bullet';
        bullet.setAttribute('data-index', index);
        bullet.addEventListener('click', () => {
            doSlide(index);
        });
        bullets.append(bullet);
    });
    block.insertAdjacentElement('afterend', bullets);
    function doSlide(index) {
        console.log('doSlide', index);
    }
}
