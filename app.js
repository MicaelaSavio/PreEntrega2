// Se le solicita al usuario su nombre para darle la bienvenida. 

alert ("Cual es tu nombre?");
let nombre = prompt ("Ingresa tu nombre");
let resultado =  `${nombre}`;
let saludo = "Hola ";
let final = " te damos la bienvenida a la pagina, porfavor dejanos tu pedido";

alert (saludo + nombre + final);

// Realizamos el listado de los productos en stock y ademas agregamos el carrito de compras vacio

const productos = [
    {nombre: "zapatillas", precio: 5000},
    {nombre: "sandalias", precio: 3000},
    {nombre: "carteras", precio: 1500},
    {nombre: "cinturones", precio: 500},
];
let carrito = []

let seleccion = prompt ("Hola, desea comprar algun producto responde si o no?")

// En caso de no responder si o no le aparecera un alerta para que responda obligatoriamente si o no

while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingresa solamente si o no")
    seleccion = prompt("Desea realizar su compra ahora si o no?")   
}

// En caso de responder si, se le deja el listado de los productos disponibles

if(seleccion == "si"){
    alert("A continuacion te dejamos nuestra lista de los productos disponibles")
    let todosLosProductos = productos.map(
      (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
  alert("Gracias por visitarnos, esperamos verte pronto")
} 

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "zapatillas" || producto == "sandalias" || producto == "carteras" || producto == "cinturones" ){
    switch (producto) {
        case "zapatillas":
            precio = 5000;
            break;
        case "sandalias":
            precio = 3000;
            break;
        case "carteras":
            precio = 1500;
            break;
        case "cinturones":
            precio = 500;
            break;
        default:
            break;
    }
let unidades = parseInt(prompt("Cuantas unidades queres llevar?"))

// Agregamos todas las unidades que el usuario eligio al carrito

carrito.push({producto, unidades, precio})
console.log (carrito)
} else {
  alert ("No tenemos ese producto")
}

seleccion = prompt("desea seguir comprando?")

while (seleccion === "no"){
    alert("gracias por su compra, hasta pronto")
    carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

// Aca sumamos todo el total de la compra del usuario y se lo presentamos en consola y en pantalla

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`El total a pagar por su compra es: $ ${total}`);
document.write (`El total a pagar por su compra es: $ ${total}`);

