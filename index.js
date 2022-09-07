var bu_play = document.querySelector(".bu_play");
var inicio_oculto = document.querySelector(".inicio_oculto");
var sobre = document.querySelector(".sobre");
var rasgado = document.querySelector(".rasgado");
var papel_de_carta = document.querySelector(".papel_de_carta");

var papel_sonido = document.getElementById("rasgado_audio"); 


bu_play.addEventListener("click", function () {  
    inicio_oculto.classList.toggle("mostrar"); 
    bu_play.classList.toggle("ocultar");  
    inicio_oculto.style.animation = "mostrar_inicio 1s";
    console.log("se inicio");

})

sobre.addEventListener("click", function () {
    papel_sonido.play();
    console.log("sobre");
    sobre.classList.toggle ("stop_sobre");
    papel_de_carta.classList.toggle ("stop_sobre");
    //sobre.className =  "stop_sobre";
    rasgado.style.animation = "rasgar_sobre 2s";
})

