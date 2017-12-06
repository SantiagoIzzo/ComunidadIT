let ordenarNumeros=function(numero1,numero2,numero3,descendente){
    let numeros=[numero1,numero2,numero3]
    let aux=0;
    for(i=1;i<numeros.length;i++){
        if(numeros[i-1]>numeros[i]){
            aux=numeros[i-1]
            numeros[i-1]=numeros[i]
            numeros[i]=aux
        }
    }
    if(descendente){
        numeros.reverse()
    }

    console.log(numeros)
}
ordenarNumeros(10,8,25,false)