let obtenerPerimetroRectangulo= function(base,altura){
    if(base===altura){
        return base*4
    }else if(base!==altura){
        return (base*2)+(altura*2)
    }
}

let perimetro=obtenerPerimetroRectangulo(50,50)

console.log("El perimetro es "+perimetro)

if(perimetro>100){
    console.log("El perimetro es muy grande")
}else{
    console.log("El perimetro no es muy grande")
}