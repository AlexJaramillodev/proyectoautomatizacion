document.addEventListener('DOMContentLoaded', function() {
    const elementoA = document.querySelector('.enlace-salud');
    const elementoB = document.querySelector('.img-salud');

    elementoA.addEventListener('mouseover', function() {
        elementoB.classList.add('elemento-hover');
    });

    elementoA.addEventListener('mouseout', function() {
        elementoB.classList.remove('elemento-hover');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elementoC = document.querySelector('.enlace-movilidad');
    const elementoD = document.querySelector('.img-movilidad');

    elementoC.addEventListener('mouseover', function() {
        elementoD.classList.add('elemento-hover');
    });

    elementoC.addEventListener('mouseout', function() {
        elementoD.classList.remove('elemento-hover');
    });
});