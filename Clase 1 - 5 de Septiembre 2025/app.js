function handleSaludar(nombre) {
    return function (event) {
        alert(`hola `+nombre)
    }
}

const h2_HTML = document.querySelector("#click")

h2_HTML.addEventListener('click', function () {
    alert("hola dani")
})


// Para React JS -> tipos de datos, tipos de variables(let const), comparadores (==, !=, !==, >, <, <=, >=); operadores aritmeticos; operadores logicos; if, else, elseif; for, forOf, forIn; functions (arrowFunction ()=> {}); objetos; arrays; métodos de array -> push, splice, indexOf, includes; métodos avanzados de array -> map, filter, find; asincronia, desestructuring de objetos, arrays; spread operator (...); scopes.


//For of

const nombres = ['maria', 'daniel', 'pepe']
for(let nombre of nombres)
    console.log(nombre)

//destructuring 
// objetos

const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 29
}


const {nombre, apellido, edad} = persona
console.log('hola ' + persona.nombre + ' ' + persona.apellido)  

