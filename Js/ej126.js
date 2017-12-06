var helados=["Chocolate","Vainilla","Menta Granizada","Frutillas a la Crema","Mantecol","Chocolate Blanco","Banana Split","Tiramisu","Melon","Limon","Bombon Rocher"]
var agregarGusto=function(nuevoGusto, listaGustos){
    listaGustos.push(nuevoGusto)
}


agregarGusto("Chocolate Granizado",helados)
helados.reverse()
helados.forEach(function(gusto){
    console.log(gusto)
})