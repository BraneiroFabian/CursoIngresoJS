function mostrar()
{

	var contador;
	contador=0;
	while(contador<10)
	{
		console.log(contador);
		contador=contador+1;
		while(isNaN(numeroIngresado))
			{
				numeroIngresado=prompt("Error, solo numeros pa");
				numeroIngresado=parseInt(numeroIngresado);
			}
	}
	


}//FIN DE LA FUNCIÓN