var slideIndexEventos=0;

window.onload = function() { 
mostrarDivsEventos(slideIndexEventos);
}

//Eventos
function pasarDivsEventos(posicion){
    mostrarDivsEventos(slideIndexEventos+=posicion)
}

function mostrarDivsEventos(posicion){
    let indice
    //selecciona todos los divs que contienen eventos
    let listaEventos= document.getElementsByClassName("contenedor-eventos")

    //si se termina el array que vuelva al principio
    if(posicion>=listaEventos.length-1){
        slideIndexEventos=0
    }

    // si se pasa del principio del array que vaya al final
    if(posicion<0){
        slideIndexEventos=listaEventos.length-1
    }

    //pone todos los divs de la lista en display=none
    for(indice=0;indice<listaEventos.length;indice++){
        listaEventos[indice].style.display="none";
    }

    //pone el correspondiente segun el indice en display block para que se vea
    listaEventos[slideIndexEventos].style.display="block"
}