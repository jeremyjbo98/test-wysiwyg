document.addEventListener("DOMContentLoaded", function () {
    const preHeader = document.createElement("div");
    preHeader.classList.add("pre-header");
    
    // Probamos sin etiquetas HTML
    preHeader.textContent = "Esto es una prueba sin innerHTML";
    
    document.body.prepend(preHeader);
});
