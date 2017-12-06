jugador="rodman"

let elMasGrande= function(nombre){
    if(nombre==="Roman" || nombre==="roman"){
        nombre=nombre.toUpperCase()
        console.log("EL MEJOR DE LA HISTORIA ES "+nombre)
    }else{
        console.log("Por favor ingrese el nombre de un gran jugador")
    }
}

elMasGrande(jugador)