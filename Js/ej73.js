let numero=0
let acum=""

while(numero<=20){
    acum=acum+"*"
    numero++
}
while(numero>=0){
    console.log(acum)
    acum=acum.slice(0,acum.length-1)
    numero--
}