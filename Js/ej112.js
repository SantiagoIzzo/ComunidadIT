let numInicio=1
let numFin=10
let mostrarNumero= function(inicio,fin){
    let direccion=1
    let aux=0
    if(inicio>fin){
        direccion=-1
        aux=inicio
        inicio=fin
        fin=aux
    }
    for(i=inicio;i!=fin;i+direccion){
        console.log(i)
    }
}
mostrarNumero(numInicio,numFin)