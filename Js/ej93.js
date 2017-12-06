let numero=0
let acum=""

do{
    acum=acum+"*"
    numero++
}while(numero<=10)

for(i=0;i<=10;i++){
    console.log(acum)
    acum=acum.slice(0,acum.length-1)
}