let obtenerIDUsuario=function(){
    return 40
}
let usuarioValido= function(obtenerUsuario){
    if(obtenerUsuario>30){
        return false
    }else{
            return true
    }   
}

if(usuarioValido(obtenerIDUsuario())){
    console.log("El usuario es valido")
}else{
    console.log("El usuario es invalido")
}