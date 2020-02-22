function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var elMaximo;
	var elMinimo;
	var acumulador=0;
	// declarar variables
	
	var respuesta='si';
	
	elMinimo=parseInt(elMinimo);
	elMaximo=parseInt(elMaximo);
	
	elMaximo=elMaximo+numeroIngresado;
	while(respuesta!='no')
	{
			contador++;
			numeroIngresado=prompt("Ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
			while(isNaN(numeroIngresado))
			{
				numeroIngresado=prompt("Error, solo numeros pa");
				numeroIngresado=parseInt(numeroIngresado);
			}
			if (elMaximo>numeroIngresado); 
			{
				elMaximo=numeroIngresado;
			}
			if (elMinimo<numeroIngresado) 
			{
				elMinimo=elMinimo+numeroIngresado;
				elMinimo=numeroIngresado;
			}
	acumulador=numeroIngresado+acumulador;		
	respuesta=prompt("Ingrese si para continuar");
	}

	
	document.getElementById('maximo').value=elMaximo;
	document.getElementById('minimo').value=elMinimo;


}//FIN DE LA FUNCIÓN