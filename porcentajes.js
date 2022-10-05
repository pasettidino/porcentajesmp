function porcentaje (num1, metododepago, tipo){
    switch(metododepago){
        case "point":
            switch(tipo){
                case "debito":
                    return (num1*3.15/100);

                case "credito":
                    return (num1*6.39/100);
            }

        case "qr":
            switch(tipo){
                case "debito":
                    return (num1*0.99/100);

                case "credito":
                    return (num1*6.39/100);
            }
            
        case "link":
            switch(tipo){
                case "debito":
                    return (num1*5.99/100);

                case "credito":
                    return (num1*6.50/100);
            }


        default:
            return "Operacion no disponible"
    }
}

class Producto {
    constructor(id, nombre, precio){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let contenedor = document.getElementById("contenedor");
let productos = [];
productos.push(new Producto(productos.length + 1, "Musculosa Miami Heat", 8000));
productos.push(new Producto(productos.length + 1, "Short Lakers", 7500));
productos.push(new Producto(productos.length + 1, "Musculosa Denver - Campazzo", 11000));
productos.push(new Producto(productos.length + 1, "Camiseta seleccion Argentina", 5000));
productos.push(new Producto(productos.length + 1, "Buzo Cavaliers", 12000));
console.log(productos);
localStorage.setItem("Articulos", JSON.stringify(productos));

productos.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML = ` 
        <h2>Id: ${producto.id} </h2>
        <h3> Producto: ${producto.nombre} </h3>
        <b>$${producto.precio} </b>
    ` 

    contenedor.append(item);
})


function calcularInteres() {

	let tarjeta = document.getElementById("tarjeta");
	let valorTarjeta = tarjeta.options[tarjeta.selectedIndex].value;

	let metodoDePago = document.getElementById("medioDePago");
	let valorMetodoDePago = metodoDePago.options[metodoDePago.selectedIndex].value;


	let monto = document.getElementById("monto").value;

    document.getElementById("interes").innerHTML = parseInt(monto) +  porcentaje(parseInt(monto), valorMetodoDePago, valorTarjeta);
}

document.getElementById("btnInteres").addEventListener("click", calcularInteres);








