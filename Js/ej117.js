let alumnos=["Santiago","Nicolas","Matias","Nacho","Pablo"]
let num=0

alumnos.forEach(function(alumno){
    if(num%2===0){
        console.log(alumno)
    }
    num=num+1
})