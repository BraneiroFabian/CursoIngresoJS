function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;


	while(respuesta=='si')
	{		
			contador++;
			numeroIngresado=prompt("Ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
			while(isNaN(numeroIngresado))
			{
				numeroIngresado=prompt("Error, solo numeros pa");
				numeroIngresado=parseInt(numeroIngresado);
			}

			acumulador=numeroIngresado+acumulador;
			respuesta=prompt("Ingrese si para continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN