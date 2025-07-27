// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        if (listaAmigos.includes(nombre)) {
            alert("Este nombre ya se ingreso")
        } else {
            listaAmigos.push(nombre)
            agregarLista()
        }
        limpiar()
        console.log(listaAmigos)
    }
    return
}


function agregarLista() {
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = listaAmigos[listaAmigos.length - 1];
    lista.appendChild(li);
}

function limpiar() {
    let nombre = document.getElementById('amigo')
    nombre.value = ""
}


function sortearAmigo() {
    let numero = Math.floor(Math.random() * listaAmigos.length)
    if (listaAmigos.length == 0) {
        alert("Por favor, primero inserte un nombre.")
    } else {
        let sorteo = listaAmigos[numero]
        let ganador = document.getElementById('resultado')
        ganador.textContent = `El ganador es ${sorteo}`
    }
}
