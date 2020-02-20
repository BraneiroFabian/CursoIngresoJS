function mostrar()
{

var sexo = prompt("ingrese f ó m .");
	

	
	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("No entendí que sexo es");
		
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN