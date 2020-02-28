/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	var nombreHuesped;
	var cantidadPers;
	cantidadPers=0;
	var cantidadDias;
	cantidadDias=0;
	var formadePago;
	var respuesta=true;
	var huespedMayReserva;
	var huespedMenReserva;
	var huespedMasDias;
	var huespedMenDias;
	var contador;
	contador=0;
	


	while(respuesta!=="N")
	{	
		contador=contador+1;

		do
		{
			nombreHuesped=prompt("Ingrese su nombre");

		}while(!(isNaN(nombreHuesped)));

		do
		{

			cantidadPers=prompt("Ingrese la cantidad de personas a hospedar");
			cantidadPers=parseInt(cantidadPers);


		}while(isNaN(cantidadPers));

		do
		{

			cantidadDias=prompt("Ingrese la cantidad de dias a hospedarse");
			cantidadDias=parseInt(cantidadDias);
		}while(isNaN(cantidadDias));

		do
		{

			formadePago=prompt("Ingrese su forma de pago (Debito, credito o efectivo)");


		}while(!(isNaN(formadePago)));

		respuesta=prompt("Desea seguir ingresando datos? (S/N)");

		if (contador==1) 
		{
			
			huespedMayReserva=cantidadPers;

		}

		
		if (huespedMayReserva<cantidadPers) 
		{
			huespedMayReserva=nombreHuesped;

		}else
			{
				huespedMenReserva=nombreHuesped;
			}

			if (contador==1) 
			{
				
				huespedMasDias=cantidadDias;

			}

			


			if (huespedMasDias<cantidadDias) 
			{
				huespedMasDias=nombreHuesped;

			}else
				{
					huespedMenDias=nombreHuesped;
				}





	}


	document.write("El huesped con la mayor reserva es: " +nombreHuesped+"<br>");
	document.write("El huesped que se quedo mas dias es: "+nombreHuesped+"<br>");
	

      		
}
