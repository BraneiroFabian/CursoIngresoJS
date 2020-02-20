function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
	switch(mesDelAño)
	{
		case "Febrero":
		mensaje="Este mes no tiene mas de 29 dias";
			break;
		default:
		mensaje="Este mes tiene 30 dias o mas";
			break;
	}


	alert(mensaje);
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN