let num=11
let esPar=function(numero){
    if(numero%2==0){
        return true
    }else{
        return false
    }
}
if(esPar(num)){
    console.log("El numero es "+num+" par")
}else{
    console.log("El numero es "+num+" impar")
}