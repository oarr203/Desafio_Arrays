class tiendaCoches{
    constructor(marca,modelo,precio,placa){
        this.marca=marca.toUpperCase();
        this.modelo=modelo;
        this.precio=Number(precio);
        this.placa=placa;
    }
    precioTotal(){ return this.precio= this.precio * 1.19}
}

const vehiculos=[];
let pregunta="s"; 

while(pregunta != "n"){
    let marca = prompt("Ingrese la marca del vehiculo");
    let modelo = prompt("Ingrese el modelo del vehiculo");
    let precio = prompt("Ingrese el valor del vehiculo");
    let placa = prompt("Ingrese la placa del vehiculo");

    vehiculos.push(new tiendaCoches(marca,modelo,precio,placa))

    pregunta= prompt("desea agregar otro vehiculo? s/n");

    }

    vehiculos.push(new tiendaCoches("chev","2012",5000,"abc123"))

    for (const dato of vehiculos) {
        console.log("Auto marca: " +dato.marca)
        console.log("Modelo: " +dato.modelo)
        console.log("Precio sin IVA: "+dato.precio)
        console.log("Placa: "+dato.placa)
        console.log(" el costo total de este vehiculo es: "+dato.precioTotal() + " pesos")
        console.log("\n")
    }
    