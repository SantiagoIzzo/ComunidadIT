let numero=0
let acum=0

do{
    if(numero%2==0){
        acum=acum+numero
    }numero++
}while(numero<=1000)
console.log(acum)