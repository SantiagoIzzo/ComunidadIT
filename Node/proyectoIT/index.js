const express= require(`express`) 
const exphbs= require('express-handlebars')
const perfil=require("./my_modules/perfil.js")
const bodyParser = require('body-parser')
const app=express()

//configuramos para manejar envios por POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// indicandole cual va a ser el layout general
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Ruta al home
app.get('/', function (req, res){
    res.render('home',{ estilos: ['css/index.css', 'css/slideFechas.css', 'css/institucional.css'], javascript:['js/home.js']})
})

//Ruta a alquiler del salon
app.get('/alquiler-salon', function (req, res) {
    res.render('alquiler-salon',{ estilos: ['css/alquiler-salon.css',"css/contacto.css"], javascript:['js/slideSalon.js']})
})
//Ruta a comision directiva
app.get('/comision-directiva', function (req, res) {
    res.render('comision-directiva',{ estilos: ['css/comision-directiva.css']})
})
//Ruta a aranceles
app.get('/aranceles', function (req, res) {
    res.render('aranceles',{ estilos: ['css/aranceles.css']})
})
//Ruta a contacto
app.get('/contacto', function (req, res) {
    res.render('contacto',{ estilos: ['css/contacto.css']})
})
//Ruta a eventos
app.get('/eventos', function (req, res) {
    res.render('eventos',{ estilos: ['css/eventos.css']})
})
//Ruta a historia
app.get('/historia', function (req, res) {
    res.render('historia',{ estilos: ['css/historia.css']})
})
//Ruta a institucional
app.get('/institucional', function (req, res) {
    res.render('institucional',{ estilos: ['css/institucional.css']})
})
//Ruta a portal de socio
app.get('/portal', function (req, res) {
    res.render('portal',{ estilos: ['css/portal.css'],javascript:['js/validarLogin.js']})
})
//Ruta a perfil de socio
// javascript:['validarLogin.js']
app.post('/validarlogin', function (req, res) {
    const usuario=req.body.usuario
    console.log(usuario)
    res.redirect('/perfil');
})
app.get('/perfil', function (req, res) {
    res.render('perfil',{ estilos: ['css/perfil.css'],nombre:perfil.nombreSocio, apellido:perfil.apellidoSocio,mensajes:perfil.mensajes})
})

//ruta de form login
// app.get('/submitporget', function (req, res) {
//     console.log(req.query) // vemos en la consola del server el objeto query con todos los datos
    
//     var variable="Soy la respuesta de tu mensaje"
//     res.send(`
//       Nombre: ${variable}
//     `)
// })

//ruta estatica 
app.use(express.static('public'))

//manejador de errores 
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Algo no anda bien, error 500")
})

app.use(function (req, res, next) {
    res.status(404).send("No se puede encontrar, error 404")
})

// indicandole en que puerto tiene que escuchar
app.listen(3000,function(){
    console.log("Example app listening on port 3000!")
})

