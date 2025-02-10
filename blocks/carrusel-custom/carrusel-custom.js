// Decorate custom-carrusel block
export default function decorate(block) {
    console.log('Decorating custom-carrusel block', block);
    [...block.children].forEach((row, index) => {

        console.log(`div numero ${index + 1}:`, row);

    });
}
