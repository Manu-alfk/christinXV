var bu_play = document.querySelector(".bu_play");
var inicio_oculto = document.querySelector(".inicio_oculto");
var sobre = document.querySelector(".sobre");
var rasgado = document.querySelector(".rasgado");
var papel_de_carta = document.querySelector(".papel_de_carta");
var papel_carta = document.querySelector(".papel_carta");
var con_papel = document.querySelector(".con_papel");
var con_sobre = document.querySelector(".con_sobre");
var con_carta_ = document.querySelector(".con_carta_");

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
    con_papel.classList.toggle ("stop_papel");
    rasgado.style.animation = "rasgar_sobre 2s"; 

    con_sobre.className =  "con_sobre_";
    papel_carta.className = "ve_carta";
    
    setTimeout(function () {
        inicio_oculto.className = "fade_inicio"; 
    }, 5000);
    
    setTimeout(function () {
        con_carta_.className = "mostar_con_carta"; 
    }, 6000);

    setTimeout(function () {
        inicio_oculto.className = "ocultar_inicio"; 
    }, 7000);
})

