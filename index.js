var bu_play = document.querySelector(".bu_play");
var inicio_oculto = document.querySelector(".inicio_oculto");
var sobre = document.querySelector(".sobre");


bu_play.addEventListener("click", function () {  
    inicio_oculto.classList.toggle("mostrar"); 
    bu_play.classList.toggle("ocultar");  
    inicio_oculto.style.animation = "mostrar_inicio 1s";
    console.log("se inicio");

})

sobre.addEventListener("click", function () {
    console.log("sobre");
    sobre.classList.toggle("stop_sobre"); 
})

