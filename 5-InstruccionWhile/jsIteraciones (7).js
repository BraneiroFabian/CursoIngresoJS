function mostrar()
{

	var contador;
	contador=0;
	var acumulador;
	acumulador=0;
	var respuesta; 
	respuesta='si';
	var numeroIngresado;

	while(respuesta!="terminar")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Papi solo numeros");
			numeroIngresado=parseInt(numeroIngresado);
		}
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Si desea terminar el programa escriba terminar");

	}
	alert(acumulador);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN