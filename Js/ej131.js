var alumnas=["Sofia","Maru","Julieta","Melina","Antonela"]
var alumnos=["Santiago","Matias","Ezequiel","Alexis","Juan Martin"]
var curso=alumnos.concat(alumnas)
var indice=0

console.log(alumnas[0],alumnas[1],alumnas[2],alumnas[3],alumnas[4])
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

while(indice<alumnos.length){
    console.log(alumnos[indice])
    indice+=1
}
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

for(let i=0;i<curso.length;i++){
    console.log(curso[i])
}

