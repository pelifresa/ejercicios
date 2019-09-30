function playa(){
	var playa=[{
		"ccaa":"galicia",
		"bandera":"verde",
		"deporte":"surf",
	},
	{
		"ccaa":"asturias",
		"bandera":"amarilla",
		"deporte":"surf",
	},
	{
		"ccaa":"cantabria",
		"bandera":"verde",
		"deporte":"kite",
	},
	{
		"ccaa":"paisvasco",
		"bandera":"verde",
		"deporte":"surf",
	},
	{
		"ccaa":"cataluna",
		"bandera":"roja",
		"deporte":"kite",
	},
	{
		"ccaa":"valencia",
		"bandera":"amarilla",
		"deporte":"ninguno",
	},
	{
		"ccaa":"murcia",
		"bandera":"verde",
		"deporte":"ninguno",
	},
	{
		"ccaa":"andalucia",
		"bandera":"verde",
		"deporte":"surf",
	},
	]

	var comunidad=document.getElementById("ccaa").value;
	for(i in playa){
		if(playa[i].ccaa==comunidad){
			document.getElementById("resultado").innerHTML="En "+playa[i].ccaa+" hay bandera "+playa[i].bandera+" y puedes practicar "+playa[i].deporte;
		}
	}
}