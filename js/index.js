//Variables 
var dinero;
const imagenes = ["cake.png", "cake-slice.png", "coffee-cup.png", "cookies.png", "donut.png", "muffin.png"];
var posiciones = [];
var vuelta = 0;
var ganado = false;
var ganancia = 0;
var empieza = true;
var musica;

window.onload = inicio;

function inicio(){
    document.getElementById("lanzar").onclick = tirarTodas;
    document.getElementById("b0").onclick = tirar;
    document.getElementById("b1").onclick = tirar;
    document.getElementById("b2").onclick = tirar;
    document.getElementById("cruz").onclick = ocultar;
    musica = document.querySelector("#audio");
    empezar();
}

function tirarTodas(){
    musica.src = "audios/lanzar.mp3";
    musica.play();

    //Comprueba si esta empezando
    if(empieza){
        empieza = false;
    }

    vuelta++;
    let bancaRota = revisarDinero();

    //Comprueba si no tiene dinero
    if (bancaRota || dinero <= 0) {
        return;
    }
    else
    {
        ganado = false;
        dinero--;
        escribirDinero(dinero);
        for (let caja = 0; caja < 3; caja++) {
            tirar("b" + caja);  
        }
        ganar();
    }
    
}

function escribirDinero(){
    let cajaDinero = document.querySelector("#dinero");
    let cajaMonedas = document.querySelector("#monedas");

    if(vuelta != 0){
        cajaMonedas.textContent = "";
        cajaDinero.textContent = "";
        cajaDinero.insertAdjacentHTML("afterbegin", dinero + `<span class="euros">€</span>`);
    }else{
        cajaDinero.insertAdjacentHTML("afterbegin", dinero);
    }

    for (let moneda = 0; moneda < dinero; moneda++) {
        cajaMonedas.insertAdjacentHTML("beforeend", `<img src="img/moneda.png">`);   
    }
}

function empezar(){
    dinero = Math.floor(Math.random() * (15 - 10)) + 10;
    escribirDinero();
}

function tirar(boton){
    if(ganado || empieza){
        return;
    }

    // Para los casos en los que solo se toca un boton
    if(this.id != null){
        if(!revisarDinero()){
            musica.src = "audios/otra.wav";
            musica.play();
            dinero--;
            escribirDinero();
        }
        else{
            return;
        }
        let elementoActual = this;
        boton = elementoActual.id;
    }
    
    vuelta++;
    let posicionAzar = Math.floor(Math.random()*imagenes.length);
    
    switch (boton) {
        case "b0":
            document.querySelectorAll(".ventana img")[0].src=`img/${imagenes[posicionAzar]}`;
            posiciones[0] = posicionAzar;
            break;
        case "b1":
            document.querySelectorAll(".ventana img")[1].src=`img/${imagenes[posicionAzar]}`;
            posiciones[1] = posicionAzar;
            break;
        case "b2":
            document.querySelectorAll(".ventana img")[2].src=`img/${imagenes[posicionAzar]}`;
            posiciones[2] = posicionAzar;
            break;
    }   
    
    if(this.id != null){
        ganar();
    }   
}

function revisarDinero(){
    //Comprueba que haya ganado antes
    if(dinero == 0 && !ganado){
        musica.src = "audios/final.mp3";
        musica.play();
        document.querySelector("#mensaje").textContent = `Ups, parece que te has quedado sin dinero, recarga la pagina para volver a empezar`;
        document.querySelector("#velo").style.display = "flex";
        return true;
    }else{
        return false;
    }
}

function ocultar(){
    document.querySelector("#velo").style.display = "none";

    if(ganado){
        dinero = dinero + ganancia;
        escribirDinero();
    }
}

function ganar(){
    let repetido = 0;
    let primeraImagen = posiciones[0];

    for (var imagen = 1; imagen < posiciones.length; imagen++) {
        if (primeraImagen == posiciones[imagen]) {
            repetido++;
        }
    }

    if(repetido == 2){
        musica.src = "audios/ganar.mp3";
        musica.play();
        let limite = 15 - dinero;
        ganancia = Math.floor(Math.random() * (limite - 1) + 1);
        document.querySelector("#mensaje").textContent = `Felicidades has ganado ${ganancia}€`;
        document.querySelector("#velo").style.display = "flex";
        ganado = true;
    }

    revisarDinero();
}