function mostrar()
{

	var contador;
	contador=0;
	var positivo;
	positivo=0;
	var negativo;
	negativo=1;
	var numeroIngresado;
	var respuesta='si';


	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Papi solo numeros");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if (numeroIngresado>0) 
		{
			positivo=positivo+numeroIngresado;
		}
		if (numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado;
		}
		respuesta=prompt("Si desea continuar escribir si");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN