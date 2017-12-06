let userName="nacho"
let userPassword="Nerd1979"
let autenticarUsuario= function(usuario, password){
    if((usuario==="nacho" && password==="Nerd1979") ||(usuario==="pedro" && password==="Batman0217") || (usuario==="marta" && password==="Madre2312")){
        return true
    }
    return false
}
if(autenticarUsuario(userName,userPassword)){
    console.log("Bienvenido "+ userName +" te estaba esperando")
}else{
    console.log("Porfavor ingrese las credenciales validas")
}