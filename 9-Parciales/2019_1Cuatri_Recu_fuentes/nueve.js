function mostrar()
{

	var sexo;
	var notaIngresada;
	var edad;
	var respuesta=true;
	var varonesAprobados=0;
	var notaMenores=0;
	var cantidadMenores=0;
	var notaAdolescentes=0;
	var cantidadAdolescentes=0;
	var notaMayores=0;
	var cantidadMayores=0;
	var notasVarones=0;
	var cantidadVarones=0;
	var notaNenas=0;
	var cantidadMujeres=0;


	while(respuesta==true)
	{
		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);

		}while(isNaN(edad));

		do
		{
			sexo=prompt("Ingrese el sexo");

		}while(!(sexo=="f"||sexo=="m"));

		do
		{
			notaIngresada=prompt("Ingrese la nota");
			notaIngresada=parseInt(notaIngresada);
		}while(isNaN(notaIngresada>0&&notaIngresada<10));

		if (notaIngresada>5&&sexo=="m") 
		{
			varonesAprobados=varonesAprobados+1;
		}
		if (edad<18) 
		{
			notaMenores=notaMenores+notaIngresada;
			cantidadMenores=cantidadMenores+1;

		}
		if (edad>12&&edad<18) 
		{
			notaAdolescentes=notaAdolescentes+notaIngresada;
			cantidadAdolescentes=cantidadAdolescentes+1;
		}
		if (edad>18) 
		{
			notaMayores=notaMayores+notaIngresada;
			cantidadMayores=cantidadMayores+1;
		}

		if (sexo=="m") 
		{
			notasVarones=notasVarones+notaIngresada;
			cantidadVarones=cantidadVarones+1;

		}
		if (sexo=="f") 
		{

			notaNenas=notaNenas+notaIngresada;
			cantidadMujeres=cantidadMujeres+1;

		}	




		respuesta=confirm("Presione aceptar para continuar");
	}

	document.write("Cantidad de varones aprobados: "+varonesAprobados+"<br>");
	document.write("Promedio de notas de menores de edad: "+notaMenores/cantidadMenores+"<br>");
	document.write("Promedio de notas de adolescentes: "+notaAdolescentes/cantidadAdolescentes+"<br>");
	document.write("Promedio de notas de mayores: "+notaMayores/cantidadMayores+"<br>");
	document.write("Promedio de notas varones: "+notasVarones/cantidadVarones+"<br>");
	document.write("Promedio de notas mujeres: "+notaNenas/cantidadMujeres+"<br>");

	
}
