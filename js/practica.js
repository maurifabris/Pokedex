/*
const dino = document.getElementById("dino")

const marco = document.getElementById("marco")

const fondo = document.getElementById("fondo")

const captus = document.getElementById("captus")

const buttonFlow = document.getElementById("button-flow")

let puntos = 0  //no logro que funcionen usando cost

let puntosInterval 


//elemento para iniciar el salto 

document.addEventListener("click", () => {
    dino.classList.toggle("salto");
})

//este evento remueve la propiedad de "salto" para poder volver a usarse
dino.addEventListener('animationend', () => {
    dino.classList.remove("salto")
}); 


//pausa las animaciones del juego
function pararAnimacion() {
    captus.style.animationPlayState = "paused"
    dino.style.animationPlayState = "paused"
    fondo.style.animationPlayState = "paused"
    pararPuntaje()

}

//inicia el juego despues de la pausa 
function iniciar(){
    captus.style.animationPlayState = "running"
    dino.style.animationPlayState = "running"
    fondo.style.animationPlayState = "running"
    iniciarPuntos()
    
}

//boton de pausa if/else
buttonFlow.addEventListener('click', () => {
    ( buttonFlow.classList.contains("play") ) ? iniciar() :   pararAnimacion()
    buttonFlow.classList.toggle("play")
   
})


function iniciarPuntos() {
    puntosInterval = setInterval( () =>{
        puntos++;
        document.getElementById("puntos").innerText = puntos
    }, 500
    )
}


function pararPuntaje(){
    clearInterval(puntosInterval)
}
*/



////////////////////////////////////


const producto1 = {
    valor : 250,
    id : 24,
    impuestos : 100,
    nombre : "medias",
}

const producto2 = {
    valor : 250,
    id : 25,
    impuestos : undefined,
    nombre : "pantalon",
}

const producto3 = {
    valor : 300,
    id : 26,
    impuestos : 150,
    nombre : "remera",
}


//let {valor, nombre} = producto1

//console.log(valor, nombre)

//const productos = [producto1,producto2,producto3]
/*let acumulador = 0
productos.forEach(producto => {
   acumulador += producto.impuestos ?? 0
}
)*/

//console.log(acumulador)

localStorage.setItem("productos",JSON.stringify(producto1))

const productos = JSON.parse(localStorage.getItem("productos")) ?? []


(producto2. id > 20) ? console.log("id mayor a 20") : console.log("id menor a 20")