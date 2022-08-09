class producto { 
    constructor(nombreParam, colorparam, precioparam) {
      this.nombre = nombreParam
      this.color = colorparam
      this.precio = precioparam
    } 
    comprar(){
        dinero -= this.precio
        console.log(dinero)
    }
}

const Motog30 = new producto ("moto g30", "negro", 15)
const Samsungs20 = new producto ("samsung s20", "blanco", 20)
const iPhone12 = new producto ("I Phone", "negro", 25)