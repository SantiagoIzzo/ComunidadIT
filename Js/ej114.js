let texto1="Estoy viendo need for speed por primera vez"
let texto2

let invertir= function(texto){
    let nuevoTexto=""
    let largo=texto.length-1
    for(i=largo;i>=0;i--){
        nuevoTexto= nuevoTexto+texto.charAt(i)
        console.log(i)
    }
    return nuevoTexto
}

texto2=invertir(texto1)
console.log(texto2)
