function mostrar()
{
	var numero;
	


	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	//while(!(numero>0 && numero<10))
	while(numero<0||numero>10)
	{
		numero = prompt("Re,ingrese un número entre 0 y 10.pa bote");
		numero=parseInt(numero);
	}





	
	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN