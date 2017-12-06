var helados=["Chocolate","Vainilla","Menta Granizada","Frutillas a la Crema","Mantecol","Chocolate Blanco","Banana Split","Tiramisu","Melon","Limon","Bombon Rocher"]
var nuevosHelados=[]
var agregarGusto=function(nuevoGusto, listaGustos){
    listaGustos.push(nuevoGusto)
}


agregarGusto("Chocolate Granizado",helados)
helados.reverse()
nuevosHelados.unshift(helados.shift())
nuevosHelados.unshift(helados.shift())


helados.forEach(function(gusto){
    console.log(gusto)
})
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
nuevosHelados.forEach(function(helados){
    console.log(helados)
})