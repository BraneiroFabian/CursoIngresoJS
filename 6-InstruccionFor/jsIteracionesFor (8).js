function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;
	var bandera;
	bandera=0;
	numeroIngresado=prompt("Ingrese numero");
	//validar
	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{

		if (numeroIngresado%numeroAnterior==0) 
		{
			bandera=1;
			break;
		}


	}
	if(bandera!==1)
	{
		alert("Es primo el "+numeroIngresado);
	}


}//FIN DE LA FUNCIÓN