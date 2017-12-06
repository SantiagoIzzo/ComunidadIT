let mostrarNombre="Santiago"


let recuadro= function(mostrarNombre){
    let acum="="
    for(i=0;i<=mostrarNombre.length;i++){
        acum=acum+"="
    }
    console.log(acum)
    console.log("="+mostrarNombre+"=")
    console.log(acum)
    
}
recuadro(mostrarNombre)