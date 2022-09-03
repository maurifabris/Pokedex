
const dino = document.getElementById("dino")

const marco = document.getElementById("marco")

const fondo = document.getElementById("fondo")

const captus = document.getElementById("captus")

const buttonFlow = document.getElementById("button-flow")

const reinicio = document.getElementById("reset")

const tablaDePuntuacion = document.getElementById("tablaDePuntuacion")

let puntos = 0  //no logro que funcionen usando cost

let puntosMaximos = 1

let puntosInterval 

async function puntuaciones() {
    const response = await fetch('../json/tablas.json')
    const tablas  = await response.json()
    return tablas
}

// fetch para generar tabla de puntucacion 
fetch("../json/tablas.json")
.then(response => response.json())
.then(tablas => {
    tablas.forEach((tablas) =>{ 
    tablaDePuntuacion.innerHTML += `
    <p>${tablas.usuario} : ${tablas.puntosGuardados}</p>
    `})
   })



//elemento para iniciar el salto 

marco.addEventListener("click", () => {
    dino.classList.add("salto");
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
    captus.classList.add("movimientoCaptus")
    iniciarPuntos()
    
}

//boton de pausa if/else
buttonFlow.addEventListener('click', () => {
    ( buttonFlow.classList.contains("play") ) ? iniciar() :   pararAnimacion()
    buttonFlow.classList.toggle("play")
   
})

//esta funcion suma un punto cada 0.5 y muestra una notificacion al llegar a 5 y 10 puntos
function iniciarPuntos() {
    puntosInterval = setInterval( () =>{
        puntos++;
        document.getElementById("puntos").innerText = puntos
        if(puntos == 12){
            Toastify({
                text: "WOW",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                    background: "radial-gradient(circle, rgba(206,184,193,1) 0%, rgba(136,140,146,1) 100%)",
                 borderRadius: "10px"
                },
                onClick: function(){}
              }).showToast();
    }
    
    puntuacionMaxima()
    }, 500,)
   
    
    
    }
    // boton de inicio para cuando se supera el record de json
function BotonIniciar(titulo){
    Swal.fire({
        title: `${titulo}`,
        confirmButtonText: 'SI!'
    }).then((confirm) => {
        iniciar()
    })
}
    
    //esta funcion suelta una alerta cuando se pasa la ultima puntiacion antes de un reset, tambien cambia el local storage de la puntuacion
function puntuacionMaxima(){
        localStorage.setItem("puntosActuales", puntos)
        if (puntos == localStorage.getItem(`puntosIniciales`)){
            pararAnimacion()
            BotonIniciar("rompiste tu record!")
         
        }
}



function pararPuntaje(){
    clearInterval(puntosInterval)
}



// reinicia el juego, se usa en el boton de reiniciar
function reiniciar(){
    puntos = 0
    dino.classList.remove("salto")
    captus.classList.remove("movimientoCaptus")
    void captus.offsetWidth;
   
    localStorage.removeItem("puntosActuales")
}


// evento para dar la opcion de reiniciar el juego
reinicio.addEventListener("click", () =>{
    pararAnimacion()
    Swal.fire({
        title: 'Listo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("puntosIniciales", puntos)
            reiniciar()
            iniciar()
            
        } else{
            iniciar()
            buttonFlow.classList.remove("play")
        }
      })
        })
    

 



iniciarPuntos()