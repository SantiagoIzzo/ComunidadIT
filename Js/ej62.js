let numeroDeMes=13
let nombreDelMes=null
let cantidadDeDias=null

switch (numeroDeMes) {
    case 1:
        nombreDelMes="Enero";
        cantidadDeDias="31"
        break;
    case 2:
        nombreDelMes="Febrero";
        cantidadDeDias="28/29"
        break;
    case 3:
        nombreDelMes="Marzo";
        cantidadDeDias="31"
        break;
    case 4:
        nombreDelMes="Abril";
        cantidadDeDias="30"
        break;
        
    case 5:
        nombreDelMes="Mayo";
        cantidadDeDias="31"
        break; 

    case 6:
        nombreDelMes="Junio";
        cantidadDeDias="30"
        break; 

    case 7:
        nombreDelMes="Julio";
        cantidadDeDias="31"
        break; 

    case 8:
        nombreDelMes="Agosto";
        cantidadDeDias="31"
        break; 

    case 9:
        nombreDelMes="Semptiembre";
        cantidadDeDias="31"
        break; 

    case 10:
        nombreDelMes="Octubre";
        cantidadDeDias="30"
        break;  

    case 11:
        nombreDelMes="Nomviembre";
        cantidadDeDias="31"
        break; 
}
if(nombreDelMes!=null){
    console.log("El mes seleccionado es "+nombreDelMes+" y tiene "+cantidadDeDias+" de días")
}else{
    console.log("Ingrese un valor entre 1 y 12")
}