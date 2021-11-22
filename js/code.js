var fecha = new Date;
var hora = fecha.getHours();



//Ejercicio 3
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {

    var arrayFotos = [];
    for (let i = 0; i < n; i++) {
        var rand = getRndInteger(min, max);
        if (arrayFotos.includes(rand)) {
            i--;
        } else {
            arrayFotos.push(rand);
        }
    }
    return arrayFotos;
}

//Ejercicio 4
function buttonOpacity() {
    let pokeball = document.getElementById("button");

    const button = document.querySelector('#button');
    const estiloPokeball = getComputedStyle(button);

    if (estiloPokeball.opacity == 1) {
        pokeball.style.opacity = 0.5;

    } else {
        pokeball.style.opacity = 1;
    }
}

//Ejercicio 5
function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function galleryRandom() {
    /* Definir variables 
    min, max, images, listRnd
    */
    let min = 1000;
    let max = 0;
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < 10; i++) {
        var aux = imagenes[i].getAttribute("src");
        aux = aux.split("_").pop();
        aux = aux.split(".").shift();
        aux = parseInt(aux, 10);

        if (aux > max) {
            max = aux;
        }

        if (aux < min) {
            min = aux;
        }
    }
    let images = document.getElementsByClassName("imagen");
    let listRnd = getListRandom(10, min, max);

    for (let i = 0; i < 10; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
    }
}


window.onload = function() {
    //Ejercicio 1
    alert('Hello World!');
    //Ejercicio 2
    var saludo = document.getElementsByClassName("saludo")[0];
    if (hora < 7 || hora > 17) {
        saludo.innerHTML = "¡Buenas noches!";
        document.getElementById("body").style.backgroundColor = "#3E3730";
        saludo.style.color = "white";
    } else {
        saludo.innerHTML = "¡Buenos días!";
        document.getElementById("body").style.backgroundColor = "rgb(238, 107, 47)";
        saludo.style.color = "black";
    }
    //Ejercicio 3
    console.log(getListRandom(10, 1, 10));

}