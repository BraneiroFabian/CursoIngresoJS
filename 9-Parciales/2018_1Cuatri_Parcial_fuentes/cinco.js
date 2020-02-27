function mostrar()
{


	var planetas;
	planetas=prompt("Ingrese un planeta");
	while(isNaN(planetas))
		{
			planetas=prompt("No valido, ingrese un Planeta nuevamente");

		}
	switch(planetas)
	{
		case "mercurio":
		case "venus":
		alert("Aca hace mas calor");
		break;
		case "tierra":
		alert("Aca vivimos");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		alert("Aca hace mas frio");
		break;
		default:
		alert("Por favor ingrese un planeta valido");
		
		break;
		
	}

}
