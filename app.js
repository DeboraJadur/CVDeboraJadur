// Creo las barritas de una barra particular identificada por su id
function crearBarra(element) {
    for (let i = 0; i < 17; i++) { // Cambié el <= 16 por < 17 para tener 17 barritas (índices de 0 a 16)
        let div = document.createElement("div");
        div.className = "e";
        element.appendChild(div);
    }
}

// Asegúrate de usar el método getElementById para obtener el elemento
let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let python = document.getElementById("python");
crearBarra(python);

let sql = document.getElementById("sql");
crearBarra(sql);

// Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
// para eso utilizo un arreglo, cada posición pertenece a un elemento
// comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1]; // 4 elementos, uno por cada barra

// Esta variable la voy a usar de bandera para saber si ya ejecutó la animación 
let entro = false;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro === false) {
        entro = true;

        const intervalHtml = setInterval(function() {
            pintarBarra(html, 16, 0, intervalHtml); // Pintar 16 barritas en HTML
        }, 100);

        const intervalJavascript = setInterval(function() {
            pintarBarra(javascript, 5, 1, intervalJavascript); // Pintar 5 barritas en JavaScript
        }, 100);

        const intervalPython = setInterval(function() {
            pintarBarra(python, 11, 2, intervalPython); // Pintar 11 barritas en Python
        }, 100);

        const intervalSql = setInterval(function() {
            pintarBarra(sql, 6, 3, intervalSql); // Pintar 6 barritas en SQL
        }, 100);
    }
}

// Lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        if (elementos[x]) { // Asegúrate de que el elemento existe
            elementos[x].style.backgroundColor = "#940254"; // Usa backgroundColor
        }
    } else {
        clearInterval(interval);
    }
}

// Detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function() {
    efectoHabilidades();
};