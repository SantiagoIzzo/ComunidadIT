let mensaje="3.14 es un gran numero, pero mejor es 42 que le da significado a la vida"
let pi=parseFloat(mensaje.slice(0,4))
var significadoDeLaVida=parseInt(mensaje.slice(38,40))
var resultado=pi+significadoDeLaVida
console.log(resultado+" es el resultado de sumar las variables "+pi.toString().concat(" y ",significadoDeLaVida))
