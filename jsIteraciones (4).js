function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);

	//while(!(numero>0 && numero<10))
	while(numeroIngresado<0||numeroIngresado>10)
	{
		numeroIngresado = prompt("Solo numeros del 0 al 10");
		numeroIngresado=parseInt(numeroIngresado);

		
		while(isNaN(numeroIngresado))
			{
				numeroIngresado=prompt("Error, solo numeros pa");
				numeroIngresado=parseInt(numeroIngresado);
			}
	}






	document.getElementById('Numero').value=numeroIngresado;
}//FIN DE LA FUNCIÓN