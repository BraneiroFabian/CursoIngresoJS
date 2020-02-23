function mostrar()
{

var sexo = prompt("ingrese f ó m .");
	

	
	while(sexo!="f" && sexo!="m")
	{
		sexo=alert("Incorrecto");
		sexo = prompt("Reingrese");

	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN