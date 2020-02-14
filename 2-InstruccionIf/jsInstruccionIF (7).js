function mostrar()
{
	var edad;
 	//tomo la edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);  
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");

	}


}//FIN DE LA FUNCIÓN