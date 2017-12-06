let datos="Clausura)  River Plate 2000  (Apertura)	Boca Juniors 2001 (Clausura)	San Lorenzo de Almagro (Apertura)	Racing Club 2002 (Clausura)	River Plate (Apertura)	Independiente 2003 (Clausura)	River Plate (Apertura)	Boca Juniors 2004 (Clausura)	River Plate (Apertura)	Newell´s Old Boys 2005 (Clausura)	Vélez Sarsfield (Apertura)	Boca Juniors 2006 (Clausura)	Boca Juniors (Apertura) Estudiantes de La Plata 2007 (Clausura)	San Lorenzo de Almagro (Apertura)	Lanús 2008 (Clausura)	River Plate (Apertura)	Boca Juniors 2009 (Clausura)	Vélez Sársfield (Apertura)	Bánfield 2010 (Clausura)	Argentinos Juniors (Apertura)	Estudiantes de La Plata 2011 (Clausura) Vélez Sársfield (Apertura) Boca Juniors 2012 (Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield 2013 (Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro 2014 (Torneo Final)	River Plate (Torneo Inicial) Racing Club 2015 (Campeonato de Primera División) Boca Juniors 2016 (Campeonato de Primera División) Lanús 2017 (Campeón del Campeonato de Primera División 2016/17) Boca Juniors"

let año=2012


datos=datos.split("(")
let campeones=0
if(año>2017 && año<2000){
    console.log("Ingrese un año entre 200 y 2017")
    campeones=-1
}
for(i=0;i<datos.length;i++){
    if(datos[i].indexOf(año)!=-1){
        campeones+=
        console.log("("+datos[i])
    }
}
if(campeones==0){
    console.log("Ese años no salio campeón nadie")
}
