window.onload = function () {
    const imagenes = document.getElementsByClassName("carrusel-image");
    const botonSiguiente = document.getElementById("button-next");
    const botonAnterior = document.getElementById("button-back");
    let indiceActual = 0;
    let totalImagenes = imagenes.length;
    let contador = 0;

    while (contador < totalImagenes) {
        if (contador == 0) {
            imagenes[contador].style.opacity = "1";
            imagenes[contador].style.zIndex = "1";
        } else {
            imagenes[contador].style.opacity = "0";
            imagenes[contador].style.zIndex = "0";
        }
        
        imagenes[contador].style.position = "absolute";
        imagenes[contador].style.transition = "opacity 0.5s ease-in-out";
        contador++;
    }

    const actualizar = function () {
        let i = 0;
        while (i < totalImagenes) {
            if (i == indiceActual) {
                imagenes[i].style.zIndex = "1";
                imagenes[i].style.opacity = "1";
            } else {
                imagenes[i].style.opacity = "0";
                setTimeout(function(index) {
                    imagenes[index].style.zIndex = "0";
                }, 500, i);
            }
            i++;
        }
        actualizarBotones();
    };

    const actualizarBotones = function () {
        botonAnterior.disabled = indiceActual == 0;
        botonSiguiente.disabled = indiceActual == totalImagenes - 1;

        botonAnterior.style.opacity = botonAnterior.disabled ? "0.5" : "1";
        botonAnterior.style.cursor = botonAnterior.disabled ? "not-allowed" : "pointer";

        botonSiguiente.style.opacity = botonSiguiente.disabled ? "0.5" : "1";
        botonSiguiente.style.cursor = botonSiguiente.disabled ? "not-allowed" : "pointer";
    };

    botonSiguiente.onclick = function () {
        if (indiceActual < totalImagenes - 1) {
            indiceActual++;
            actualizar();
        }
    };

    botonAnterior.onclick = function () {
        if (indiceActual > 0) {
            indiceActual--;
            actualizar();
        }
    };

    actualizar();
};
