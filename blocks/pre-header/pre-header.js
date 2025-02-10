export default function decorate(block) {
    console.log('Decorating block:', block);

    // Crear el pre-header
    const preHeader = document.createElement("div");
    preHeader.classList.add("pre-header");

    preHeader.innerHTML = `
        <a href="#"><i class="fas fa-map-marker-alt"></i> Cochez Vía España <span class="sucursales">Sucursales</span></a>
        <a href="#"><i class="fas fa-truck"></i> Cupón de $20 por compras de $200</a>
        <a href="#">Rastrear mi orden</a>
        <a href="#">Consultar Puntos Gordos</a>
        <a href="#">Servicios</a>
        <a href="#" class="business">Empresas</a>
    `;

    // Agregar el pre-header dentro del bloque pasado a decorate()
    block.prepend(preHeader);
}
