let acum=0
for(i=0;i<1000;i++){
    acum=acum+i
    if(acum>100){
        break
    }
}
console.log(i+","+acum)