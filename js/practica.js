//const { reset } = require("nodemon")

const dino = document.getElementById("dino")

const marco = document.getElementById("marco")

const fondo = document.getElementById("fondo")

const captus = document.getElementById("captus")

const buttonFlow = document.getElementById("button-flow")

const reinicio = document.getElementById("reset")

let puntos = 0  //no logro que funcionen usando cost

let puntosInterval 


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
    iniciarPuntos()
    
}

//boton de pausa if/else
buttonFlow.addEventListener('click', () => {
    ( buttonFlow.classList.contains("play") ) ? iniciar() :   pararAnimacion()
    buttonFlow.classList.toggle("play")
   
})

//esta funcion suma un punto cada 0.5 y muestra una notificacion al llegar a 5 y 10 puntos, la idea es cambiarlo a que salga cuando supere el maximo del json
function iniciarPuntos() {
    puntosInterval = setInterval( () =>{
        puntos++;
        document.getElementById("puntos").innerText = puntos
        if(puntos == 10 || puntos == 5){
            Toastify({
                text: "WOW",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "radial-gradient(circle, rgba(206,184,193,1) 0%, rgba(136,140,146,1) 100%)",
                 borderRadius: "10px"
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
    }, 500,)
    
    }
   



function pararPuntaje(){
    clearInterval(puntosInterval)
}




function reiniciar(){
    puntos = 0
    dino.classList.remove("salto")
    captus.classList.remove("movimientoCaptus")
}

reinicio.addEventListener("click", () =>{
    pararAnimacion()
    Swal.fire({
        title: 'Listo?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO!'
      }).then((result) => {
        if (result.isConfirmed) {
            reiniciar()
            iniciar()
        } else{
            iniciar()
            buttonFlow.classList.remove("play")
        }
      })
        })
    

