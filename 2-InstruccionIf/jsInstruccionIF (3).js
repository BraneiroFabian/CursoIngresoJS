function mostrar()
{

	var edad;
//tomo la edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);  
	if(edad>17)
	{
		alert("es mayor");

	}
	//se usa el else para que se muestre lo contrario si no se cumple la primer funcion.
	else
	{
		alert("es menor");

	}
//tomo la edad  


}//FIN DE LA FUNCIÓN