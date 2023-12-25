let nombrePersona = prompt("Por favor ingresar su nombre.")

if (nombrePersona =="" || nombrePersona == "." || nombrePersona == " "){
    alert("No ingresaste tu nombre, por favor intentalo de nuevo");

    nombrePersona = prompt("Por favor ingresar su nombre.")
}
else {
    alert("Bienvenido/a" + " " + nombrePersona)
}

console.log(nombrePersona)

const OPCION_SALIR = 4;
const IVA = .19;
let totalDeProducto = 100
const ArrayDeProductos = [];
class Producto {
    constructor(nombre, precio, descripcion, categoria){
        this.precio = precio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria
    }
}


const collar1 = new Producto("Collar cuero", 40000, "Collar súper cómodo y con mucho estilo para tu peludito", "Collares");
ArrayDeProductos.push(collar1);

const collar2 = new Producto("Collar rastreador", 60000, "Collar con rastreador donde puedes ubicar a tu mascota.", "Collares");
ArrayDeProductos.push(collar2);

const placa1 = new Producto("Placa marcada en laser", 15000, "Placa con el nombre de tu mascota, tu nombre y número telefónico", "Placas");
ArrayDeProductos.push(placa1);

const placa2 = new Producto("Placa con codigo QR", 15000, "Placa con código QR con todos tus datos personales", "Placas");
ArrayDeProductos.push(placa2);

//console.log(ArrayDeProductos)


const verCollares = () =>{
    const filtrado = ArrayDeProductos.filter((el)=> el.categoria === 'Collares'); 
    let mensajeAMostrar = '';
    filtrado.forEach((el) =>{
        mensajeAMostrar += "\nProducto: " + el.nombre + " " + "\nPrecio: " + el.precio
    });
    alert(mensajeAMostrar);
}

const verPlacas = () =>{
    const filtrado = ArrayDeProductos.filter((el)=> el.categoria === 'Placas'); 
    let mensajeAMostrar = '';
    filtrado.forEach((el) =>{
        mensajeAMostrar += "\nProducto: " + el.nombre + " " + "\nPrecio: " + el.precio
    });
    alert(mensajeAMostrar);
}



const verProductos = () =>{
    let opcion;
    opcion = parseInt(prompt(nombrePersona + " " + "Elige la acción que deseas realizar, \n 1.Ver collares \n 2.Ver placas \n 3.Regresar a pagina anterior. \n 4.Salir"));
    while(opcion !== OPCION_SALIR){
        switch(opcion){
            case 1: verCollares();
                break;
            case 2: verPlacas();
                    break;
            case 3: regresar();
                    break;
            case 4:
                    break;
            default:
                alert("Acción no reconocida, intentalo de nuevo")
        }
        opcion = parseInt(prompt("Elige la opción deseada:, \n 1-Collares \n 2-Placas"))
    }
}

const verTotal = (total) =>{
    const resultado = IVA + totalDeProducto;
    alert("El total de los productos más IVA es " + resultado)

}


let opcion = parseInt(prompt(nombrePersona + " " + "elige la acción que deseas realizar, \n 1.Ver nuestros productos \n 2.Ver el valor total del carrito de compras. \n 3.Comunicarte con servicio al cliente \n 4.Salir"));

while(opcion != OPCION_SALIR){

    switch(opcion){
        case 1: verProductos();
                break;
        case 2: verTotal(totalDeProducto);
                break;
        case 3: servicioCliente();
                break;
        case 4:
                break;
        default:
            alert("Acción no reconocida, intentalo de nuevo")
    }
    opcion = parseInt(prompt(nombrePersona + "Elige la accion que deseas realizar, \n 1.Ver productos \n 2.Ver el valor total del carrito de compras. \n 3.Servicio al cliente \n 4.Salir"));
}

alert("Gracias por su visita!")