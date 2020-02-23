function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	while(contador<5)
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
			
		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN