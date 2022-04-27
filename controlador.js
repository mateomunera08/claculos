let bandera = true 
let buscar = document.getElementById("buscar")
let boton = document.getElementById("boton")

boton.addEventListener("click", function(event) {
    event.preventDefault()

    if (bandera==true) {
        buscar.classList.remove("invisible")
    }else{ 
        buscar.classList.add("invisible")

    }

    bandera= !bandera

})

let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",
    precio : "500.000"
}
let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",

    precio : "500.000"
}
let producto = { 
    nombre : "ps4",
    precio : "500.000"
}
let producto = { 
    nombre : "ps4",
    precio : "500.000"
}

let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5
)
console.log(productos)
productos.forEach (function(producto){
    console.log(productos)
    console.log(producto.nombre)
})
