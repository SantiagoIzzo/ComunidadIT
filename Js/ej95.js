
let f=0
let f1=0
let f2=1
console.log(f1)
console.log(f2)
for(i=0;i<=10;i++){
    console.log(f1+f2)
    f=f1+f2
    f1=f2
    f2=f
}
