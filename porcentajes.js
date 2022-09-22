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

let productos = [];
productos.push(new Producto(productos.length + 1, prompt("Ingrese el nombre del producto") , parseInt(prompt("Ingrese el precio del producto"))));
productos.push(new Producto(productos.length + 1, prompt("Ingrese el nombre del producto") , parseInt(prompt("Ingrese el precio del producto"))));
productos.push(new Producto(productos.length + 1, prompt("Ingrese el nombre del producto") , parseInt(prompt("Ingrese el precio del producto"))));

let mensaje;

productos.forEach(producto => {
    mensaje +=` 
        Producto: ${producto.nombre}
        Precio con Interes: ${producto.precio + porcentaje(producto.precio, "point", "debito")}
    ` 
})

alert(mensaje);









