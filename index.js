//1.
const titulo = document.getElementById("titulo")
//2.
const tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal


//3.

var barra = document.querySelectorAll(".bar")

for(let  i = 0; i < barra.length; i++){
    barra[i].style.backgroundColor = "orange";
}


//4.
const  copyright = document.getElementById("copyright") ;

copyright.textContent += "Matías Miguel Dure, Cohort 53";


//5.
$contenedor = document.getElementById("contenedor")

//6.

function card_creator(fruta){
    return `  
    <article class="card">
    <h2>${fruta.nombre}</h2>
    <img src="${fruta.foto}">
    <p>${fruta.descripcion}</p>
</article>
`
}

//7 y 8.

for (const fruta of frutas){
    const card = card_creator(fruta);
    $contenedor.innerHTML += card
}

//10 y 11.
//function crear_lista(array){
//    const listas = document.getElementById("lista")
//    const lista = document.createElement('ul')
//    for (const fruta of frutas){
//        if (fruta.esDulce === true){
//            lista.innerHTML += `<li>${fruta.nombre}</li>`
//        }
//    }
//    listas.appendChild(lista)
//}

//crear_lista(frutas)


function crear_lista2(array){
    const listas = document.getElementById("lista")
    const lista = document.createElement('ul')
    const array_object = array.filter(element => element.esDulce === true )
    array_object.forEach(function(element){
        lista.innerHTML += `<li>${element.nombre}</li>`
})
    listas.appendChild(lista)
}

crear_lista2(frutas)