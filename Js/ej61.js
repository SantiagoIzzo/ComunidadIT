let dia=0

let nombreDelDia = null
let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

/*switch(dia){
    case 1:
    nombreDelDia="Lunes"
    break

    case 2:
    nombreDelDia="Martes"
    break

    case 3:
    nombreDelDia="Miercoles"
    break

    case 4: 
    nombreDelDia="Jueves"
    break

    case 5:
    nombreDelDia="Viernes"
    break

    case 6:
    nombreDelDia="Sabado"
    break

    case 7:
    nombreDelDia="Domingo"
    break
}

switch(nombreDelDia){
    case null:
    console.log("Por favor ingrese un numero entre 1 y 7")
    break
    default:
    console.log("El dia de hoy es "+nombreDelDia)
}*/


if(dia>7 || dia<1){
    console.log("Ingresar un numero entre 1 y 7")
}else{
    nombreDelDia=dias[dia-1]
    console.log("El dia seleccionado es "+ nombreDelDia)
}
