let suma= function(){
    let acum=0
    for(i=0;i<arguments.length;i++){
        acum=acum+arguments[i]
    }
    return acum
}
console.log(suma(2,2,2,2,2,2,2,2,2,2,2))