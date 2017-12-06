let numero=0
let acum=""

do{
    acum=acum+"*"
    numero++
}while(numero<=10)

do{
    console.log(acum)
    acum=acum.slice(0,acum.length-1)
    numero--
}
while(numero>=0)