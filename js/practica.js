const dino = document.getElementById("dino")

const marco = document.getElementById("marco")

const fondo = document.getElementById("fondo")

const captus = document.getElementById("captus")

const buttonFlow = document.getElementById("button-flow")

let puntos = 0  //no funciona con const

let pausaPuntos 


//elemento para iniciar el salto 

document.addEventListener("click", () => {
    dino.classList.toggle("salto");
})

//este evento remueve la propiedad de "salto" para poder volver a usar el salto
dino.addEventListener('animationend', () => {
    dino.classList.remove("salto")
}); 


//pausa las animaciones del juego
function pararAnimacion() {
    captus.style.animationPlayState = "paused"
    dino.style.animationPlayState = "paused"
    fondo.style.animationPlayState = "paused"
    clearInterval(pausaPuntos)


}

function iniciar(){
    
}


buttonFlow.addEventListener('click', () => {
   if( buttonFlow.classList.contains("play") ){
    
   }    else {
        pararAnimacion()
   }
   buttonFlow.classList.toggle("play")
   
})


pausaPuntos = setInterval( () =>{
    puntos++;
    document.getElementById("puntos").innerText = puntos
}, 500
)