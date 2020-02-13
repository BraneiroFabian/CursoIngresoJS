/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	var Centígrados;
	var Fahrenheit;

	Fahrenheit=document.getElementById('Temperatura').value;
	Fahrenheit=parseInt(Fahrenheit);
	Centígrados=Fahrenheit-32;
	alert(Fahrenheit+" Fahrenheit son "+Centígrados+" Centígrados");



}

function CentigradosFahrenheit () 
{

	var Centígrados;
	var Fahrenheit;

	Centígrados=document.getElementById('Temperatura').value;
	Centígrados=parseInt(Centígrados);
	Fahrenheit=Centígrados+32;
	alert(Centígrados+" Centígrados son "+Fahrenheit+" Fahrenheit");
	
	
}
