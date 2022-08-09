const botonCompra1 = document.getElementById("botonCompra1")
const botonCompra2 = document.getElementById("botonCompra2")
const botonCompra3 = document.getElementById("botonCompra3")
const compra = document.getElementById("compra")
const buscador = document.getElementById("buscador")
const dinero = 50

botonCompra1.addEventListener("click", () => {
    Motog30.comprar
    console.log("comprado")
})
botonCompra2.addEventListener("click", () => {
   iPhone12.comprar
   console.log("comprado")
   console.log(dinero)
})
botonCompra3.addEventListener("click", () => {
    iPhone12.comprar
    console.log("s")
})


buscador.addEventListener("change",()=>{
   console.log(buscador.value)
})