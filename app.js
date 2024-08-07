function crearBarra(element) {
    for (let i = 0; i < 17; i++) {
        let div = document.createElement("div");
        div.className = "e";
        element.appendChild(div);
    }
}

let barras = {
    html: document.getElementById("html"),
    javascript: document.getElementById("javascript"),
    python: document.getElementById("python"),
    sql: document.getElementById("sql")
};

Object.values(barras).forEach(barra => crearBarra(barra));

let contadores = {
    html: -1,
    javascript: -1,
    python: -1,
    sql: -1
};

let entro = false;

function efectoHabilidades() {
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        setInterval(() => pintarBarra(barras.html, 16, 'html'), 100);
        setInterval(() => pintarBarra(barras.javascript, 5, 'javascript'), 100);
        setInterval(() => pintarBarra(barras.python, 11, 'python'), 100);
        setInterval(() => pintarBarra(barras.sql, 6, 'sql'), 100);
    }
}

function pintarBarra(id_barra, cantidad, indice) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        if (elementos[x]) {
            elementos[x].style.backgroundColor = "#940254";
        }
    }
}

window.onscroll = efectoHabilidades;
