function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var temperatura;

	nombre=prompt("Ingrese su nombre");
	while(!isNaN(nombre))
	{
		nombre=prompt("Ingrese un nombre valido");
	}
	edad=prompt("Ingrese su edad");
	while(isNaN(edad)||edad<1||edad>110)
	{
		edad=prompt("Ingrese una edad valida");
		temperatura=parseInt(temperatura);
	}

	sexo=prompt("Ingrese su sexo M/F");
	while(sexo!="M"||sexo=!"F")
	{
		sexo=prompt("Ingrese un sexo valido");
	}

	temperatura=prompt("Ingrese una temperatura");
	while(isNaN(temperatura)||temperatura<-30||temperatura>30)
	{
		temperatura=prompt("Ingrese una temperatura valida");
		temperatura=parseInt(temperatura);
	}






}
