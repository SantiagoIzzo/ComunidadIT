let acum=0
let cont=0
for(i=0;i<=10000;i++){
    acum=acum+i
    if(i%2==0){
        cont=cont+1
    }
    if(cont==10){
        break
    }
}
console.log(cont+","+i +","+acum)