function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';


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
			
			if (numeroIngresado<0) 
			{
				negativo=negativo*numeroIngresado;
			}else
			{
				if (numeroIngresado>0) 
				{
					positivo=positivo+numeroIngresado;
				}			

			}
	respuesta=prompt("Ingrese si para continuar");				
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN