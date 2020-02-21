function mostrar()
{
	var contador;
	contador=10;
	while(contador>0)
	{
		console.log(contador);
		contador=contador-1;
		while(isNaN(numeroIngresado))
			{
				numeroIngresado=prompt("Error, solo numeros pa");
				numeroIngresado=parseInt(numeroIngresado);
			}
	}

	


}//FIN DE LA FUNCIÓN