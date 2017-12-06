let fibonacci = function(){
    fb=0
    fb1=0
    fb2=1
    console.log(fb1)
    console.log(fb2)
    for(i=2;i<10;i++){
        console.log(fb1+fb2)
        fb=fb1
        fb1=fb2
        fb2=fb+fb2
    }
}
fibonacci()