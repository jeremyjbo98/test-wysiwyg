// Decorate custom-carrusel block
export default function decorate(block) {
    const [carouselWrapper] = [...block.children];
    carouselWrapper.forEach((row) => {

        console.log("row",row);

    });
}