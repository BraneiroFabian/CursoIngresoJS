//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{

	//mas temperatura mas alta, el nombre, el sexo
	//si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60), mostrar mensaje que diga Riesgo y "nombre"
	//mostrar la temperatura del mas joven y del mas viejo
	//promedio de edad->total
	//promedo de edad->por mujeres

	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta=true;
	var edadMaxima;
	eMaxima=-100;
	var edadMinima;
	edadMinima=100;
	var temperaturaMayor=0;
	var temperaturaMenor=0;

	while(respuesta!=="n")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");

		}while(!(isNaN(nombre)));


		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);

		}while(isNaN(edad));

		do
		{
			sexo=prompt("Ingrese el sexo");

		}while(!(sexo=="f"||sexo=="m"));

		do
		{
		temperatura=prompt("Ingrese su temperatura");
		temperatura=parseInt(temperatura);
		}while(isNaN(temperatura)&&temperatura<36||temperatura>41);
	

		respuesta=prompt("Si desea seguir ingresando datos, presione S");

		if (temperatura>37&&edad<13||edad>60) 
		{
			alert("Riesgo "+nombre);
		}

		if (edad>edadMaxima) 
		{
			edadMaxima=edad;
			temperaturaMayor=temperaturaMayor+temperatura;

		}

		if(edad<edadMinima)
		{
			edadMinima=edad;
			temperaturaMenor=temperaturaMenor+temperatura;

		}

	}
	

	document.write("")
	
	
    //testeando git
    //alert(segundoPre); si la variable no existe no podemos hacer nada
	// Es un valor literal si esta entre ""
	//alert("Tal cual");//Literal
    //alert(apellido);
    //alert("apellido")
    //alert (); sale vacio
}

