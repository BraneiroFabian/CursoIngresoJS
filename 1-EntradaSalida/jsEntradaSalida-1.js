//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{

	var nombre;
	var cantidadPersonas;
	var cantidadDias;
	var formaDePago;
	var formaDePagoMaxima;
	var nombreMaximo;
	var diasMaximo;
	var contador=0;
	var cantidadPersonasMax;
	var contadorEfectivo=0;
	var contadorCredito=0;
	var contadorQr=0;
	var respuesta=true;
	var promedioCantidadDias=0;

	while(respuesta==true)
	{
		
		

		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));

		do
		{
			cantidadPersonas=prompt("Ingrese cantidad de personas a hospedar");
			cantidadPersonas=parseInt(cantidadPersonas);
		}while(isNaN(cantidadPersonas));


		do
		{
			cantidadDias=prompt("Ingrese cantidad de dias a quedarse");
			cantidadDias=parseInt(cantidadDias);
		
		}while(isNaN(cantidadDias));

		do
		{
			formaDePago=prompt("Ingrese forma de pago (efectivo, tarjeta o QR)");
		
	}while(formaDePago.toLowerCase()!="efectivo"&&formaDePago.toLowerCase()!="tarjeta"&&formaDePago.toLowerCase()!="qr");

		if (contador==0) 
		{
			nombreMaximo=nombre;
			diasMaximo=cantidadDias;
			cantidadPersonasMax=cantidadPersonas;
			formaDePagoMaxima=formaDePago;
		}

		if (cantidadPersonas>cantidadPersonasMax) 
		{
			nombreMaximo=nombre;
		}	
		if (cantidadDias>diasMaximo) 
		{
			cantidadPersonasMax=cantidadPersonas;
		}
		switch(formaDePago)
		{
			case "efectivo":
			contadorEfectivo=contadorEfectivo+1;
				break;
			case "credito":
			contadorCredito=contadorCredito+1;
				break;
			case "qr":
			contadorQr=contadorQr+1;
				break;
			default:
				break;

		}




		promedioCantidadDias=promedioCantidadDias+cantidadDias;

		respuesta=confirm("Presione aceptar para continuar");
		contador=contador+1;
		
	}
	if (contadorEfectivo>contadorCredito&&contadorEfectivo>contadorQr)
	 {
	 	document.write("La forma de pago mas utilizada fue efectivo "+"<br>");
	 }


	if (contadorCredito>contadorEfectivo&&contadorCredito>contadorQr)
	 {
	 	document.write("La forma de pago mas utilizada fue credito"+"<br>");

	 }
	if (contadorQr>contadorCredito&&contadorQr>contadorEfectivo)
	 {
	 	document.write("La forma de pago mas utilizada fue QR "+"<br>");
	 }


	 document.write("El huesped que trajo mas personas fue "+nombreMaximo+"<br>");
	 document.write(cantidadPersonasMax+" personas se quedaron "+diasMaximo+" dias, mas que los demas"+"<br>");
	 document.write("El promedio de cantidad de dias por reserva es "+promedioCantidadDias/contador+"<br>");














































}



	//mas temperatura mas alta, el nombre, el sexo
	//si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60), mostrar mensaje que diga Riesgo y "nombre"
	//mostrar la temperatura del mas joven y del mas viejo
	//promedio de edad->total
	//promedo de edad->por mujeres




