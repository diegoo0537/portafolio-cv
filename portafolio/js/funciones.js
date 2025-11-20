/*GENERAL*/
const menu = document.getElementById("menu");
const contenedor = document.getElementById("contenedor");

menu.addEventListener("mouseover", () => {
    menu.style.borderColor = "rgb(96, 117, 255)";
});

menu.addEventListener("mouseout", () => {
    menu.style.borderColor = "transparent";
});

contenedor.addEventListener("mouseover", () => {
    contenedor.style.borderColor = "rgb(96, 117, 255)";
});

contenedor.addEventListener("mouseout", () => {
    contenedor.style.borderColor = "transparent";
});

/*CABECERA*/
const cabecera = document.getElementById("cabecera");
const logotipo = document.getElementById("logotipo");

cabecera.addEventListener("mouseover", () => {
    cabecera.style.color = "rgb(96, 117, 255)";
    cabecera.style.borderColor = "rgb(96, 117, 255)";
    logotipo.style.boxShadow = "0px 0px 10px 3px rgb(96, 117, 255)";
});

cabecera.addEventListener("mouseout", () => {
    cabecera.style.color = "white";
    cabecera.style.borderColor = "transparent";
    logotipo.style.boxShadow = "0px 0px 10px 3px white";
});

/*MENU*/
const botonDescarga = document.getElementById("boton-descarga");

botonDescarga.addEventListener("click", () => {
    if(confirm("¿Quieres descargar mi CV?")){
        const link = document.createElement("a");

        link.style.display = "none";
        link.href = "ficheros/cv.pdf";
        link.download = "CV_Diego_Jimenez.pdf";
        link.target = "_blank";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
})

/*CUERPO*/
const botonMi = document.getElementById("boton-mi");
const botonExperiencia = document.getElementById("boton-experiencia");
const botonHabilidades = document.getElementById("boton-habilidades");
const botonEstudios = document.getElementById("boton-estudios");
const botonProyectos = document.getElementById("boton-proyectos");

var botones = [botonMi, botonExperiencia, botonHabilidades, botonEstudios, botonProyectos];

const h3 = document.getElementById("h3");

const contenidoMi = document.getElementById("contenido-mi");
const contenidoExperiencia = document.getElementById("contenido-experiencia");
const contenidoHabilidades = document.getElementById("contenido-habilidades");
const contenidoEstudios = document.getElementById("contenido-estudios");
const contenidoProyectos = document.getElementById("contenido-proyectos");

var secciones = [contenidoMi, contenidoExperiencia, contenidoHabilidades, contenidoEstudios, contenidoProyectos];

function inicializarContenido(){
    for(let i=1;i<secciones.length;i++){
        secciones[i].style.display = "none";
    }

    secciones[0].style.display = "block";
}

function resetearBotones(){
    botones.forEach(boton => {
        boton.style.color = "white";
        boton.style.backgroundColor = "transparent";
        boton.style.borderColor = "transparent";
    });
}

function cambiarTitulo(boton){
    secciones.forEach(parrafo => {
        parrafo.style.display = "none";
    })

    if(boton == botonMi){
        h3.textContent = boton.value;
        secciones[0].style.display = "block";
    }
    if(boton == botonExperiencia){
        h3.textContent = boton.value;
        secciones[1].style.display = "block";
    }
    if(boton == botonHabilidades){
        h3.textContent = boton.value;
        secciones[2].style.display = "block";
    }
    if(boton == botonEstudios){
        h3.textContent = boton.value;
        secciones[3].style.display = "block";
    }
    if(boton == botonProyectos){
        h3.textContent = boton.value;
        secciones[4].style.display = "block";
    }
}

function mostrarContenido(boton){
    resetearBotones();
    cambiarTitulo(boton);

    boton.style.backgroundColor = "gray";
    boton.style.borderColor = "rgb(96, 117, 255)";
}

/*MAIN*/
document.addEventListener('DOMContentLoaded', function() {
    inicializarContenido();

    botonMi.addEventListener("click", () => {
        mostrarContenido(botonMi);
    });
    botonExperiencia.addEventListener("click", () => {
        mostrarContenido(botonExperiencia);
    });
    botonHabilidades.addEventListener("click", () => {
        mostrarContenido(botonHabilidades);
    });
    botonEstudios.addEventListener("click", () => {
        mostrarContenido(botonEstudios);
    });
    botonProyectos.addEventListener("click", () => {
        mostrarContenido(botonProyectos);
    });
});